'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'
import { PHONE_DISPLAY } from './site-data'

const FAQS = [
  { q: 'How can I find a home tutor in Moosapet?', a: 'Share the student’s class, board, subjects and preferred location through our Join as Parent form, by phone or on WhatsApp. We review the requirement and suggest a suitable home tutor in Moosapet.' },
  { q: 'Which classes and subjects are covered?', a: 'We support school classes with commonly requested subjects including Mathematics, Science, English, Social Studies and languages. Availability depends on the specific requirement.' },
  { q: 'Do you support CBSE, ICSE and Telangana State Board?', a: 'Yes. We arrange home tuition in Moosapet for CBSE, ICSE and State Board students and match each request with relevant subject and curriculum experience.' },
  { q: 'Do you have Mathematics and Science home tutors in Moosapet?', a: 'Yes. Mathematics and Science are among our most requested subjects. Tell us the class and board so we can recommend an experienced home tutor.' },
  { q: 'Where do you provide home tuition?', a: 'We currently focus on students in Moosapet. Contact us to check tutor availability for your student’s class, subjects and schedule.' },
  { q: 'How does the tutor-matching process work?', a: 'We first understand the student’s learning goals, subjects, board, schedule and location. We then share an appropriate tutor profile before classes begin.' },
  { q: 'Can I register as a home tutor in Moosapet?', a: 'Yes. Use the Join as Tutor form to share your qualifications, experience, subjects and preferred teaching areas. Our team contacts shortlisted tutors.' },
  { q: 'How do I contact Narendar Home Tuitions Moosapet?', a: `Call or WhatsApp us on ${PHONE_DISPLAY}, or use the parent enquiry form. Include a preferred callback time and the student’s tuition requirement.` },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-base font-semibold text-brand">{q}</span>
        <span
          className={cn(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
            open ? 'bg-brand text-brand-foreground' : 'bg-secondary text-brand',
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about our home tuition services."
          className="mx-auto"
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={(i % 4) * 60}>
              <FaqItem q={faq.q} a={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
