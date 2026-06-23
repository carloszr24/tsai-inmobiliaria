export function HeroScrollHint() {
  return (
    <a
      href="#contenido"
      className="mt-6 md:mt-8 inline-flex flex-col items-center gap-2.5 text-white/75 hover:text-white transition-colors duration-200 animate-fade-up"
      style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}
      aria-label="Desliza para ver más contenido"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.22em]">Desliza</span>
      <span className="relative flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-white/45">
        <span className="mt-2 block h-2.5 w-px bg-white animate-scroll" aria-hidden="true" />
      </span>
    </a>
  )
}
