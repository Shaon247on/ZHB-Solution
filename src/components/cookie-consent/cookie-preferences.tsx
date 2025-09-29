// src/components/cookie-consent/cookie-preferences.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { COOKIE_CATEGORIES, CookiePreferences, DEFAULT_COOKIE_PREFERENCES } from '../../types/cookie-types';
import { useCookieConsent } from './cookie-context';

interface CookiePreferencesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialPreferences?: CookiePreferences;
}

export const CookiePreferencesDialog: React.FC<CookiePreferencesDialogProps> = ({
  isOpen,
  onClose,
  initialPreferences,
}) => {
  const { setCustomPreferences } = useCookieConsent();
  const [preferences, setPreferences] = useState<CookiePreferences>(
    initialPreferences || DEFAULT_COOKIE_PREFERENCES
  );

  useEffect(() => {
    if (initialPreferences) {
      setPreferences(initialPreferences);
    }
  }, [initialPreferences]);

  const handleTogglePreference = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSavePreferences = () => {
    setCustomPreferences(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    setCustomPreferences(allAccepted);
    onClose();
  };

  const handleRejectOptional = () => {
    setPreferences(DEFAULT_COOKIE_PREFERENCES);
    setCustomPreferences(DEFAULT_COOKIE_PREFERENCES);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:min-w-3xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold text-[#172134]">
            Cookie Preferences
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            Choose which cookies you want to allow below. You can change these settings at any time.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          {COOKIE_CATEGORIES.map((category) => (
            <Card key={category.id} className="border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg text-[#172134]">
                        {category.title}
                      </CardTitle>
                      {category.required && (
                        <Badge variant="secondary" className="bg-[#3671E2] text-white text-xs">
                          Required
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </div>
                  <Switch
                    checked={preferences[category.id]}
                    onCheckedChange={(value) => handleTogglePreference(category.id, value)}
                    disabled={category.required}
                    className="data-[state=checked]:bg-[#3671E2]"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[#172134]">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button
              variant="outline"
              onClick={handleRejectOptional}
              className="flex-1 border-gray-300 text-[#172134] hover:bg-gray-50"
            >
              Reject Optional
            </Button>
            <Button
              variant="outline"
              onClick={handleSavePreferences}
              className="flex-1 border-[#3671E2] text-[#3671E2] hover:bg-[#3671E2] hover:text-white"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-[#3671E2] hover:bg-[#2960d1] text-white"
            >
              Accept All
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};