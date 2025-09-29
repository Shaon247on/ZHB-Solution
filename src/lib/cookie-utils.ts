// src/lib/cookie-utils.ts

import Cookies from 'js-cookie';
import { CookieConsentState, CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '../types/cookie-types';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_EXPIRY_DAYS = 365;

export class CookieUtils {
  static getCookieConsent(): CookieConsentState | null {
    try {
      const stored = Cookies.get(COOKIE_CONSENT_KEY);
      if (!stored) return null;
      
      const parsed = JSON.parse(stored) as CookieConsentState;
      return parsed;
    } catch (error) {
      console.error('Error parsing cookie consent:', error);
      return null;
    }
  }

  static setCookieConsent(state: CookieConsentState): void {
    try {
      const stateWithTimestamp = {
        ...state,
        consentTimestamp: Date.now(),
      };
      
      Cookies.set(COOKIE_CONSENT_KEY, JSON.stringify(stateWithTimestamp), {
        expires: COOKIE_EXPIRY_DAYS,
        secure: true,
        sameSite: 'strict',
      });
    } catch (error) {
      console.error('Error setting cookie consent:', error);
    }
  }

  static clearCookieConsent(): void {
    Cookies.remove(COOKIE_CONSENT_KEY);
  }

  static hasValidConsent(): boolean {
    const consent = this.getCookieConsent();
    if (!consent) return false;

    // Check if consent is less than 1 year old
    const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
    return consent.consentTimestamp ? consent.consentTimestamp > oneYearAgo : false;
  }

  static acceptAllCookies(): CookieConsentState {
    const state: CookieConsentState = {
      hasConsented: true,
      preferences: {
        essential: true,
        analytics: true,
        marketing: true,
        preferences: true,
      },
    };
    
    this.setCookieConsent(state);
    return state;
  }

  static rejectOptionalCookies(): CookieConsentState {
    const state: CookieConsentState = {
      hasConsented: true,
      preferences: DEFAULT_COOKIE_PREFERENCES,
    };
    
    this.setCookieConsent(state);
    return state;
  }

  static setCustomPreferences(preferences: CookiePreferences): CookieConsentState {
    const state: CookieConsentState = {
      hasConsented: true,
      preferences: {
        ...preferences,
        essential: true, // Always true
      },
    };
    
    this.setCookieConsent(state);
    return state;
  }

  static shouldLoadAnalytics(): boolean {
    const consent = this.getCookieConsent();
    return consent?.preferences.analytics || false;
  }

  static shouldLoadMarketing(): boolean {
    const consent = this.getCookieConsent();
    return consent?.preferences.marketing || false;
  }

  static shouldLoadPreferences(): boolean {
    const consent = this.getCookieConsent();
    return consent?.preferences.preferences || false;
  }

  // Utility to clean up cookies based on consent
  static cleanupCookies(preferences: CookiePreferences): void {
    // Remove analytics cookies if not consented
    if (!preferences.analytics) {
      // Remove Google Analytics cookies
      const gaCookies = ['_ga', '_ga_', '_gid', '_gat'];
      gaCookies.forEach(cookie => {
        Cookies.remove(cookie, { domain: window.location.hostname });
        Cookies.remove(cookie, { domain: `.${window.location.hostname}` });
      });
    }

    // Remove marketing cookies if not consented
    if (!preferences.marketing) {
      // Remove Facebook Pixel and other marketing cookies
      const marketingCookies = ['_fbp', '_fbc', 'fr'];
      marketingCookies.forEach(cookie => {
        Cookies.remove(cookie, { domain: window.location.hostname });
        Cookies.remove(cookie, { domain: `.${window.location.hostname}` });
      });
    }

    // Remove preference cookies if not consented
    if (!preferences.preferences) {
      const preferenceCookies = ['theme', 'language', 'font-size'];
      preferenceCookies.forEach(cookie => {
        Cookies.remove(cookie);
      });
    }
  }
}