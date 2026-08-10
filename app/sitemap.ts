import { MetadataRoute } from 'next';
import { services, industries, solutions, products, caseStudies, blogs, careers } from '../data/mockData';

const BASE_URL = 'https://savotech.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/solutions',
    '/products',
    '/case-studies',
    '/blogs',
    '/careers',
    '/gallery',
    '/faq',
    '/testimonials',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookies'
  ].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const serviceDynamicRoutes = services.map(s => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const industryDynamicRoutes = industries.map(i => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const solutionDynamicRoutes = solutions.map(s => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const productDynamicRoutes = products.map(p => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  const caseStudyDynamicRoutes = caseStudies.map(c => ({
    url: `${BASE_URL}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5
  }));

  const blogDynamicRoutes = blogs.map(b => ({
    url: `${BASE_URL}/blogs/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5
  }));

  const careerDynamicRoutes = careers.map(c => ({
    url: `${BASE_URL}/careers/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5
  }));

  return [
    ...staticRoutes,
    ...serviceDynamicRoutes,
    ...industryDynamicRoutes,
    ...solutionDynamicRoutes,
    ...productDynamicRoutes,
    ...caseStudyDynamicRoutes,
    ...blogDynamicRoutes,
    ...careerDynamicRoutes
  ];
}
