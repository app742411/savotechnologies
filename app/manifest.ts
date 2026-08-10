import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SavoTech Enterprise Solutions',
    short_name: 'SavoTech',
    description: 'Corporate software agency and cloud migration architects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
