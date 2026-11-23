import { Award } from 'lucide-react'
import { profile } from '../data/profile'

export function CredentialsSection() {
  return (
    <div className="bg-cream">
      <section
        id="credentials"
        className="rounded-t-[36px] bg-linen py-20 sm:rounded-t-[48px] sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="script-accent text-[2.1rem] text-caramel sm:text-[2.4rem]">
            Distinctions &amp; Training
          </p>
          <h2 className="mt-1 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.015em] text-espresso sm:text-5xl">
            Honors &amp; <span className="italic text-caramel-dark">Certifications</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Honors & Awards */}
          <div className="reveal reveal-delay-1 lg:col-span-5">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
              Honors &amp; Awards
            </h3>

            <div className="mt-5 space-y-5">
              {profile.honors.map((honor) => (
                <article
                  key={honor.event}
                  className="rounded-[26px] border border-taupe/90 bg-ivory p-6 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={
                        honor.medal === 'gold'
                          ? 'inline-flex items-center gap-1.5 rounded-full border border-caramel/70 bg-linen px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-caramel-dark'
                          : 'inline-flex items-center gap-1.5 rounded-full border border-taupe-strong/80 bg-cream px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-walnut'
                      }
                    >
                      <Award className="h-3 w-3" strokeWidth={1.5} />
                      <span>{honor.award}</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                      {honor.level}
                    </span>
                  </div>

                  <h4 className="mt-4 font-serif text-[1.45rem] font-normal leading-snug text-espresso">
                    {honor.event}
                  </h4>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications ledger */}
          <div className="reveal reveal-delay-2 lg:col-span-7">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
              Certifications &amp; Workshops
            </h3>

            <ol className="mt-5 divide-y divide-taupe/60 rounded-[28px] border border-taupe/90 bg-ivory px-6 py-2 sm:px-8">
              {profile.certifications.map((cert) => (
                <li
                  key={cert.index}
                  className="group flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="shrink-0 font-serif italic text-lg text-caramel">
                      {cert.index}
                    </span>
                    <span className="font-serif text-[1.3rem] leading-snug text-espresso transition-colors duration-200 group-hover:text-caramel-dark sm:text-[1.4rem]">
                      {cert.title}
                    </span>
                  </div>
                  <span className="pl-8 text-[10px] uppercase tracking-[0.2em] text-muted sm:shrink-0 sm:pl-0">
                    {cert.category}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
