import { Metadata } from 'next';

const BASE_URL = 'https://savotech.com'; // Change this to your production domain

interface MetadataProps {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
}

export function getMetadata({
  title,
  description,
  slug = '',
  image = '/images/og-default.jpg',
  type = 'website',
  keywords = ['enterprise tech', 'software agency', 'cloud migration', 'cybersecurity', 'AI solution architecture'],
  noIndex = false,
}: MetadataProps): Metadata {
  const url = `${BASE_URL}${slug ? `/${slug.replace(/^\//, '')}` : ''}`;
  const fullTitle = `${title} | SavoTech Enterprise Solutions`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'SavoTech Solutions',
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
      creator: '@SavoTech',
    },
  };
}

// JSON-LD Structured Data Schema Generators
export const jsonLd = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'SavoTech Solutions',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logos/savotech-logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/savotech',
      'https://twitter.com/savotech',
      'https://github.com/savotech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-0199',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: 'en'
    }
  }),

  breadcrumb: (items: { name: string; item: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: i.name,
      item: i.item.startsWith('http') ? i.item : `${BASE_URL}${i.item.startsWith('/') ? i.item : `/${i.item}`}`
    }))
  }),

  service: (service: { title: string; description: string; slug: string; providerName?: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: service.providerName || 'SavoTech Solutions',
      url: BASE_URL
    },
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`
  }),

  product: (product: { title: string; shortDescription: string; slug: string; image?: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.image ? (product.image.startsWith('http') ? product.image : `${BASE_URL}${product.image}`) : `${BASE_URL}/images/og-default.jpg`,
    description: product.shortDescription,
    sku: `SAVO-${product.slug.toUpperCase()}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '500000',
      offerCount: '1'
    }
  }),

  article: (blog: { title: string; excerpt: string; slug: string; image: string; publishedAt: string; authorName: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.image.startsWith('http') ? blog.image : `${BASE_URL}${blog.image}`,
    datePublished: blog.publishedAt,
    author: {
      '@type': 'Person',
      name: blog.authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'SavoTech Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logos/savotech-logo.png`
      }
    },
    description: blog.excerpt,
    url: `${BASE_URL}/blogs/${blog.slug}`
  }),

  faq: (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
};
export default getMetadata;
