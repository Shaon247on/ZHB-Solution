'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  serviceRequired: z.string().min(1, 'Please select a service'),
  projectBudget: z.string().min(1, 'Please select your budget range'),
  projectDetails: z.string().min(10, 'Please provide at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit,
  className = '' 
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      serviceRequired: '',
      projectBudget: '',
      projectDetails: '',
    },
  });

  const handleSubmit = (data: FormData) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log('Form submitted:', data);
      // Here you would typically send the data to your API
    }
  };

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Digital Marketing',
    'SEO Services',
    'Brand Identity',
    'Consulting',
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ];

  return (
    <div className={`w-full py-6 px-8 max-w-[792px] bg-white ${className}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-900">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your name"
                    className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent"
                    {...field}
                  />
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
                <FormLabel className="font-medium text-gray-900">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex: Google"
                    className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent"
                    {...field}
                  />
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
                <FormLabel className="font-medium text-gray-900">
                  Email*
                </FormLabel>
                <FormControl className='w-full'>
                  <Input
                    type="email"
                    placeholder="your@example.com"
                    className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent"
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
                <FormLabel >
                  Service Required *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent">
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
                <FormLabel className="font-medium text-gray-900">
                  Project budget *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent">
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
                <FormLabel className="font-medium text-gray-900">
                  Project Details *
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger className="border-0 border-b-2 border-black rounded-none px-0 py-3 focus:border-blue-500 focus:ring-0 bg-transparent">
                      <SelectValue placeholder="Tell us more about your idea" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new-website">I need a new website</SelectItem>
                    <SelectItem value="redesign">Website redesign</SelectItem>
                    <SelectItem value="mobile-app">Mobile app development</SelectItem>
                    <SelectItem value="ecommerce">E-commerce store</SelectItem>
                    <SelectItem value="branding">Brand identity design</SelectItem>
                    <SelectItem value="marketing">Digital marketing campaign</SelectItem>
                    <SelectItem value="custom">Custom solution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size={"xl"}
              className="w-full rounded-full text-lg lg:text-2xl font-semibold bg-blue-600 hover:bg-blue-700 text-white"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>

          {/* Alternative Contact */}
          <div className="text-center pt-2">
            <p className="text-lg lg:text-xl font-semibold">
              Not Interested to submit the form?{' '}
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 underline font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle direct booking logic here
                  console.log('Book a call directly clicked');
                }}
              >
                Book A Call Directly
              </a>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;