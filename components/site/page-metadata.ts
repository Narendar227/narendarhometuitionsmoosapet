import type { Metadata } from 'next'
import { BUSINESS_NAME } from '@/components/site/site-data'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

const socialImage = {
  url: '/images/moosapet-home-tutor-maths.png',
  alt: 'One-to-one home tutoring for students in Moosapet, Hyderabad',
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${BUSINESS_NAME}`

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: path,
      siteName: BUSINESS_NAME,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  }
}
