import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "AnantaChakra | Startup Growth & Digital Marketing Experts",
  description:
    "Specialized digital marketing and cloud solutions for startups. Get affordable SEO, LinkedIn marketing, and tech support from our remote team of 5 experts. 24/7 support available.",
  keywords: [
    "startup digital marketing",
    "affordable SEO services India",
    "remote marketing consultants",
    "LinkedIn marketing packages",
    "cloud engineering for startups",
    "business SEO support",
    "digital marketing agency",
    "SEO company India",
    "tech support for startups",
    "social media marketing services",
  ],
  alternates: {
    canonical: "https://anantachakra.tech",
  },
  openGraph: {
    title: "AnantaChakra | Startup Growth Experts",
    description: "Digital marketing & tech solutions for early-stage companies",
    url: "https://anantachakra.tech",
    siteName: "AnantaChakra",
    images: [
      {
        url: "https://anantachakra.tech/favicon.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnantaChakra | Startup Growth Experts",
    description: "Digital marketing & tech solutions for early-stage companies",
    images: ["https://anantachakra.tech/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

// Schema Markup for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://anantachakra.tech/#organization",
      name: "AnantaChakra - Digital Marketing & Tech Solutions",
      url: "https://anantachakra.tech",
      logo: {
        "@type": "ImageObject",
        "@id": "https://anantachakra.tech/#logo",
        url: "https://anantachakra.tech/favicon.png",
        width: 500,
        height: 500,
        caption: "AnantaChakra - Startup Growth Experts",
      },
      description:
        "Leading digital marketing agency in India offering affordable SEO services, LinkedIn marketing packages, and cloud engineering solutions for startups and small businesses.",
      sameAs: [
        "https://www.linkedin.com/company/anantachakra",
        "https://x.com/AnantaChakra",
        "https://www.facebook.com/share/19mNVrP1Av",
        "https://www.instagram.com/anantachakra.tech/",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Solapur",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411033",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7507546319",
          contactType: "customer service",
          email: "support@anantachakra.tech",
          areaServed: ["IN", "US", "UK", "AU"],
          availableLanguage: ["English", "Hindi", "Marathi"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7507546319",
          contactType: "sales",
          email: "sales@anantachakra.tech",
        },
      ],
      founder: {
        "@type": "Person",
        name: "Ananta Chakra",
      },
      foundingDate: "2025-01-01",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "5",
      },
      priceRange: "$$",
      knowsAbout: ["Digital Marketing", "SEO", "Social Media Marketing", "Cloud Computing", "Startup Growth"],
    },
    {
      "@type": "WebSite",
      "@id": "https://anantachakra.tech/#website",
      url: "https://anantachakra.tech",
      name: "AnantaChakra - Digital Marketing Agency",
      description:
        "Get expert digital marketing services, SEO optimization, and tech solutions for startups in India. Affordable packages with 24/7 support.",
      publisher: {
        "@id": "https://anantachakra.tech/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: "https://anantachakra.tech/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://anantachakra.tech/#service",
      name: "AnantaChakra Digital Marketing Services",
      description:
        "Specialized digital marketing and tech solutions for startups including SEO services, social media marketing, cloud engineering, and 24/7 technical support in India.",
      serviceType: [
        "Digital Marketing Agency",
        "SEO Services India",
        "Startup Marketing Consultants",
        "Cloud Engineering Solutions",
        "Business Tech Support",
      ],
      provider: {
        "@type": "Organization",
        "@id": "https://anantachakra.tech/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Digital Marketing Solutions",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Optimization Services",
                  description:
                    "Affordable SEO packages for startups with guaranteed results. On-page, technical, and local SEO services in India.",
                  brand: {
                    "@type": "Brand",
                    name: "AnantaChakra",
                  },
                  serviceOutput: "Improved search rankings",
                  serviceAudience: {
                    "@type": "Audience",
                    audienceType: "startups, small businesses",
                  },
                },
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "10000",
                  priceCurrency: "INR",
                  valueAddedTaxIncluded: "true",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "LinkedIn Marketing Packages",
                  description:
                    "Professional LinkedIn marketing services to generate B2B leads and establish thought leadership.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Tech Solutions",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Engineering for Startups",
                  description:
                    "AWS and GCP cloud setup, migration, and optimization services for early-stage companies.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "24/7 Technical Support",
                  description: "Dedicated remote tech support team available round-the-clock for startups.",
                },
              },
            ],
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "27",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://anantachakra.tech/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://anantachakra.tech",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://anantachakra.tech/services",
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
