import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Areas } from '@/components/site/areas'

export const metadata = createPageMetadata({
  title: 'Home Tuition Service Area in Moosapet',
  description:
    'Explore home tuition availability in Moosapet. Contact Narendar Home Tuitions to discuss your student’s class, subjects and schedule.',
  path: '/services-zones',
  keywords: ['Home tuition in Moosapet', 'Home tutors in Moosapet', 'Moosapet service area', 'Narendar Home Tuitions'],
})

export default function ServiceZonesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service Zones"
        title="Home tuition in Moosapet"
        description="We focus on one-to-one home tuition for students in Moosapet. Share your child’s class, board and subjects so we can discuss a suitable tutor."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Service Zones' },
        ]}
      />
      <Areas isHomepage={false} />
    </PageShell>
  )
}
