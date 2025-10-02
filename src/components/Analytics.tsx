'use client';

import Script from 'next/script';

interface AnalyticsProps {
  gaId?: string;
}

export default function Analytics({ gaId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Enhanced E-commerce and Event Tracking */}
      <Script id="enhanced-analytics" strategy="afterInteractive">
        {`
          // Track contact form clicks
          function trackContactClick(method) {
            gtag('event', 'contact_click', {
              event_category: 'Contact',
              event_label: method,
              value: 1
            });
          }

          // Track portfolio project views
          function trackPortfolioView(projectName) {
            gtag('event', 'portfolio_view', {
              event_category: 'Portfolio',
              event_label: projectName,
              value: 1
            });
          }

          // Track service interest
          function trackServiceInterest(serviceName) {
            gtag('event', 'service_interest', {
              event_category: 'Services',
              event_label: serviceName,
              value: 1
            });
          }

          // Track scroll depth
          let scrollDepth = 0;
          window.addEventListener('scroll', function() {
            const currentScroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
              scrollDepth = currentScroll;
              gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: scrollDepth + '%',
                value: scrollDepth
              });
            }
          });

          // Track time on page
          const startTime = Date.now();
          window.addEventListener('beforeunload', function() {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            gtag('event', 'time_on_page', {
              event_category: 'Engagement',
              event_label: 'seconds',
              value: timeOnPage
            });
          });

          // Make tracking functions globally available
          window.trackContactClick = trackContactClick;
          window.trackPortfolioView = trackPortfolioView;
          window.trackServiceInterest = trackServiceInterest;
        `}
      </Script>

      {/* Facebook Pixel (Optional) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* LinkedIn Insight Tag (Optional) */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script src="https://snap.licdn.com/li.js" strategy="afterInteractive" />

      {/* Hotjar Heatmaps (Optional) */}
      {process.env.NEXT_PUBLIC_HOTJAR_ID && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      )}
    </>
  );
}

// Hook for tracking events
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackContactClick = (method: string) => {
    if (typeof window !== 'undefined' && window.trackContactClick) {
      window.trackContactClick(method);
    }
  };

  const trackPortfolioView = (projectName: string) => {
    if (typeof window !== 'undefined' && window.trackPortfolioView) {
      window.trackPortfolioView(projectName);
    }
  };

  const trackServiceInterest = (serviceName: string) => {
    if (typeof window !== 'undefined' && window.trackServiceInterest) {
      window.trackServiceInterest(serviceName);
    }
  };

  return {
    trackEvent,
    trackContactClick,
    trackPortfolioView,
    trackServiceInterest,
  };
};

// Type definitions for global tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    trackContactClick: (method: string) => void;
    trackPortfolioView: (projectName: string) => void;
    trackServiceInterest: (serviceName: string) => void;
  }
}