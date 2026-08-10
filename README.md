# SavoTech Solutions - Enterprise Next.js 15 App Router Corporate Website

A production-ready Enterprise Corporate Website built using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Scalable Feature-Based Architecture**: Separation of concerns across `app`, `components`, `sections`, `lib`, `types`, and `data` folders.
- **Next.js 15 App Router & React 19 Support**: Server Components utilized by default, Client Components enabled only where interactive states are required.
- **Dynamic SEO Metadata**: Tailored tags, keywords, canonical URLs, Twitter cards, and Open Graph generated dynamically.
- **JSON-LD Schema Markup**: Breadcrumbs, Organization, Services, Products, FAQ, and BlogPosting schemas dynamically injected into the head.
- **Zod & React Hook Form Validation**: Forms (Contact, Careers, and Newsletter) validated on the client side with loading/success/error statuses.
- **Responsive Premium Styling**: Minimalist dark-themed enterprise layouts using Tailwind CSS and Framer Motion micro-animations.
- **WCAG 2.2 AA Compliance**: Skip links, semantic markup, focus rings, and proper color contrasts included.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Management**: React Hook Form
- **Validation**: Zod Resolver
- **HTTP Client**: Axios
- **Queries**: TanStack React Query
- **Icons**: Lucide React

## Folder Structure

```
app/                    # Pages, layouts, sitemap, manifest, robots configuration
components/             # Reusable UI controls (Button, Container, FormInput, Modal, Tabs)
sections/               # Page section components (Hero, Statistics, Timeline, CTA)
data/                   # Mock static data lists for services, products, blogs, careers
lib/                    # Helpers for SEO, formatting, and class mergers
types/                  # Shared TypeScript interfaces
public/                 # Global image assets and favicon files
```

## Setup & Running Locally

1. Install all dependencies:
   ```bash
   npm install
   ```

2. Run the development server locally:
   ```bash
   npm run dev
   ```

3. Build the production package:
   ```bash
   npm run build
   ```
