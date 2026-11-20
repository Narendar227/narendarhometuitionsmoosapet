import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { About } from '@/components/site/about'

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn about Narendar Home Tuitions in Moosapet and our approach to one-to-one home tuition with experienced tutors.',
  path: '/about',
  keywords: ['Home tuition in Moosapet', 'Home tutors in Moosapet', 'Narendar Home Tuitions'],
})

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="About Narendar Home Tuitions Moosapet"
        description="Learn about our approach to one-to-one home tuition and tutor matching in Moosapet."
        breadcrumbItems={[{ label: 'About Us' }]}
      />
      <About />
    </PageShell>
  )
}
