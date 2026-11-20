import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { WhyChooseUs } from '@/components/site/why-choose-us'

export const metadata = createPageMetadata({
  title: 'Why Choose Us',
  description:
    'Explore one-to-one home tuition in Moosapet with experienced tutors and scheduling arranged around your family’s needs.',
  path: '/why-choose-us',
  keywords: ['Home tuition Moosapet', 'One-to-one home tutors Moosapet', 'Narendar Home Tuitions'],
})

export default function WhyChooseUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Why Choose Us"
        title="Home tuition for Moosapet families"
        description="Explore experienced tutors, one-to-one learning and flexible scheduling for families in Moosapet."
        breadcrumbItems={[{ label: 'Why Choose Us' }]}
      />
      <WhyChooseUs />
    </PageShell>
  )
}
