import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl pb-16 md:pb-20 lg:pb-24">
        {/* Information We Collect */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We may collect the following types of information when you use our
            services:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">•</span>
              <span>Personal details (name, email, phone number)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">•</span>
              <span>Account login information</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">•</span>
              <span>
                Payment information (processed securely through third-party
                providers)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">•</span>
              <span>
                Usage data (pages visited, clicks, browser type, IP address)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">•</span>
              <span>
                Cookies and tracking data (to improve user experience)
              </span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            We use your information to:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Provide and maintain our services</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Improve user experience and performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Process payments securely</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>
                Communicate with you about updates, promotions, or support
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Ensure compliance with legal obligations</span>
            </li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Cookies & Tracking
          </h2>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            Our website uses cookies to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-3 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Remember your preferences</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Track website traffic</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Analyze site performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Show relevant ads</span>
            </li>
          </ul>
          <p className="text-yellow-600 text-sm md:text-base flex items-start">
            <span className="text-yellow-500 mr-2 mt-1">👉</span>
            <span>
              You can manage or disable cookies anytime through your browser
              settings.
            </span>
          </p>
        </section>

        {/* Data Protection & Security */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Data Protection & Security
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>
                We use encryption and secure servers to protect your data.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>
                We never sell or share your personal information with
                unauthorized third parties.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>
                Only authorized personnel can access your data, only when
                necessary.
              </span>
            </li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            We may use trusted third-party providers (such as payment gateways,
            analytics, or marketing tools). These partners are bound by data
            confidentiality and compliance standards.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Rights
          </h2>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            You have the right to:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Access the data we hold about you</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Request corrections or updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>
                Request deletion of your data ("Right to be Forgotten")
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Opt out of marketing communications</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Manage cookie preferences</span>
            </li>
          </ul>
        </section>

        {/* Compliance */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Compliance
          </h2>
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
            We comply with:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>GDPR (General Data Protection Regulation - EU)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>CCPA (California Consumer Privacy Act - USA)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1">•</span>
              <span>Other applicable US privacy laws and regulations</span>
            </li>
          </ul>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            We may update this Privacy Policy from time to time. Updates will be
            posted here with a revised "Last Updated" date.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            If you have any questions about this Privacy Policy or how your data
            is handled, contact us:
          </p>
          <div className="text-gray-700 text-sm md:text-base">
            <div className="mb-2">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Email:</span>

                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=services@zhbsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <span className="flex items-center gap-2.5 cursor-pointer">
                    services@zhbsolutions.com
                  </span>
                </Link>
              </div>
            </div>

            <div className="mb-3">
              <Link
                href="https://wa.me/14047868166?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2.5 cursor-pointer">
                  <span className="font-semibold">Phone:</span>
                  <span className="hover:underline">(404) 786-8166</span>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="https://wa.me/14049363567?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2.5 cursor-pointer">
                  <span className="font-semibold">Cell:</span>
                  <span className="hover:underline">(404) 936-3567</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
