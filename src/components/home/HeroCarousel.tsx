'use client'

import Image from 'next/image'

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-stone-950" aria-hidden="true">
      <Image
        src="/images/requena.webp"
        alt="Vista de Requena, Valencia"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-stone-950/20" />
      <div className="absolute inset-x-0 top-0 h-36 md:h-40 bg-gradient-to-b from-white/88 via-white/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/35 to-stone-950/70" />
      <div className="absolute inset-0 bg-brand-cyan-dark/5 mix-blend-multiply" />
    </div>
  )
}
