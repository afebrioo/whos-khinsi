import { ArrowUpRight, BookOpen } from 'lucide-react'
import { profile } from '../data/profile'

export function PublicationsSection() {
  return (
    <section id="publications" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="script-accent text-[2.1rem] text-caramel sm:text-[2.4rem]">
              Selected Writings
            </p>
            <h2 className="mt-1 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.015em] text-espresso sm:text-5xl">
              Academic <span className="italic text-caramel-dark">Publications</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed tracking-[0.03em] text-muted sm:text-right">
            Published legal journals examining professional ethics and foundational legal philosophy.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {profile.publications.map((pub, index) => (
            <article
              key={pub.index}
              className={`reveal ${index === 1 ? 'reveal-delay-1' : ''} group flex flex-col justify-between rounded-[28px] border border-taupe/90 bg-ivory p-8 transition-colors duration-300 hover:border-caramel/80 sm:p-10`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-5xl font-light leading-none text-taupe-strong transition-colors duration-300 group-hover:text-caramel">
                    {pub.index}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-taupe bg-cream px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-walnut">
                    <BookOpen className="h-3 w-3 text-caramel" strokeWidth={1.4} />
                    <span>{pub.type}</span>
                  </span>
                </div>

                <div className="my-7 h-[1.5px] w-10 rounded-full bg-caramel/65" aria-hidden="true" />

                <h3 className="font-serif text-[1.65rem] font-normal leading-[1.3] text-espresso sm:text-[1.85rem]">
                  {pub.title}
                </h3>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-taupe/70 pt-5">
                <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
                  {pub.theme}
                </span>

                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.18em] text-caramel-dark"
                  >
                    <span>Read Journal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                ) : (
                  <span className="font-serif italic text-sm text-caramel">
                    {pub.language}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
