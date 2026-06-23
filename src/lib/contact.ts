export const AGENT = {
  name: 'TSai Asesores',
  title: 'Inmobiliaria',
  city: 'Mairena del Alcor',
  province: 'Sevilla',
  tagline: 'Asesoramiento personalizado para compra, venta y alquiler en Mairena del Alcor y la provincia de Sevilla.',
} as const

export const CONTACT = {
  address: {
    line1: 'Av. de Andalucía, 43',
    line2: '41510 Mairena del Alcor, Sevilla',
    full: 'Av. de Andalucía, 43, 41510 Mairena del Alcor, Sevilla',
    mapsQuery: 'Av.+de+Andalucia,+43,+41510+Mairena+del+Alcor,+Sevilla',
  },
  phone: {
    display: '673 85 71 62',
    e164: '+34673857162',
    wa: '34673857162',
  },
  email: 'tsaiasesores@gmail.com',
} as const

export const OPENING_HOURS = [
  { day: 'Lunes', hours: '9:00–13:30 · 19:00–20:30' },
  { day: 'Martes', hours: '9:00–13:30 · 19:00–20:30' },
  { day: 'Miércoles', hours: '9:00–13:30 · 19:00–20:30' },
  { day: 'Jueves', hours: '9:00–13:30 · 19:00–20:30' },
  { day: 'Viernes', hours: '9:00–13:30' },
  { day: 'Sábado', hours: 'Cerrado' },
  { day: 'Domingo', hours: 'Cerrado' },
] as const

export const mapsHref = `https://maps.google.com/?q=${CONTACT.address.mapsQuery}`
export const phoneHref = `tel:${CONTACT.phone.e164}`
export const whatsappHref = `https://wa.me/${CONTACT.phone.wa}`
export const hasEmail = CONTACT.email.trim().length > 0
export const emailHref = hasEmail ? `mailto:${CONTACT.email}` : ''
export const whatsappDisplay = `+34 ${CONTACT.phone.display}`

export const scheduleSummary = 'Lun–Jue: 9:00–13:30 · 19:00–20:30 · Vie: 9:00–13:30 · Sáb y Dom: Cerrado'
