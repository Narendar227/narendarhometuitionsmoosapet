export const SITE_URL = 'https://narendarhometuitions.com'

export const BUSINESS_NAME = 'Narendar Home Tuitions Moosapet'
export const BRAND_NAME = 'Narendar Home Tuitions'
export const PRIMARY_AREA = 'Moosapet'
export const CITY = 'Hyderabad'
export const REGION = 'Telangana'

export const PHONE_DISPLAY = '+91 63040 79622'
export const PHONE_RAW = '+916304079622'
export const PHONE_TEL = `tel:${PHONE_RAW}`

export const WHATSAPP_NUMBER = '916304079622'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = buildWhatsAppUrl(
  `Hello ${BUSINESS_NAME}, I would like to ask about home tuition in ${PRIMARY_AREA}.`,
)

export function openWhatsApp(message: string): { opened: boolean; url: string } {
  const url = buildWhatsAppUrl(message)
  // Passing 'noopener' makes window.open always return null, which would hide popup blocking.
  const win = window.open(url, '_blank')
  if (win) win.opener = null
  return { opened: win !== null, url }
}

export const LOCATION = 'FC8G+66 Hyderabad, Telangana'
export const MAP_LINK =
  'https://www.google.com/maps/search/?api=1&query=FC8G%2B66+Hyderabad%2C+Telangana'
export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=FC8G%2B66+Hyderabad%2C+Telangana&output=embed'

export const SERVICE_AREAS = ['Moosapet'] as const
