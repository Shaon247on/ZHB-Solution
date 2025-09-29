// src/components/cookie-consent/cookie-banner.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useCookieConsent } from './cookie-context';
import { CookiePreferencesDialog } from './cookie-preferences';
import Link from 'next/link';

export const CookieBanner: React.FC = () => {
  const { showBanner, acceptAllCookies, rejectOptionalCookies, consentState } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showBanner) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Card className="mx-auto max-w-6xl bg-white shadow-2xl border-t-4 border-t-[#3671E2]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3671E2] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#172134]">
                    We value your privacy
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn 
                  more about our{' '}
                  <Link
                    href="/privacy-policy"
                    className="text-[#3671E2] hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link
                    href="/cookie-policy"
                    className="text-[#3671E2] hover:underline font-medium"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:min-w-fit">
                <Button
                  variant="outline"
                  onClick={rejectOptionalCookies}
                  className="border-gray-300 text-[#172134] hover:bg-gray-50 whitespace-nowrap"
                >
                  Reject Optional
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(true)}
                  className="border-[#3671E2] text-[#3671E2] hover:bg-[#3671E2] hover:text-white whitespace-nowrap"
                >
                  Customize
                </Button>
                
                <Button
                  onClick={acceptAllCookies}
                  className="bg-[#3671E2] hover:bg-[#2960d1] text-white whitespace-nowrap"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preferences Dialog */}
      <CookiePreferencesDialog
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        initialPreferences={consentState?.preferences}
      />
    </>
  );
};

// Optional: Floating cookie settings button (for after consent)
export const CookieSettingsButton: React.FC = () => {
  const { consentState } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  // Only show if user has already consented
  if (!consentState?.hasConsented) {
    return null;
  }

  return (
    <>
      <Button
      variant={"outline"}
      size={"xl"}
        onClick={() => setShowPreferences(true)}
       className='rounded-full text-black bg-[#EBF1FC]'
      >
        Manage Preferences
      </Button>

      <CookiePreferencesDialog
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        initialPreferences={consentState?.preferences}
      />
    </>
  );
};