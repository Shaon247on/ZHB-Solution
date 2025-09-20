"use client";

import React, { useRef, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

const services = [
  "Artificial-Intelligence",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solution",
  "Digital Marketing",
];

const budgetRanges = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[\p{L} ]+$/u, "Full name may contain only alphabetic characters and spaces"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  serviceRequired: z.enum(services as [string, ...string[]]),
  projectBudget: z.enum(budgetRanges as [string, ...string[]]),
  projectDetails: z.string().min(10, "Please provide at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState<boolean>(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      serviceRequired: undefined,
      projectBudget: undefined,
      projectDetails: "",
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

  const handleSubmit = async (data: FormData) => {
    try {
      // Double-check verification status
      if (!recaptchaVerified || !recaptchaToken) {
        toast.error("Please complete the reCAPTCHA verification.");
        return;
      }

      // Send email with EmailJS (no need to verify again since we already did)
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: data.fullName,
          companyName: data.companyName,
          email: data.email,
          serviceRequired: data.serviceRequired,
          projectBudget: data.projectBudget,
          projectDetails: data.projectDetails,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("SUCCESS!", result.status, result.text);
      toast.success("Your message has been sent successfully!");
      form.reset();
      setRecaptchaToken(null);
      setRecaptchaVerified(false);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Something went wrong. Please try again later.");
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

  return (
    <div className="w-full py-6 px-8 max-w-[692px] bg-white xl: ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Google" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service Required */}
          <FormField
            control={form.control}
            name="serviceRequired"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Required *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Your Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Budget */}
          <FormField
            control={form.control}
            name="projectBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project budget *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Your Range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Details */}
          <FormField
            control={form.control}
            name="projectDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details *</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Tell us more about your idea"
                    className="w-full border border-gray-300 rounded-md p-2 min-h-[100px] resize-vertical"
                    {...field}
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

          {/* Submit */}
          <Button
            type="submit"
            size={"xl"}
            disabled={form.formState.isSubmitting || !recaptchaVerified || recaptchaLoading}
            className="w-full text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          
          <div className="text-center pt-2">
            <p className="text-sm lg:text-base font-semibold">
              Not Interested to submit the form?{" "}
              <Link
                href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline font-medium"
              >
                Book A Call Directly
              </Link>
            </p>
          </div>

          {/* reCAPTCHA v2 Privacy Notice */}
          <div className="text-xs text-gray-500 text-center">
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
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;