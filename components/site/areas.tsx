import { MapPin } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'
import { PRIMARY_AREA, SERVICE_AREAS } from './site-data'

export function Areas({ isHomepage = true }: { isHomepage?: boolean }) {
  const displayAreas = SERVICE_AREAS

  return (
    <section id="areas" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Zones"
          title={isHomepage ? `Home tuition in ${PRIMARY_AREA}` : `${PRIMARY_AREA} service area`}
          description={
            isHomepage
              ? `We provide one-to-one home tuition for students in ${PRIMARY_AREA}. Share the student’s class, subjects and schedule to discuss a suitable tutor.`
              : `Moosapet is our dedicated service area. Contact us to discuss tutor availability for your student’s class, subjects and schedule.`
          }
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {displayAreas.map((area, i) => (
            <ScrollReveal
              key={area}
              delay={(i % 3) * 80}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <MapPin className="size-4" />
              </span>
              <span className="text-sm font-medium text-brand">
                {area}
              </span>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
