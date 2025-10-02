import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = "Web Development Company Cleveland | Custom Websites & Mobile Apps | KP Technology Solutions",
  description = "Professional web development services in Cleveland, Ohio. Custom websites, mobile apps, Angular & Next.js development. 15+ years experience. Free consultation available.",
  canonical = "https://kptechnologysolutions.com",
  ogImage = "https://kptechnologysolutions.com/og-image.jpg"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kptechnologysolutions.com/#organization",
        "name": "KP Technology Solutions",
        "url": "https://kptechnologysolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kptechnologysolutions.com/logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-216-555-0123",
          "contactType": "Customer service",
          "email": "kptechnologysolutions@gmail.com",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cleveland",
          "addressRegion": "OH",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Cleveland"
          },
          {
            "@type": "State",
            "name": "Ohio"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "KP Technology Solutions Team"
        },
        "foundingDate": "2008",
        "description": "Professional web development company specializing in custom websites, mobile apps, and digital solutions for businesses in Cleveland, Ohio and surrounding areas."
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kptechnologysolutions.com/#localbusiness",
        "name": "KP Technology Solutions",
        "description": "Expert web development services in Cleveland, Ohio. We build custom websites, mobile apps, and e-commerce solutions using modern technologies like Angular and Next.js.",
        "url": "https://kptechnologysolutions.com",
        "telephone": "+1-216-555-0123",
        "email": "kptechnologysolutions@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cleveland",
          "addressRegion": "OH",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.4993",
          "longitude": "-81.6944"
        },
        "openingHours": "Mo-Fr 09:00-17:00",
        "priceRange": "$$",
        "servesCuisine": "Web Development Services",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "41.4993",
            "longitude": "-81.6944"
          },
          "geoRadius": "50000"
        }
      },
      {
        "@type": "Service",
        "@id": "https://kptechnologysolutions.com/#services",
        "name": "Web Development Services",
        "provider": {
          "@id": "https://kptechnologysolutions.com/#organization"
        },
        "description": "Comprehensive web development services including custom website development, mobile app creation, e-commerce solutions, and SEO optimization.",
        "serviceType": [
          "Web Development",
          "Mobile App Development",
          "E-commerce Development",
          "SEO Services",
          "Angular Development",
          "Next.js Development"
        ],
        "areaServed": {
          "@type": "State",
          "name": "Ohio"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Development",
                "description": "Professional website development using modern technologies like Angular and Next.js"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "iOS and Android app development for businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development",
                "description": "Online store development with secure payment processing"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kptechnologysolutions.com/#website",
        "url": "https://kptechnologysolutions.com",
        "name": "KP Technology Solutions",
        "description": "Professional web development company in Cleveland, Ohio",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kptechnologysolutions.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="web development Cleveland, custom website development, mobile app development Cleveland, Angular developers Ohio, Next.js development services, Cleveland web design, Ohio web developers, custom software development, e-commerce development Cleveland" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="KP Technology Solutions" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="KP Technology Solutions" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-OH" />
      <meta name="geo.placename" content="Cleveland" />
      <meta name="geo.position" content="41.4993;-81.6944" />
      <meta name="ICBM" content="41.4993, -81.6944" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Additional Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "KP Technology Solutions",
            "image": "https://kptechnologysolutions.com/logo.png",
            "url": "https://kptechnologysolutions.com",
            "telephone": "+1-216-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Cleveland",
              "addressRegion": "OH",
              "postalCode": "",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.4993,
              "longitude": -81.6944
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.4993,
                "longitude": -81.6944
              },
              "geoRadius": "50000"
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50"
            }
          })
        }}
      />
    </Head>
  );
}