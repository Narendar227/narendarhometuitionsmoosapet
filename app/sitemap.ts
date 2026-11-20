import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/components/site/site-data'

const ROUTES = [
  '',
  '/about',
  '/services',
  '/services-zones',
  '/subjects',
  '/why-choose-us',
  '/testimonials',
  '/faq',
  '/contact',
  '/join-parent',
  '/join-tutor',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
