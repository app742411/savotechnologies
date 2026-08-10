export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  architecture: string[];
  useCases: string[];
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  pricing?: {
    plan: string;
    price: string;
    period: string;
    features: string[];
  }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
  tags: string[];
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export interface Career {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Remote, etc.
  experience: string;
  shortDescription: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

export interface Partner {
  name: string;
  logo: string;
  website: string;
}
