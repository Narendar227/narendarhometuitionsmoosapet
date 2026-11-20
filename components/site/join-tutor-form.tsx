'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL, PRIMARY_AREA, openWhatsApp } from './site-data'


const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20'

function Field({
  label,
  htmlFor,
  optional,
  children,
  full,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-brand">
        {label}
        {optional ? <span className="ml-1 text-xs font-normal text-muted-foreground">(Optional)</span> : null}
      </label>
      {children}
    </div>
  )
}

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Full Name',
  mobile: 'Mobile Number',
  whatsapp: 'WhatsApp Number',
  email: 'Email',
  gender: 'Gender',
  qualification: 'Qualification',
  experience: 'Experience',
  subjects: 'Subjects',
  classes: 'Classes',
  boards: 'Boards',
  areas: 'Preferred Teaching Areas',
  languages: 'Languages Known',
  timings: 'Available Timings',
  address: 'Address',
  additionalInfo: 'Additional Information',
}

export function JoinTutorForm() {
  const [submitted, setSubmitted] = useState(false)
  const [blockedUrl, setBlockedUrl] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const lines = [`*New Tutor Registration – ${BUSINESS_NAME}*`, '']
    for (const [key, label] of Object.entries(FIELD_LABELS)) {
      const value = String(data.get(key) ?? '').trim() || 'Not provided'
      lines.push(`${label}: ${value}`)
    }
    lines.push(
      `Primary Teaching Location: ${PRIMARY_AREA}`,
      '',
      `I would like to register as a home tutor with ${BUSINESS_NAME}.`,
    )

    const { opened, url } = openWhatsApp(lines.join('\n'))
    if (!opened) {
      setBlockedUrl(url)
      return
    }
    setBlockedUrl(null)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="size-9" />
        </span>
        <h2 className="font-serif text-2xl font-semibold text-brand">Your registration is ready in WhatsApp</h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Please press send in WhatsApp to complete your registration, and our team
          will contact you if you are shortlisted.
        </p>
        <div className="mt-2 w-full max-w-md rounded-2xl border border-border bg-secondary/50 p-5 text-center">
          <p className="text-sm font-medium text-brand">Follow Narendar Home Tuitions on WhatsApp</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Connect with us and get the latest tuition updates and openings.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <Button
              render={
                <a
                  href="https://chat.whatsapp.com/KkzbVm4Jfn5KiKbjeeKQ4v"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-11 w-full gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
            >
              <MessageCircle className="size-4" />
              Join Community
            </Button>
            <Button
              render={
                <a
                  href="https://whatsapp.com/channel/0029VbDazXaCsU9UcbMeRF0s"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              className="h-11 w-full gap-2 rounded-full border-brand/25 px-6 text-sm font-semibold text-brand hover:bg-secondary"
            >
              <MessageCircle className="size-4" />
              Follow Channel
            </Button>
          </div>
        </div>
        <Button
          render={<Link href="/" />}
          variant="outline"
          className="h-11 rounded-full px-6 text-sm font-semibold"
        >
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
            <MessageCircle className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand">Follow Narendar Home Tuitions on WhatsApp</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Join our community and follow our channel to get the latest tuition updates and openings.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            render={
              <a
                href="https://chat.whatsapp.com/KkzbVm4Jfn5KiKbjeeKQ4v"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="h-11 shrink-0 gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <MessageCircle className="size-4" />
            Join Community
          </Button>
          <Button
            render={
              <a
                href="https://whatsapp.com/channel/0029VbDazXaCsU9UcbMeRF0s"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            className="h-11 shrink-0 gap-2 rounded-full border-brand/25 px-6 text-sm font-semibold text-brand hover:bg-secondary"
          >
            <MessageCircle className="size-4" />
            Follow Channel
          </Button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName">
          <input id="fullName" name="fullName" required placeholder="Your full name" className={fieldClass} />
        </Field>
        <Field label="Mobile Number" htmlFor="mobile">
          <input id="mobile" name="mobile" type="tel" required inputMode="tel" pattern="[0-9+()\\s-]{10,}" title="Please enter a valid 10-digit mobile number" placeholder="10-digit mobile number" className={fieldClass} />
        </Field>
        <Field label="WhatsApp Number" htmlFor="whatsapp">
          <input id="whatsapp" name="whatsapp" type="tel" required inputMode="tel" pattern="[0-9+()\\s-]{10,}" title="Please enter a valid WhatsApp number" placeholder="WhatsApp number" className={fieldClass} />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
        </Field>
        <Field label="Gender" htmlFor="gender">
          <select id="gender" name="gender" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Educational Qualification" htmlFor="qualification">
          <input id="qualification" name="qualification" required placeholder="e.g. B.Sc, M.Sc, B.Ed" className={fieldClass} />
        </Field>
        <Field label="Teaching Experience" htmlFor="experience">
          <input id="experience" name="experience" required placeholder="e.g. 3 years" className={fieldClass} />
        </Field>
        <Field label="Subjects You Teach" htmlFor="subjects" full>
          <input id="subjects" name="subjects" required placeholder="e.g. Maths, Physics, Chemistry" className={fieldClass} />
        </Field>
        <Field label="Classes / Grades You Teach" htmlFor="classes">
          <input id="classes" name="classes" required placeholder="e.g. Classes 6–10, Intermediate" className={fieldClass} />
        </Field>
        <Field label="Boards You Teach" htmlFor="boards">
          <input id="boards" name="boards" required placeholder="e.g. CBSE, ICSE, State Board" className={fieldClass} />
        </Field>
        <Field label="Preferred Teaching Areas" htmlFor="areas">
          <input id="areas" name="areas" required placeholder="e.g. Moosapet" className={fieldClass} />
        </Field>
        <Field label="Languages Known" htmlFor="languages">
          <input id="languages" name="languages" required placeholder="e.g. English, Hindi, Telugu" className={fieldClass} />
        </Field>
        <Field label="Available Timings" htmlFor="timings">
          <input id="timings" name="timings" required placeholder="e.g. Weekdays 4–8 PM" className={fieldClass} />
        </Field>
        <Field label="Address" htmlFor="address" full>
          <textarea id="address" name="address" required rows={2} placeholder="Your residential address" className={`${fieldClass} resize-none`} />
        </Field>
        <Field label="Additional Information" htmlFor="additionalInfo" optional full>
          <textarea id="additionalInfo" name="additionalInfo" rows={3} placeholder="Anything else you would like us to know?" className={`${fieldClass} resize-none`} />
        </Field>
      </div>

      {blockedUrl ? (
        <div role="alert" className="mt-6 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-foreground">
          <p className="font-semibold text-brand">WhatsApp could not be opened automatically.</p>
          <p className="mt-1 text-muted-foreground">
            Your browser may have blocked the pop-up. Your details are still filled in —{' '}
            <a href={blockedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline">
              tap here to open WhatsApp
            </a>{' '}
            or call us on{' '}
            <a href={PHONE_TEL} className="font-semibold text-brand underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
        <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand" />
        <span>On submit, your details open in WhatsApp — just press send to complete your registration. Our team will contact you if shortlisted.</span>
      </div>

      <Button
        type="submit"
        className="mt-6 h-13 w-full gap-2 rounded-full bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90 sm:w-auto sm:px-10"
      >
        <Send className="size-4" />
        Submit via WhatsApp
      </Button>
    </form>
  )
}
