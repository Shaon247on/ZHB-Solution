'use client';

import React from 'react';
import { Button } from '../ui/button';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../ui/button';
import { toast } from 'sonner';
import { useCookieConsent } from '../cookie-consent/cookie-context';

interface AcceptCookiesButtonProps extends 
  Omit<React.ComponentProps<'button'>, 'onClick'>,
  VariantProps<typeof buttonVariants> {
  onAccept?: () => void;
  asChild?: boolean;
}

export const AcceptCookiesButton: React.FC<AcceptCookiesButtonProps> = ({ 
  children = 'Accept Cookies',
  onAccept,
  variant,
  size,
  asChild,
  className,
  ...props 
}) => {
  const { acceptAllCookies } = useCookieConsent();

  const handleAccept = () => {
    acceptAllCookies();
    onAccept?.();
    toast.success("Cookies Accepted")
  };

  return (
    <Button 
      onClick={handleAccept} 
      variant={variant}
      size={size}
      asChild={asChild}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};