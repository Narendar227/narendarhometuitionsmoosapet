'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL, PRIMARY_AREA, SERVICE_AREAS, openWhatsApp } from './site-data'

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

export function JoinParentForm() {
  const [submitted, setSubmitted] = useState(false)
  const [blockedUrl, setBlockedUrl] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (name: string) => String(data.get(name) ?? '').trim() || 'Not provided'

    const message = [
      `*New Parent Enquiry – ${BUSINESS_NAME}*`,
      '',
      `Parent Name: ${get('parentName')}`,
      `Mobile: ${get('mobile')}`,
      `Email: ${get('email')}`,
      `Student Name: ${get('studentName')}`,
      `Class: ${get('class')}`,
      `Board: ${get('board')}`,
      `Subjects: ${get('subjects')}`,
      `Preferred Tutor: ${get('preferredTutor')}`,
      `Location: ${get('locality')}`,
      `Address: ${get('address')}`,
      `Preferred Timings: ${get('time')}`,
      `Budget: ${get('budget')}`,
      `Additional Requirements: ${get('notes')}`,
      '',
      `Please contact me regarding home tuition services in ${PRIMARY_AREA}.`,
    ].join('\n')

    const { opened, url } = openWhatsApp(message)
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
        <h2 className="font-serif text-2xl font-semibold text-brand">Your enquiry is ready in WhatsApp</h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Please press send in WhatsApp to share your details with us. Our team will then contact you to match you with a suitable home tutor in {PRIMARY_AREA}.
        </p>
        <Button
          render={<Link href="/" />}
          className="mt-2 h-11 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Parent Name" htmlFor="parentName">
          <input id="parentName" name="parentName" required placeholder="Full name" className={fieldClass} />
        </Field>
        <Field label="Mobile Number" htmlFor="mobile">
          <input id="mobile" name="mobile" type="tel" required inputMode="tel" pattern="[0-9+()\\s-]{10,}" title="Please enter a valid 10-digit mobile number" placeholder="10-digit mobile number" className={fieldClass} />
        </Field>
        <Field label="Email Address" htmlFor="email" optional>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={fieldClass} />
        </Field>
        <Field label="Student Name" htmlFor="studentName">
          <input id="studentName" name="studentName" required placeholder="Student's name" className={fieldClass} />
        </Field>
        <Field label="Class / Grade" htmlFor="class">
          <input id="class" name="class" required placeholder="e.g. Class 8, Intermediate" className={fieldClass} />
        </Field>
        <Field label="Board" htmlFor="board">
          <select id="board" name="board" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select board
            </option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Board">State Board</option>
            <option value="Others">Others</option>
          </select>
        </Field>
        <Field label="Subjects Required" htmlFor="subjects" full>
          <input id="subjects" name="subjects" required placeholder="e.g. Maths, Science, English" className={fieldClass} />
        </Field>
        <Field label="Preferred Tutor" htmlFor="preferredTutor">
          <select id="preferredTutor" name="preferredTutor" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select preference
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Any">Any</option>
          </select>
        </Field>
        <Field label="Preferred Location" htmlFor="locality">
          <input
            id="locality"
            name="locality"
            required
            list="service-areas"
            defaultValue={PRIMARY_AREA}
            placeholder="Moosapet"
            className={fieldClass}
          />
          <datalist id="service-areas">
            {SERVICE_AREAS.map((area) => (
              <option key={area} value={area} />
            ))}
          </datalist>
        </Field>
        <Field label="Home Address" htmlFor="address" full>
          <textarea id="address" name="address" required rows={2} placeholder="Full home address" className={`${fieldClass} resize-none`} />
        </Field>
        <Field label="Preferred Tuition Timings" htmlFor="time">
          <input id="time" name="time" required placeholder="e.g. Weekdays 5–7 PM" className={fieldClass} />
        </Field>
        <Field label="Budget" htmlFor="budget">
          <input id="budget" name="budget" placeholder="e.g. ₹3000 – ₹5000 / month" className={fieldClass} />
        </Field>
        <Field label="Additional Requirements" htmlFor="notes" full>
          <textarea id="notes" name="notes" rows={3} placeholder="Anything else we should know?" className={`${fieldClass} resize-none`} />
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
