import { createPageMetadata } from '@/components/site/page-metadata'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Curriculum } from '@/components/site/curriculum'

export const metadata = createPageMetadata({
  title: 'Subjects',
  description:
    'Find Mathematics, Science, English and other subject tutors in Moosapet for all classes and CBSE, ICSE and State Board.',
  path: '/subjects',
  keywords: ['Mathematics home tutor Moosapet', 'Science home tutor Moosapet', 'English home tutor Moosapet', 'All subjects home tuition Moosapet'],
})

export default function SubjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Subjects"
        title="All subjects, all classes, all boards"
        description="Explore subject and grade support for the topics your child needs help with."
        breadcrumbItems={[
          { label: 'Services', href: '/services' },
          { label: 'Subjects' },
        ]}
      />
      <Curriculum />
    </PageShell>
  )
}
