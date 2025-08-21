'use client';

import React, { useEffect, useRef } from 'react';
import { SITE_CTA } from '@/components/SITE_CTAs';

const SOCIABLEKIT_SCRIPT_ID = 'sociablekit-indeed-script';
const EMBED_ID = '25349240';

const JobListingsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const didInit = useRef(false);
  const styleTagRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    // ---- 1) Ensure the SociableKit script exists ----
    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if (document.getElementById(SOCIABLEKIT_SCRIPT_ID)) return resolve();
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/indeed-jobs/widget.js';
        script.async = true;
        script.defer = true;
        script.id = SOCIABLEKIT_SCRIPT_ID;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    // ---- 2) Our transformer (rebuilds each job card) ----
    const restyleJobs = () => {
      const host = containerRef.current;
      if (!host) return;

      // hide SociableKit credit if present
      host.querySelectorAll('a').forEach((a) => {
        const t = (a.textContent || '').toLowerCase();
        if (t.includes('embed indeed jobs')) a.remove();
      });

      const scope = host.querySelector('.sk-ww-indeed-jobs') || host;

      // select their job cards
      const cards = Array.from(
        scope.querySelectorAll<HTMLElement>('.grid-indeed-jobs .grid-content, .grid-content')
      );

      let built = 0;

      cards.forEach((card) => {
        // skip if we already converted this card
        if (card.classList.contains('gn-job-row')) return;

        const applyBtn = Array.from(
          card.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a,button')
        ).find((el) => /apply now/i.test(el.textContent || ''));

        if (!applyBtn) return; // not a job card

        // title link (not the apply button)
        const links = Array.from(card.querySelectorAll<HTMLAnchorElement>('a'));
        const titleLink =
          links.find((a) => a !== applyBtn && (a.textContent || '').trim().length > 0) || null;

        // location element (text with a comma)
        let locationEl: HTMLElement | null = null;
        const blocks = Array.from(card.querySelectorAll<HTMLElement>('p, span, div'));
        for (const b of blocks) {
          const t = (b.textContent || '').trim();
          if (t && /,/.test(t) && !/apply now/i.test(t) && (!titleLink || b !== titleLink)) {
            locationEl = b;
            break;
          }
        }

        // build flattened row
        const left = document.createElement('div');
        left.className = 'gn-left';

        const aTitle = document.createElement('a');
        aTitle.className = 'gn-title';
        aTitle.textContent = (titleLink?.textContent || '').trim();
        aTitle.href = titleLink?.getAttribute('href') || '#';
        aTitle.target = '_blank';
        aTitle.rel = 'noopener noreferrer';

        const loc = document.createElement('div');
        loc.className = 'gn-location';
        loc.textContent = (locationEl?.textContent || '').trim();

        left.appendChild(aTitle);
        if (loc.textContent) left.appendChild(loc);

        const applyA = document.createElement('a');
        applyA.className = 'gn-apply';
        applyA.textContent = 'Apply now';
        const href =
          (applyBtn as HTMLAnchorElement).href ||
          (applyBtn as HTMLButtonElement).getAttribute('data-href') ||
          '#';
        applyA.href = href || '#';
        applyA.target = '_blank';
        applyA.rel = 'noopener noreferrer';

        // wipe original and insert our row
        card.innerHTML = '';
        card.appendChild(left);
        card.appendChild(applyA);

        // mark as converted & let our CSS take over
        card.classList.add('gn-job-row');

        built++;
      });

      if (built > 0) {
        host.classList.remove('gn-wait');
        host.classList.add('gn-ready');
      }
    };

    // ---- 3) Mount placeholder, add CSS, observe & restyle ----
    const mountWidget = () => {
      const host = containerRef.current;
      if (!host) return;

      // state class to avoid flashing
      host.classList.remove('gn-ready');
      host.classList.add('gn-wait');

      // placeholder div SociableKit needs
      host.innerHTML = '';
      const placeholder = document.createElement('div');
      placeholder.className = 'sk-ww-indeed-jobs';
      placeholder.setAttribute('data-embed-id', EMBED_ID);
      host.appendChild(placeholder);

      // initialize widget
      (window as any).Sociablekit?.Init?.();

      // inject styles once
      if (!styleTagRef.current) {
        const style = document.createElement('style');
        styleTagRef.current = style;
        style.textContent = `
/* state */
#gn-indeed-host.gn-wait { opacity: 0; }
#gn-indeed-host.gn-ready { opacity: 1; transition: opacity .2s ease; }

/* row layout */
#gn-indeed-host .gn-job-row {
  display: grid !important;
  grid-template-columns: 1fr auto !important; /* title/loc on left, CTA right */
  align-items: center !important;
  gap: 16px !important;
  padding: 20px 0 !important;
  border-bottom: 1px solid #e5e7eb !important; /* divider */
  background: transparent !important;
}

/* neutralize SociableKit card chrome */
#gn-indeed-host .grid-content {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
}

/* typography */
#gn-indeed-host .gn-left { min-width: 0 !important; }
#gn-indeed-host .gn-title {
  font-size: 22px;
  line-height: 1.35;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
  text-decoration: none !important;
  display: inline-block;
}
#gn-indeed-host .gn-title:hover { color: #0a66ff; }
#gn-indeed-host .gn-location {
  color: #374151; /* gray-700 */
  font-size: 14px;
}

/* CTA */
#gn-indeed-host .gn-apply {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px 18px !important;
  font-weight: 600 !important;
  border-radius: 10px !important;
  background: #0a66ff !important;
  color: #fff !important;
  text-decoration: none !important;
  white-space: nowrap !important;
}

/* hide big header/logo/avatar blocks & any images from the widget */
#gn-indeed-host [class*="header"],
#gn-indeed-host [class*="logo"],
#gn-indeed-host [class*="avatar"],
#gn-indeed-host .indeed-jobs-user-root-container,
#gn-indeed-host img { display: none !important; }

/* remove extra containers styling */
#gn-indeed-host [class*="grid"],
#gn-indeed-host [class*="list"],
#gn-indeed-host [class*="container"],
#gn-indeed-host [class*="card"] {
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

/* hide SociableKit credit link if rendered */
#gn-indeed-host a[href*="sociablekit"] { display: none !important; }
        `;
        document.head.appendChild(style);
      }

      // observe & retry a few times
      const observer = new MutationObserver(() => restyleJobs());
      observer.observe(host, { childList: true, subtree: true });
      restyleJobs();
      setTimeout(restyleJobs, 400);
      setTimeout(restyleJobs, 900);
      setTimeout(restyleJobs, 1600);

      // fallback: if still nothing after 3s, show whatever is there (no blank state)
      const fallback = window.setTimeout(() => {
        host.classList.remove('gn-wait');
        host.classList.add('gn-ready');
      }, 3000);

      // cleanup
      return () => {
        observer.disconnect();
        window.clearTimeout(fallback);
      };
    };

    ensureScript().then(mountWidget);

    return () => {
      const host = containerRef.current;
      if (host) host.innerHTML = '';
      if (styleTagRef.current) {
        styleTagRef.current.remove();
        styleTagRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built Different? So Are We!
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            You're not here to fit into a checkbox, we're not here to hand out templated
            roles. If you vibe with what we're building but don't see your title listed,
            write to us at recruitment@growthnatives.com
          </p>
        </div>

        {/* Host for SociableKit (scoped by id for our CSS) */}
        <div id="gn-indeed-host" className="mb-12" ref={containerRef} />

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see a role that fits? We're always open to exceptional talent.
            Send Us Your Resume at .
          </p>
          <SITE_CTA
            variant="secondary"
            text="recruitment@growthnatives.com"
            href="mailto:recruitment@growthnatives.com"
            size="md"
          />
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;
