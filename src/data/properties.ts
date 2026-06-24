import type { Property } from '@/types'
import { AGENT, CONTACT } from '@/lib/contact'

const LEGAL_NOTICE = `NOTA: El precio no incluye honorarios de la agencia inmobiliaria, impuestos (IVA, ITP) y otros gastos de la compraventa (notaría, gestoría y registros). La oferta está sujeta a cambios de precio o retirada del mercado sin previo aviso. Este anuncio, incluyendo textos, fotos e imágenes, no es vinculante: la información es ofrecida por terceros y puede contener errores. Se muestra a título informativo y no contractual.

Más información: ${AGENT.name} — ${CONTACT.phone.display}.`

const now = new Date()

/** Catálogo en archivo local. Añade propiedades desde el panel admin o editando este archivo. */
export const DEMO_PROPERTIES: Property[] = [
  {
    id: 'ref-26101-huerta-el-retiro',
    title: 'Edificio en venta en La Huerta el Retiro',
    price: 245_000,
    location: 'Mairena del Alcor, Sevilla',
    type: 'casa',
    operation: 'venta',
    status: 'disponible',
    description: `Ref: 26101. Estupendo edificio sobre parcela de 135 m², muy bien ubicado en el barrio de La Huerta el Retiro, Mairena del Alcor.

Consta de toda la planta baja de garaje/almacén con 129 m² construidos.

En primera planta, vivienda de 143 m², distribuidos en amplio salón, sala de estar, cocina, patio interior, 4 habitaciones y 2 baños. Azotea.

272 m² construidos en total (900,74 €/m²).

Aire acondicionado. Armarios empotrados.

Los gastos de compra NO van incluidos en el precio.

Equipamiento: lavadero, balcón y electrodomésticos.

Extras: jardín y aire acondicionado.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/tsai1.png',
      '/images/tsai1(1).png',
      '/images/tsai1(2).png',
      '/images/tsai1(3).png',
    ]),
    fotocasaUrl: null,
    bedrooms: 4,
    bathrooms: 2,
    sqMeters: 272,
    floor: '1º',
    hotWater: 'Butano',
    heating: 'Aire acondicionado',
    furnished: 'Electrodomésticos',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'ref-26110-local-benajete',
    title: 'Local en Calle Benajete, 25',
    price: 475,
    location: 'Mairena del Alcor, Sevilla',
    type: 'local',
    operation: 'alquiler',
    status: 'disponible',
    description: `Ref: 26110. LOCAL muy bien ubicado de 90 m², calle Benajete, 25 de Mairena del Alcor.

Consta de recibidor, amplio salón, almacén y 2 baños.

Puerta de entrada automática, 3 equipos de aire acondicionado y escaparate.

Cuenta con luz y agua.

DISPONIBLE JUNIO 2026.

90 m² (5,28 €/m²).

Extras: aire acondicionado y puerta automática.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/tsai2.png',
      '/images/tsai2(1).png',
      '/images/tsai2(2).png',
    ]),
    fotocasaUrl: null,
    bathrooms: 2,
    sqMeters: 90,
    availability: 'Junio 2026',
    heating: 'Aire acondicionado',
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'ref-2053-plazas-garaje-guadalquivir',
    title: 'Tres plazas de garaje en Calle Guadalquivir',
    price: 15_000,
    location: 'Calle Guadalquivir, Mairena del Alcor, Sevilla',
    type: 'local',
    operation: 'venta',
    status: 'disponible',
    description: `Ref: 2053. Se venden TRES plazas de garaje en calle Guadalquivir, en semisótano.

Contamos con 3 plazas disponibles; 2 de ellas están juntas, con posibilidad de unirlas para hacer un almacén.

SE VENDEN A 5.000 € CADA UNA = 15.000 € EN TOTAL.

NO se pueden vender por separado.

${LEGAL_NOTICE}`,
    images: JSON.stringify([
      '/images/tsai3.png',
      '/images/tsai3(1).png',
    ]),
    fotocasaUrl: null,
    sqMeters: null,
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
]
