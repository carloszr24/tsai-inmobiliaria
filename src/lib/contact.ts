export const AGENT = {
  name: 'Inmo Analista',
  title: 'Soluciones inmobiliarias',
  city: 'Requena',
  province: 'Valencia',
  tagline: 'Asesoramiento personalizado para compra, venta y alquiler en Requena y la provincia de Valencia.',
} as const

export const CONTACT = {
  address: {
    line1: 'Av. del General Pereyra, 37',
    line2: '46340 Requena, Valencia',
    full: 'Av. del General Pereyra, 37, 46340 Requena, Valencia',
    mapsQuery: 'Av.+del+General+Pereyra,+37,+46340+Requena,+Valencia',
  },
  phone: {
    display: '675 90 08 72',
    e164: '+34675900872',
    wa: '34675900872',
  },
  email: 'info@inmoanalista.com',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '10:00–14:00 · 16:30–20:30' },
  { day: 'Martes', hours: '10:00–14:00 · 16:30–20:30' },
  { day: 'Miércoles', hours: '10:00–14:00 · 16:30–20:30' },
  { day: 'Jueves', hours: '10:00–14:00 · 16:30–20:30' },
  { day: 'Viernes', hours: '10:00–14:00 · 16:30–20:30' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Vie: 10:00–14:00 · 16:30–20:30 · Sáb y Dom: Cerrado'
