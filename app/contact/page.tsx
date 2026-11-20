import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { MapSection } from '@/components/site/map-section'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Contact Narendar Home Tuitions in Moosapet at FC8G+66 Hyderabad, Telangana. Call or WhatsApp +91 63040 79622.',
  path: '/contact',
  keywords: ['Contact home tutors in Moosapet', 'Home tuition enquiry Moosapet', 'Narendar Home Tuitions'],
})

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Contact our Moosapet team"
        description="Contact us to discuss your student’s needs. Call, WhatsApp or send us a message."
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />
      <MapSection />
    </PageShell>
  )
}
