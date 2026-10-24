'use client';
import { useEffect } from 'react';
import initEffects from '../lib/effects';

// Liga os efeitos de rolagem, contadores, carrossel, laboratório de fundos e cópia de cores.
export default function Effects() {
  useEffect(() => initEffects(), []);
  return null;
}
