import React from 'react';
import { Button } from '@/components/ui/button';
import { AcceptCookiesButton } from '../element/accept-cookies-button';
import { toast } from 'sonner';
import { CookieSettingsButton } from '../cookie-consent/cookie-banner';

const PrivacyPolicySection = () => {

  const handleToast = ()=>{
    toast.success("Cookies Accepted")
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            At ZHB Solutions, we value your privacy. This page explains how and why we use
            cookies to improve your experience on our website.
          </p>
        </div>

        {/* What Are Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Cookies are small text files stored on your device when you visit our website. They help us recognize your device, remember your preferences, and provide you with a faster and more personalized experience.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Use Cookies
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">We use cookies to:</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ensure the website functions properly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Improve speed, security, and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Understand how visitors interact with our website</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Remember your preferences and settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Deliver relevant ads and measure campaign performance</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Types of Cookies We Use
          </h2>
          <ol className="space-y-3 text-gray-600 text-sm md:text-base ">
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-gray-900">1.</span>
              <span><span className="font-semibold text-gray-900">Essential Cookies</span> - Required for core features like login and navigation.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-gray-900">2.</span>
              <span><span className="font-semibold text-gray-900">Performance Cookies</span> - Track website traffic and improve functionality.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-gray-900">3.</span>
              <span><span className="font-semibold text-gray-900">Functional Cookies</span> - Store your preferences (e.g., language, theme).</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-gray-900">4.</span>
              <span><span className="font-semibold text-gray-900">Advertising Cookies</span> - Show tailored promotions and ads that matter to you.</span>
            </li>
          </ol>
          <p className="text-blue-600 text-sm mt-4 flex items-start">
            <span className="mr-2">👉</span>
            <span>You can manage or disable cookies anytime through your browser settings.</span>
          </p>
        </section>

        {/* Your Cookie Choices */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your Cookie Choices
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">You are in control. You can:</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Accept all cookies for the best experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Manage cookie preferences from our settings panel</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Disable cookies in your browser (note: some features may not work correctly)</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <AcceptCookiesButton className='rounded-full' size={"xl"}/>
              <CookieSettingsButton/>
            </div>
          </div>
        </section>

        {/* Data Privacy & Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Data Privacy & Security
          </h2>
          <h3 className="font-semibold text-gray-900 mb-4">
            At ZHB Solutions, your data is always safe:
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm md:text-base md:ml-5">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>We encrypt all sensitive information</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>We never sell your data to third parties</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>We comply with GDPR, CCPA, and US privacy standards</span>
            </li>
          </ul>
        </section>

        {/* Updates to This Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Updates to This Policy
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We may update this Cookies Policy from time to time. Any changes will be posted here with the "Last Updated" date.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            If you have any questions about this Privacy Policy or how your data is handled, contact us:
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">Email:</span>{' '}
              <a href="mailto:privacy@zhbsolutions.com" className="text-blue-600 hover:underline">
                privacy@zhbsolutions.com
              </a>
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">Phone:</span> +1 (XXX) XXX-XXXX
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;