import Script from 'next/script';

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kptechnologysolutions.com/#organization",
    "name": "KP Technology Solutions",
    "alternateName": "KP Technology",
    "description": "Professional web development services specializing in custom websites, mobile apps, and e-commerce solutions. Serving Cleveland, Ohio, Charleston, South Carolina, and clients nationwide.",
    "url": "https://kptechnologysolutions.com",
    "telephone": "+1-216-XXX-XXXX", // Replace with actual phone
    "email": "kptechnologysolutions@gmail.com",
    "foundingDate": "2009",
    "founder": {
      "@type": "Person",
      "name": "KP Technology Solutions Team"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Cleveland",
        "addressRegion": "OH",
        "addressCountry": "US",
        "streetAddress": "Cleveland, Ohio" // Add specific address if desired
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Charleston",
        "addressRegion": "SC",
        "addressCountry": "US",
        "streetAddress": "Charleston, South Carolina" // Add specific address if desired
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Ohio",
        "containsPlace": [
          { "@type": "City", "name": "Cleveland" },
          { "@type": "City", "name": "Akron" },
          { "@type": "City", "name": "Columbus" },
          { "@type": "City", "name": "Cincinnati" }
        ]
      },
      {
        "@type": "State", 
        "name": "South Carolina",
        "containsPlace": [
          { "@type": "City", "name": "Charleston" },
          { "@type": "City", "name": "Columbia" },
          { "@type": "City", "name": "Greenville" },
          { "@type": "City", "name": "Myrtle Beach" }
        ]
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.8283",
        "longitude": "-98.5795" // Geographic center of US for nationwide service
      },
      "geoRadius": "5000000" // 5000km radius to cover all US
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
            "description": "Professional business websites built with Angular and Next.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Online stores and shopping cart solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Redesign",
            "description": "Modernizing existing websites for better performance"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
    "currenciesAccepted": "USD",
    "openingHours": ["Mo-Fr 09:00-17:00"],
    "sameAs": [
      "https://www.facebook.com/kptechnologysolutions",
      "https://linkedin.com/company/kp-technology-solutions"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://kptechnologysolutions.com/favicon.svg",
      "width": "32",
      "height": "32"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://kptechnologysolutions.com/images/social/og-image-main.png",
      "width": "1200",
      "height": "630"
    }
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://kptechnologysolutions.com/#webpage",
    "url": "https://kptechnologysolutions.com",
    "name": "Web Development Company Cleveland & Charleston | KP Technology Solutions",
    "description": "Professional web development services in Cleveland, Ohio and Charleston, South Carolina. Custom websites, mobile apps, Angular & Next.js development serving clients nationwide.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://kptechnologysolutions.com/#website"
    },
    "about": {
      "@id": "https://kptechnologysolutions.com/#organization"
    },
    "mainEntity": {
      "@id": "https://kptechnologysolutions.com/#organization"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kptechnologysolutions.com"
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kptechnologysolutions.com/#website",
    "url": "https://kptechnologysolutions.com",
    "name": "KP Technology Solutions",
    "description": "Professional web development services in Cleveland, Ohio and Charleston, South Carolina",
    "publisher": {
      "@id": "https://kptechnologysolutions.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://kptechnologysolutions.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://kptechnologysolutions.com/#service",
    "name": "KP Technology Solutions",
    "description": "Professional web development and mobile app development services",
    "provider": {
      "@id": "https://kptechnologysolutions.com/#organization"
    },
    "areaServed": [
      "Cleveland, OH",
      "Charleston, SC", 
      "United States"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "category": "Web Development"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "2500-25000"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}