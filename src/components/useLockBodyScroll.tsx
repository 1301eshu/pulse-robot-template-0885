// hooks/useLockBodyScroll.ts
import { useLayoutEffect, useRef } from 'react';

export function useLockBodyScroll(locked: boolean) {
  const scrollYRef = useRef(0);

  useLayoutEffect(() => {
    if (!locked) return;

    // save position
    scrollYRef.current = window.scrollY;

    // optional: prevent layout shift when hiding scrollbar
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    // freeze body
    const b = document.body;
    b.style.position = 'fixed';
    b.style.top = `-${scrollYRef.current}px`;
    b.style.left = '0';
    b.style.right = '0';
    b.style.width = '100%';
    b.style.overflow = 'hidden';

    return () => {
      const y = scrollYRef.current;
      const b2 = document.body;
      b2.style.position = '';
      b2.style.top = '';
      b2.style.left = '';
      b2.style.right = '';
      b2.style.width = '';
      b2.style.overflow = '';
      b2.style.paddingRight = '';
      window.scrollTo(0, y);
    };
  }, [locked]);
}
