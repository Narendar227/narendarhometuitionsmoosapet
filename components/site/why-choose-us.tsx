import {
  Award,
  BadgeCheck,
  BrainCircuit,
  CalendarClock,
  ClipboardCheck,
  IndianRupee,
  UserRound,
  Users,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const FEATURES = [
  {
    icon: Award,
    title: 'Qualified Tutors',
    desc: 'Experienced educators who teach the subjects and grade levels your student needs.'
  },
  {
    icon: BadgeCheck,
    title: 'Thoughtful Tutor Matching',
    desc: 'We consider your student’s class, subjects, learning goals and preferred schedule when suggesting a tutor.'
  },
  {
    icon: UserRound,
    title: 'Exclusive One-to-One',
    desc: 'Complete undivided attention with teaching methods customized to your child’s learning style.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule Flexibility',
    desc: 'Classes at convenient times matching your family schedule and child’s comfort.',
  },
  {
    icon: IndianRupee,
    title: 'Discuss Fees First',
    desc: 'Share your budget and ask about current tutor availability and fees before confirming.'
  },
  {
    icon: BrainCircuit,
    title: 'Deep Concept Mastery',
    desc: 'Building strong foundations and genuine understanding instead of superficial memorization.',
  },
  {
    icon: ClipboardCheck,
    title: 'Progress Check-ins',
    desc: 'Discuss learning progress and focus areas with your tutor as the student’s needs change.'
  },
  {
    icon: Users,
    title: 'Customized Learning Plans',
    desc: 'Individualized curriculum designed around each student’s strengths, weaknesses and goals.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Families in Moosapet Choose Narendar Home Tuitions"
          description="Experienced tutors and one-to-one guidance tailored to each learner’s subjects, goals and schedule."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={(i % 4) * 80}
              className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mb-1.5 text-lg font-semibold text-brand">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
