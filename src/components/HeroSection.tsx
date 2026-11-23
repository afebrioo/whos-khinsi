import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react'
import { profile } from '../data/profile'

function resolveAssetPath(path: string | null): string | null {
  if (!path) return null
  if (/^https?:\/\//i.test(path)) return path
  const clean = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${clean}`
}

function PortraitFrame() {
  const portraitSrc = resolveAssetPath(profile.portraitImage)

  return (
    <figure className="mx-auto w-full max-w-[360px] lg:ml-auto lg:mr-0">
      {/* Outer soft-arched archival frame */}
      <div className="rounded-t-full rounded-b-[34px] border border-taupe/90 bg-ivory p-3.5 sm:p-4">
        {/* Inner arched frame — seamlessly swaps to real portrait when profile.portraitImage is set */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full rounded-b-[24px] border border-taupe-strong/80 bg-linen">
          {portraitSrc ? (
            <img
              src={portraitSrc}
              alt={profile.portraitAlt}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="relative flex h-full w-full flex-col items-center justify-between px-7 py-10 text-center">
              {/* Quiet inner concentric hairline arch */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3.5 rounded-t-full rounded-b-[16px] border border-taupe/80"
              />

              {/* Top gentle dot ornament */}
              <div className="relative z-10 flex flex-col items-center pt-5">
                <span className="h-6 w-px rounded-full bg-taupe-strong/80" aria-hidden="true" />
                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-caramel/75" aria-hidden="true" />
              </div>

              {/* Center monogram & delicate cursive flourish */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.34em] text-muted">
                  Monograph
                </span>
                <p className="mt-3 pl-[0.26em] font-serif text-[2.35rem] font-normal tracking-[0.26em] text-espresso">
                  K·F·Z
                </p>
                <div className="my-4 h-px w-12 rounded-full bg-caramel/60" aria-hidden="true" />
                <p className="script-accent text-[1.95rem] text-caramel">
                  {profile.firstName}
                </p>
              </div>

              {/* Bottom editorial archival footer inside placeholder */}
              <div className="relative z-10 pb-1">
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted">
                  Bandung · Indonesia
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Soft archival plate caption */}
      <figcaption className="mt-3.5 flex items-center justify-between px-3 text-[10px] uppercase tracking-[0.24em] text-muted">
        <span>Plate 01</span>
        <span className="mx-3 h-px flex-1 rounded-full bg-taupe" aria-hidden="true" />
        <span>Legal Monograph</span>
      </figcaption>
    </figure>
  )
}

export function HeroSection() {
  const cvHref = resolveAssetPath(profile.cvUrl)

  return (
    <section className="relative overflow-hidden bg-cream pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left editorial column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-taupe bg-ivory px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-caramel" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>

            <p className="script-accent mt-6 text-[2.25rem] text-caramel sm:text-[2.65rem]">
              Legal Portfolio
            </p>

            <h1 className="mt-1 font-serif text-[3.25rem] font-normal leading-[0.98] tracking-[-0.02em] text-espresso sm:text-[4.4rem] lg:text-[5.15rem]">
              Khansa Fauzia{' '}
              <span className="italic font-normal text-caramel-dark">Zahra</span>
            </h1>

            <div className="mt-8 flex items-stretch gap-4">
              <span
                aria-hidden="true"
                className="w-[2px] shrink-0 rounded-full bg-caramel/75"
              />
              <div>
                <p className="text-sm font-medium tracking-[0.03em] text-espresso sm:text-[15px]">
                  {profile.currentPosition}
                </p>
                <p className="mt-1 text-xs tracking-[0.02em] text-muted sm:text-[13px]">
                  Law Graduate, Universitas Pasundan · Ex-Legal Intern at Regional Secretariat of West Java Province
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-[15px] leading-[1.85] text-walnut sm:text-base">
              {profile.heroLead}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-espresso bg-espresso px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-250 hover:bg-cocoa"
              >
                <span>Get in Touch</span>
                <ArrowDownRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-taupe-strong bg-ivory px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors duration-250 hover:border-espresso hover:bg-linen"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>

              {cvHref && (
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-taupe bg-transparent px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-walnut transition-colors duration-250 hover:border-espresso hover:text-espresso"
                >
                  <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>Curriculum Vitae</span>
                </a>
              )}
            </div>
          </div>

          {/* Right archival portrait column */}
          <div className="lg:col-span-5">
            <PortraitFrame />
          </div>
        </div>
      </div>
    </section>
  )
}
