import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Services } from '@/components/site/services'
import { HowItWorks } from '@/components/site/how-it-works'

export const metadata = createPageMetadata({
  title: 'Home Tuition Services',
  description:
    'Explore one-to-one home tuition in Moosapet, including subject support and preparation for CBSE, ICSE and State Board.',
  path: '/services',
  keywords: ['Home tuition services Moosapet', 'Private tutors Moosapet', 'CBSE home tuition Moosapet', 'ICSE home tuition Moosapet', 'State Board home tuition Moosapet'],
})

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Complete home tutoring solutions"
        description="From everyday homework help to full exam preparation, we offer the right home tuition support in Moosapet for every learning goal."
        breadcrumbItems={[{ label: 'Services' }]}
      />
      <Services />
      <HowItWorks />
    </PageShell>
  )
}
