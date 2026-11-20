import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Faq } from '@/components/site/faq'

export const metadata = createPageMetadata({
  title: 'Home Tuition FAQs in Moosapet',
  description:
    'Answers to common questions about home tutors, subjects, school boards and tuition enquiries in Moosapet.',
  path: '/faq',
  keywords: ['Home tuition FAQ Moosapet', 'Home tutor enquiry Moosapet', 'Narendar Home Tuitions'],
})

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about our home tuition services in Moosapet."
        breadcrumbItems={[{ label: 'FAQ' }]}
      />
      <Faq />
    </PageShell>
  )
}
