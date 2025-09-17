"use client";

import React from "react";
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
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  serviceRequired: z.enum(services as [string, ...string[]]),
  projectBudget: z.enum(budgetRanges as [string, ...string[]]),
  projectDetails: z.string().min(10, "Please provide at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
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

  const handleSubmit = async (data: FormData) => {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not available. Please refresh the page and try again.");
      return;
    }

    try {
      // Execute reCAPTCHA v3 and get token
      const recaptchaToken = await executeRecaptcha("contact_form_submit");
      
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
          action: 'contact_form_submit'
        }),
      });

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResponse.ok || !recaptchaResult.success) {
        toast.error("Security verification failed. Please try again.");
        return;
      }
console.log("rechaptcha scroe",recaptchaResult.score)
      // Check the score (optional - you can adjust the threshold)
      if (recaptchaResult.score < 0.5) {
        toast.error("Security check failed. Please contact us directly if you're having trouble.");
        return;
      }

      // Send email with EmailJS
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
          recaptchaScore: recaptchaResult.score, // Optional: include score for reference
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("SUCCESS!", result.status, result.text);
      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full py-6 px-8 max-w-[692px] bg-white">
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

          {/* Submit */}
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          
          <div className="text-center pt-2">
            <p className="text-sm lg:text-lg font-semibold">
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

          {/* reCAPTCHA v3 Badge Notice */}
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