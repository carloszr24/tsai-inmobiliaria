'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '+100', label: 'propiedades vendidas' },
  { value: '< 60 días', label: 'tiempo medio de cierre' },
  { value: '100%', label: 'atención personalizada' },
]

const pillars = [
  {
    title: 'Escuchamos primero',
    desc: 'Cada operación empieza entendiendo qué necesitas tú, no imponiendo un proceso genérico.',
  },
  {
    title: 'Transparencia total',
    desc: 'Información clara en cada paso para que decidas con tranquilidad y sin sorpresas.',
  },
  {
    title: 'Acompañamiento real',
    desc: 'Te guiamos de principio a fin con un trato cercano y profesional en Requena y provincia.',
  },
]

export function ClientFirstSection() {
  const [isVisible, setIsVisible] = useState(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(rootRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={rootRef} className="bg-stone-50 py-20 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-12 md:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:grid-cols-3 sm:gap-0 sm:p-2">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center rounded-xl px-6 py-5 text-center ${
                  idx !== 2 ? 'sm:border-r sm:border-stone-200' : ''
                }`}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Nuestra filosofía</p>
          <h2 className="section-title mb-5">Nuestra prioridad: el cliente</h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Lideramos cada operación con un servicio adaptado a tus necesidades, porque tu confianza es lo que más valoramos.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="bg-white border border-stone-200 rounded-lg p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-1 h-8 bg-gold mb-5" />
              <h3 className="font-medium text-stone-900 mb-3">{pillar.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{pillar.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
