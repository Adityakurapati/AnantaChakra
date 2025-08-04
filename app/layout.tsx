import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'


export const metadata: Metadata = {
  title: 'AnantaChakra | Startup Growth & Digital Marketing Experts',
  description: 'Specialized digital marketing and cloud solutions for startups. Get affordable SEO, LinkedIn marketing, and tech support from our remote team of 5 experts. 24/7 support available.',
  keywords: [
    'startup digital marketing',
    'affordable SEO services',
    'remote marketing consultants',
    'LinkedIn marketing packages',
    'cloud engineering for startups'
  ],
  alternates: {
    canonical: 'https://anantachakra.tech'
  },
  openGraph: {
    title: 'AnantaChakra | Startup Growth Experts',
    description: 'Digital marketing & tech solutions for early-stage companies',
    url: 'https://anantachakra.tech',
    siteName: 'AnantaChakra',
    images: [
      {
        url: 'https://anantachakra.tech/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnantaChakra | Startup Growth Experts',
    description: 'Digital marketing & tech solutions for early-stage companies',
    images: ['https://anantachakra.tech/twitter-image.jpg'],
  },
}

// Schema Markup for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://anantachakra.tech/#organization",
      "name": "AnantaChakra",
      "url": "https://anantachakra.tech",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://anantachakra.tech/#logo",
        "url": "https://anantachakra.tech/logo.png",
        "width": 500,
        "height": 500,
        "caption": "AnantaChakra Logo"
      },
      "description": "Digital marketing and tech solutions for startups and small businesses",
      "sameAs": [
        "https://www.linkedin.com/company/anantachakra",
        "https://twitter.com/anantachakra",
        "https://www.facebook.com/anantachakra"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your ZIP",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "email": "support@anantachakra.tech",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://anantachakra.tech/#website",
      "url": "https://anantachakra.tech",
      "name": "AnantaChakra",
      "description": "Digital marketing and tech solutions for startups",
      "publisher": {
        "@id": "https://anantachakra.tech/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://anantachakra.tech/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "AnantaChakra Digital Marketing Services",
      "description": "Specialized digital marketing and tech solutions for startups",
      "serviceType": [
        "Digital Marketing",
        "SEO Services",
        "Social Media Marketing",
        "Cloud Engineering",
        "Technical Support"
      ],
      "provider": {
        "@type": "Organization",
        "@id": "https://anantachakra.tech/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Digital Marketing",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Optimization",
                  "description": "Affordable SEO services for startups and small businesses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Management",
                  "description": "Professional social media marketing services"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Tech Solutions",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Engineering",
                  "description": "Cloud infrastructure setup and management"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical Support",
                  "description": "24/7 remote technical support services"
                }
              }
            ]
          }
        ]
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}