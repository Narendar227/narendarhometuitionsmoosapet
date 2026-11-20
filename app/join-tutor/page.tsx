import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinTutorForm } from '@/components/site/join-tutor-form'

export const metadata = createPageMetadata({
  title: 'Register as a Home Tutor in Moosapet',
  description:
    'Share your qualifications, teaching experience and preferred subjects to enquire about tutoring opportunities in Moosapet.',
  path: '/join-tutor',
  keywords: ['Home tutor registration Moosapet', 'Teaching opportunities Moosapet', 'Narendar Home Tuitions'],
})

export default function JoinTutorPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Tutor"
        title="Become a home tutor in Moosapet"
        description="Register your profile below. Our team will review your details and contact you if you are shortlisted for teaching opportunities."
        breadcrumbItems={[{ label: 'Join as Tutor' }]}
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinTutorForm />
        </div>
      </section>
    </PageShell>
  )
}
