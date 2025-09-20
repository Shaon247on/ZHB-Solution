"use client";

import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Zod validation schema
const commentFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .regex(/^[\p{L} ]+$/u, "Name may contain only alphabetic characters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  comment: z
    .string()
    .min(1, "Comment is required")
    .min(10, "Comment must be at least 10 characters")
    .max(1000, "Comment cannot exceed 1000 characters"),
});

type CommentFormData = z.infer<typeof commentFormSchema>;

function CommentForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState<boolean>(false);
  
  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const verifyRecaptchaToken = async (token: string) => {
    setRecaptchaLoading(true);
    try {
      const response = await fetch('/api/verify-recaptcha-v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseText = await response.text();
      if (!responseText) {
        throw new Error('Empty response');
      }

      const result = JSON.parse(responseText);
      
      if (result.success) {
        setRecaptchaVerified(true);
        return true;
      } else {
        setRecaptchaVerified(false);
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
        toast.error("reCAPTCHA verification failed. Please try again.");
        return false;
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      setRecaptchaVerified(false);
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      toast.error("reCAPTCHA verification failed. Please try again.");
      return false;
    } finally {
      setRecaptchaLoading(false);
    }
  };

  const handleRecaptchaChange = async (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaVerified(false);
    
    if (token) {
      // Immediately verify the token on the server
      await verifyRecaptchaToken(token);
    }
    
    console.log("reCAPTCHA token:", token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setRecaptchaVerified(false);
    console.log("reCAPTCHA expired");
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setRecaptchaVerified(false);
    console.log("reCAPTCHA error");
  };

  const handleSubmit = async (data: CommentFormData) => {
    try {
      // Double-check verification status
      if (!recaptchaVerified || !recaptchaToken) {
        toast.error("Please complete the reCAPTCHA verification.");
        return;
      }

      // Send email with EmailJS (no need to verify again since we already did)
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Different template for comments
        {
          name: data.name,
          email: data.email,
          comment: data.comment,
          timestamp: new Date().toISOString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Comment submitted successfully!", result.status, result.text);
      toast.success("Your comment has been submitted successfully!");
      form.reset();
      setRecaptchaToken(null);
      setRecaptchaVerified(false);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Comment submission failed:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full p-4 space-y-6">
      <Card className="w-full" style={{ backgroundColor: "#F9F8F4" }}>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">
            Leave a comment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Comment Field */}
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Comment
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="w-full min-h-[120px] bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-y"
                        placeholder="Share your thoughts..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* reCAPTCHA v2 */}
              <div className="flex flex-col items-center space-y-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleRecaptchaChange}
                  onExpired={handleRecaptchaExpired}
                  onError={handleRecaptchaError}
                  theme="light"
                  size="normal"
                />
                {recaptchaLoading && (
                  <div className="text-sm text-gray-600 flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
                    <span>Verifying...</span>
                  </div>
                )}
                {recaptchaToken && recaptchaVerified && (
                  <div className="text-sm text-green-600 flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Verification successful</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting || !recaptchaVerified || recaptchaLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>

          {/* reCAPTCHA v2 Privacy Notice */}
          <div className="text-xs text-gray-500 text-center mt-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CommentForm;