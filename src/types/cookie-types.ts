// src/types/cookie-types.ts

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentTimestamp?: number;
}

export type CookieCategory = keyof CookiePreferences;

export interface CookieCategoryInfo {
  id: CookieCategory;
  title: string;
  description: string;
  required: boolean;
  examples: string[];
}

export const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: 'essential',
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
    required: true,
    examples: ['Session management', 'Security', 'Load balancing']
  },
  {
    id: 'analytics',
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website by collecting and reporting information.',
    required: false,
    examples: ['Google Analytics', 'Page views', 'User behavior tracking']
  },
  {
    id: 'marketing',
    title: 'Marketing Cookies',
    description: 'Used to track visitors across websites to display relevant advertisements.',
    required: false,
    examples: ['Facebook Pixel', 'Google Ads', 'Retargeting campaigns']
  },
  {
    id: 'preferences',
    title: 'Preference Cookies',
    description: 'Remember your preferences and settings to provide a personalized experience.',
    required: false,
    examples: ['Theme selection', 'Language preference', 'Font size']
  }
];

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};