import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Testimonials } from '@/components/site/testimonials'

export const metadata = createPageMetadata({
  title: 'Family Feedback',
  description:
    'Parent and student feedback will be published here when it is available and shared with permission.',
  path: '/testimonials',
  keywords: ['Narendar Home Tuitions Moosapet', 'Home tuition Moosapet'],
})

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="Family feedback"
        description="Parent and student feedback will be shared here with permission."
        breadcrumbItems={[{ label: 'Testimonials' }]}
      />
      <Testimonials />
    </PageShell>
  )
}
