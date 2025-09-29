// src/hooks/use-cookie-consent.ts

import { useCallback, useEffect, useState } from 'react';
import { CookieUtils } from '../lib/cookie-utils';
import { CookiePreferences, CookieConsentState } from '../types/cookie-types';

export const useCookieConsent = () => {
  const [consentState, setConsentState] = useState<CookieConsentState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load consent state on mount
  useEffect(() => {
    const loadConsentState = () => {
      try {
        const consent = CookieUtils.getCookieConsent();
        setConsentState(consent);
      } catch (error) {
        console.error('Failed to load cookie consent:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsentState();
  }, []);

  // Check if user has given valid consent
  const hasValidConsent = useCallback((): boolean => {
    return CookieUtils.hasValidConsent();
  }, []);

  // Check if consent banner should be shown
  const shouldShowBanner = useCallback((): boolean => {
    return !isLoading && !hasValidConsent();
  }, [isLoading, hasValidConsent]);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const newState = CookieUtils.acceptAllCookies();
    setConsentState(newState);
    return newState;
  }, []);

  // Reject optional cookies
  const rejectOptional = useCallback(() => {
    const newState = CookieUtils.rejectOptionalCookies();
    setConsentState(newState);
    return newState;
  }, []);

  // Set custom preferences
  const setCustomPreferences = useCallback((preferences: CookiePreferences) => {
    const newState = CookieUtils.setCustomPreferences(preferences);
    setConsentState(newState);
    return newState;
  }, []);

  // Reset consent (for testing or user request)
  const resetConsent = useCallback(() => {
    CookieUtils.clearCookieConsent();
    setConsentState(null);
  }, []);

  // Utility functions for checking specific cookie permissions
  const canUseAnalytics = useCallback((): boolean => {
    return CookieUtils.shouldLoadAnalytics();
  }, []);

  const canUseMarketing = useCallback((): boolean => {
    return CookieUtils.shouldLoadMarketing();
  }, []);

  const canUsePreferences = useCallback((): boolean => {
    return CookieUtils.shouldLoadPreferences();
  }, []);

  // Get current preferences
  const getCurrentPreferences = useCallback((): CookiePreferences | null => {
    return consentState?.preferences || null;
  }, [consentState]);

  return {
    // State
    consentState,
    isLoading,
    
    // Checkers
    hasValidConsent: hasValidConsent(),
    shouldShowBanner: shouldShowBanner(),
    canUseAnalytics: canUseAnalytics(),
    canUseMarketing: canUseMarketing(),
    canUsePreferences: canUsePreferences(),
    
    // Actions
    acceptAll,
    rejectOptional,
    setCustomPreferences,
    resetConsent,
    getCurrentPreferences,
  };
};