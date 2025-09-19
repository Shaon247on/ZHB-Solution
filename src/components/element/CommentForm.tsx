"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
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
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const handleSubmit = async (data: CommentFormData) => {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not available. Please refresh the page and try again.");
      return;
    }

    try {
      // Execute reCAPTCHA v3 and get token
      const recaptchaToken = await executeRecaptcha("comment_form_submit");
      
      if (!recaptchaToken) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        return;
      }

      // Verify reCAPTCHA on the server side
      const recaptchaResponse = await fetch('/api/verify-recaptcha-v3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          token: recaptchaToken,
          action: 'comment_form_submit'
        }),
      });

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResponse.ok || !recaptchaResult.success) {
        toast.error("Security verification failed. Please try again.");
        return;
      }

      console.log("reCAPTCHA score", recaptchaResult.score);
      
      // Check the score (optional - you can adjust the threshold)
      if (recaptchaResult.score < 0.5) {
        toast.error("Security check failed. Please contact us directly if you're having trouble.");
        return;
      }

      // Send email with EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Different template for comments
        {
          name: data.name,
          email: data.email,
          comment: data.comment,
          recaptchaScore: recaptchaResult.score,
          timestamp: new Date().toISOString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Comment submitted successfully!", result.status, result.text);
      toast.success("Your comment has been submitted successfully!");
      form.reset();
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

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </Form>

          {/* reCAPTCHA v3 Badge Notice */}
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