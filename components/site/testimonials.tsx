import { MessageCircle } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Family feedback"
          title="Family feedback"
          description="Parent and student feedback will be shared here with permission."
          className="mx-auto"
        />
        <ScrollReveal className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
            <MessageCircle className="size-6" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We only publish feedback shared by real families, with their permission.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
