'use client';

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { SITE_CTA } from '@/components/SITE_CTAs';

const SOCIABLEKIT_SCRIPT_ID = 'sociablekit-indeed-script';
const EMBED_ID = '25349240';
const HOST_ID = 'gn-indeed-host';

function absUrl(href?: string | null): string | null {
  if (!href) return null;
  try {
    return new URL(href, window.location.href).href;
  } catch {
    return null;
  }
}

const JobListingsSection: React.FC = () => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const didInit = useRef(false);
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const cleanups = useRef<Array<() => void>>([]);
  const mountedRoots = useRef<Set<ReactDOM.Root>>(new Set());

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const addCleanup = (fn: () => void) => cleanups.current.push(fn);

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        const existing = document.getElementById(
          SOCIABLEKIT_SCRIPT_ID
        ) as HTMLScriptElement | null;
        if (existing) {
          if (typeof (window as any).Sociablekit?.Init === 'function') resolve();
          else existing.addEventListener('load', () => resolve(), { once: true });
          return;
        }
        const s = document.createElement('script');
        s.id = SOCIABLEKIT_SCRIPT_ID;
        s.src = 'https://widgets.sociablekit.com/indeed-jobs/widget.js';
        s.async = true;
        s.defer = true;
        s.addEventListener('load', () => resolve(), { once: true });
        document.body.appendChild(s);
      });

    // -- Styles (with spacing fix) --
    const ensureStyles = () => {
      if (styleTagRef.current) return;
      const style = document.createElement('style');
      styleTagRef.current = style;
      style.textContent = `
/* host state */
#${HOST_ID}.gn-wait { opacity: 0; }
#${HOST_ID}.gn-ready { opacity: 1; transition: opacity .2s ease; }

/* wipe widget chrome */
#${HOST_ID},
#${HOST_ID} * {
  background-color: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  border-radius: 20px !important;
}

/* single-column layout */
#${HOST_ID} .sk-ww-indeed-jobs,
#${HOST_ID} .grid-indeed-jobs {
  display: block !important;
  grid-template-columns: none !important;
  gap: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}
#${HOST_ID} .grid-indeed-jobs > * { display: block !important; width: 100% !important; }

/* hide headers/images/credits */
#${HOST_ID} [class*="header"],
#${HOST_ID} [class*="logo"],
#${HOST_ID} [class*="avatar"],
#${HOST_ID} .indeed-jobs-user-root-container,
#${HOST_ID} img,
#${HOST_ID} a[href*="sociablekit"] { display: none !important; }

/* neutralize original card */
#${HOST_ID} .grid-content {
  display: block !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
}

/* our row */
#${HOST_ID} .gn-job-row {
  display: grid !important;
  grid-template-columns: 1fr auto !important;
  align-items: center !important;
  gap: 16px !important;
  padding: 16px 0 !important;
  border-bottom: 1px solid #e5e7eb !important;
}
#${HOST_ID} .gn-job-row:last-child { border-bottom: 0 !important; }

/* --- TEXT FIX --- */
#${HOST_ID} .gn-left {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 4px !important;       /* spacing between title & location */
  min-width: 0 !important;
}
#${HOST_ID} .gn-title {
  font-size: 22px; 
  line-height: 1.35; 
  font-weight: 700;
  color: #0f172a; 
  margin: 0 !important;
  text-decoration: none !important; 
  display: block !important;
}
#${HOST_ID} .gn-title:hover { color: #0a66ff; }
#${HOST_ID} .gn-location {
  color: #374151; 
  font-size: 14px; 
  display: block !important;
  margin: 0 !important;
  white-space: normal !important;
}

/* CTA */
#${HOST_ID} .gn-cta { display: inline-block !important; }
#${HOST_ID} .gn-cta a,
#${HOST_ID} .gn-cta button {
  color: #ffffff !important;
  fill: #ffffff !important;
}
#${HOST_ID} .gn-cta a:hover,
#${HOST_ID} .gn-cta button:hover {
  color: #ffffff !important;
}
`;
      document.head.appendChild(style);
      addCleanup(() => {
        style.remove();
        styleTagRef.current = null;
      });
    };

    // -- Transform widget cards --
    const restyleJobs = () => {
      const host = hostRef.current;
      if (!host) return;

      const scope = host.querySelector('.sk-ww-indeed-jobs') || host;
      const cards = Array.from(
        scope.querySelectorAll<HTMLElement>(
          '.grid-indeed-jobs .grid-content, .grid-content'
        )
      );

      let built = 0;

      for (const card of cards) {
        if (card.classList.contains('gn-job-row')) continue;

        const allBtns = Array.from(
          card.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a,button')
        );
        const applyBtn = allBtns.find((el) =>
          /apply now/i.test(el.textContent || '')
        );

        const anchors = Array.from(card.querySelectorAll<HTMLAnchorElement>('a'));
        const titleLink =
          anchors.find(
            (a) => a !== applyBtn && (a.textContent || '').trim().length > 0
          ) ||
          anchors.sort(
            (a, b) => (b.href?.length || 0) - (a.href?.length || 0)
          )[0] ||
          null;

        // location guesser
        let locationEl: HTMLElement | null = null;
        for (const b of Array.from(card.querySelectorAll<HTMLElement>('p, span, div'))) {
          const t = (b.textContent || '').trim();
          if (
            t &&
            /,/.test(t) &&
            !/apply now/i.test(t) &&
            (!titleLink || b !== titleLink)
          ) {
            locationEl = b;
            break;
          }
        }
        if (!titleLink && !applyBtn) continue;

        // left
        const left = document.createElement('div');
        left.className = 'gn-left';

        const aTitle = document.createElement('a');
        aTitle.className = 'gn-title';
        aTitle.textContent = (titleLink?.textContent || '').trim();
        aTitle.href = absUrl(titleLink?.getAttribute('href')) || '#';
        aTitle.target = '_blank';
        aTitle.rel = 'noopener noreferrer';

        const loc = document.createElement('div');
        loc.className = 'gn-location';
        loc.textContent = '' +(locationEl?.textContent || '').trim();

        left.appendChild(aTitle);
        if (loc.textContent) left.appendChild(loc);

        // right CTA
        const ctaMount = document.createElement('span');
        ctaMount.className = 'gn-cta';

        const targetHref =
          absUrl((applyBtn as HTMLAnchorElement)?.href) ||
          absUrl((applyBtn as HTMLButtonElement)?.getAttribute?.('data-href')) ||
          absUrl(titleLink?.getAttribute('href')) ||
          '#';

        // wipe and insert row
        card.innerHTML = '';
        card.appendChild(left);
        card.appendChild(ctaMount);
        card.classList.add('gn-job-row');

        // Render SITE_CTA
        const root = ReactDOM.createRoot(ctaMount);
        mountedRoots.current.add(root);
        root.render(
          <SITE_CTA
            variant="secondary"
            text="Apply now"
            href={targetHref ?? '#'}
            size="md"
            target="_blank"
          />
        );

        built++;
      }

      if (built > 0) {
        host.classList.remove('gn-wait');
        host.classList.add('gn-ready');
      }
    };

    const mountWidget = () => {
      const host = hostRef.current;
      if (!host) return;

      host.classList.remove('gn-ready');
      host.classList.add('gn-wait');
      host.innerHTML = '';

      const placeholder = document.createElement('div');
      placeholder.className = 'sk-ww-indeed-jobs';
      placeholder.setAttribute('data-embed-id', EMBED_ID);
      host.appendChild(placeholder);

      (window as any).Sociablekit?.Init?.();

      const observer = new MutationObserver(() => restyleJobs());
      observer.observe(host, { childList: true, subtree: true });
      addCleanup(() => observer.disconnect());

      const t1 = window.setTimeout(restyleJobs, 300);
      const t2 = window.setTimeout(restyleJobs, 900);
      const t3 = window.setTimeout(restyleJobs, 1600);
      const t4 = window.setTimeout(() => {
        host.classList.remove('gn-wait');
        host.classList.add('gn-ready');
      }, 3000);
      addCleanup(() => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      });
    };

    ensureStyles();
    ensureScript().then(mountWidget);

    // cleanup
    return () => {
      mountedRoots.current.forEach((r) => r.unmount());
      mountedRoots.current.clear();
      cleanups.current.forEach((fn) => fn());
      cleanups.current = [];
      const host = hostRef.current;
      if (host) host.innerHTML = '';
    };
  }, []);

  return (
    <section className="pt-16 bg-gray-50 mt-20 mb-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built Different? So Are We!
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            You&apos;re not here to fit into a checkbox, we&apos;re not here to
            hand out templated roles. If you vibe with what we&apos;re building
            but don&apos;t see your title listed, write to us at
            <br className="hidden sm:block" /> recruitment@growthnatives.com
          </p>
        </div>

        {/* SociableKit host */}
        <div id={HOST_ID} className="mb-8" ref={hostRef} />
      </div>
    </section>
  );
};

export default JobListingsSection;
