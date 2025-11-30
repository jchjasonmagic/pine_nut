import React from 'react';

export interface PricingTier {
  weightKg: number;
  packs: number;
  packSize: string;
  unitPrice: number;
  shipping: string;
  totalPrice: number;
  isBestValue?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}