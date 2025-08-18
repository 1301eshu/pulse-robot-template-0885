'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import Lottie from 'lottie-react';
import inc5000Animation from '@/assets/Inc-5000-popup.json';

interface AutoPopupProps {
  delay?: number;    // time before popup shows (ms)
  duration?: number; // auto-close after (ms)
}

export default function AutoPopup({
  delay = 2500,
  duration = 5000,
}: AutoPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, delay);
    return () => clearTimeout(showTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const hideTimer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }, duration);
    return () => clearTimeout(hideTimer);
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  // Close popup if clicked outside the animation container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300',
          isAnimating ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Popup container */}
      <div
        ref={popupRef}
        className={cn(
          'relative transition-all duration-300',
          isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        )}
        style={{ width: 800, height: 800 }}
      >
        {/* Glow effect */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.00) 70%)',
            transform: 'scale(1.15)',
          }}
        />

        {/* Lottie animation */}
        <Lottie animationData={inc5000Animation} loop autoplay className="w-full h-full" />
      </div>
    </div>
  );
}
