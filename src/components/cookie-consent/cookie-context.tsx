// src/components/cookie-consent/cookie-context.tsx

'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CookieConsentState, CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '../../types/cookie-types';
import { CookieUtils } from '../../lib/cookie-utils';

interface CookieConsentContextType {
  consentState: CookieConsentState | null;
  isLoading: boolean;
  showBanner: boolean;
  acceptAllCookies: () => void;
  rejectOptionalCookies: () => void;
  setCustomPreferences: (preferences: CookiePreferences) => void;
  resetConsent: () => void;
  hideBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [consentState, setConsentState] = useState<CookieConsentState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Load existing consent on mount
    const loadConsent = () => {
      try {
        const existingConsent = CookieUtils.getCookieConsent();
        
        if (existingConsent && CookieUtils.hasValidConsent()) {
          setConsentState(existingConsent);
          setShowBanner(false);
        } else {
          // No valid consent found, show banner
          setShowBanner(true);
        }
      } catch (error) {
        console.error('Error loading cookie consent:', error);
        setShowBanner(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsent();
  }, []);

  const acceptAllCookies = () => {
    const newState = CookieUtils.acceptAllCookies();
    setConsentState(newState);
    setShowBanner(false);
    
    // Trigger any analytics/marketing script loads
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
        detail: newState.preferences 
      }));
    }
  };

  const rejectOptionalCookies = () => {
    const newState = CookieUtils.rejectOptionalCookies();
    setConsentState(newState);
    setShowBanner(false);
    
    // Clean up any existing optional cookies
    CookieUtils.cleanupCookies(newState.preferences);
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
        detail: newState.preferences 
      }));
    }
  };

  const setCustomPreferences = (preferences: CookiePreferences) => {
    const newState = CookieUtils.setCustomPreferences(preferences);
    setConsentState(newState);
    setShowBanner(false);
    
    // Clean up any cookies that are no longer consented to
    CookieUtils.cleanupCookies(newState.preferences);
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
        detail: newState.preferences 
      }));
    }
  };

  const resetConsent = () => {
    CookieUtils.clearCookieConsent();
    setConsentState(null);
    setShowBanner(true);
    
    // Clean up all optional cookies
    CookieUtils.cleanupCookies(DEFAULT_COOKIE_PREFERENCES);
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  const contextValue: CookieConsentContextType = {
    consentState,
    isLoading,
    showBanner,
    acceptAllCookies,
    rejectOptionalCookies,
    setCustomPreferences,
    resetConsent,
    hideBanner,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};