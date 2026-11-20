import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinParentForm } from '@/components/site/join-parent-form'

export const metadata = createPageMetadata({
  title: 'Request a Home Tutor in Moosapet',
  description:
    'Share your child’s class, subjects and schedule to enquire about one-to-one home tuition in Moosapet through WhatsApp.',
  path: '/join-parent',
  keywords: ['Request a home tutor Moosapet', 'Home tuition enquiry Moosapet', 'Narendar Home Tuitions'],
})

export default function JoinParentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Parent"
        title="Find the right home tutor in Moosapet"
        description="Share your student’s class, subjects, schedule and preferences to enquire about home tuition in Moosapet."
        breadcrumbItems={[{ label: 'Join as Parent' }]}
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinParentForm />
        </div>
      </section>
    </PageShell>
  )
}
