import { MapPin } from 'lucide-react'
import { profile } from '../data/profile'

export function ExperienceSection() {
  return (
    <div className="bg-cream px-2 sm:px-4">
      <section
        id="experience"
        className="mx-auto max-w-[1360px] rounded-[36px] bg-linen py-20 sm:rounded-[48px] sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="script-accent text-[2.1rem] text-caramel sm:text-[2.4rem]">
              Curriculum Vitae
            </p>
            <h2 className="mt-1 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.015em] text-espresso sm:text-5xl">
              Experience &amp; <span className="italic text-caramel-dark">Education</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed tracking-[0.03em] text-muted sm:text-right">
            Corporate legal practice, public-sector litigation support, and academic foundation in Law.
          </p>
        </div>

        {/* Work experience ledger */}
        <div className="mt-14 divide-y divide-taupe-strong/70 border-t border-taupe-strong/70">
          {profile.experiences.map((exp, idx) => (
            <article
              key={exp.id}
              className={`reveal ${idx === 1 ? 'reveal-delay-1' : ''} grid grid-cols-1 gap-6 py-11 lg:grid-cols-12 lg:gap-10`}
            >
              {/* Left timeline metadata */}
              <div className="lg:col-span-4">
                <p className="font-serif text-[1.4rem] leading-snug text-espresso">
                  {exp.period}
                </p>

                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                  <span
                    className={
                      exp.isCurrent
                        ? 'rounded-full border border-caramel/75 bg-cream px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-caramel-dark'
                        : 'rounded-full border border-taupe-strong/80 bg-ivory px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted'
                    }
                  >
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-caramel" strokeWidth={1.4} />
                  <span>{exp.location}</span>
                </p>
              </div>

              {/* Right role details */}
              <div className="lg:col-span-8">
                <h3 className="font-serif text-3xl font-normal leading-tight text-espresso sm:text-[2.2rem]">
                  {exp.role}
                </h3>

                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-caramel-dark">
                  {exp.organization}
                  {exp.organizationNote && (
                    <span className="font-normal text-muted">
                      {' '}
                      · {exp.organizationNote}
                    </span>
                  )}
                </p>

                {exp.summary && (
                  <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-walnut">
                    {exp.summary}
                  </p>
                )}

                {exp.groups && exp.groups.length > 0 && (
                  <div className="mt-6 rounded-[26px] border border-taupe/90 bg-ivory p-6 sm:p-8">
                    <div className="space-y-7">
                      {exp.groups.map((group, groupIndex) => (
                        <div
                          key={group.label}
                          className={
                            groupIndex > 0 ? 'border-t border-taupe/60 pt-6' : ''
                          }
                        >
                          <h4 className="text-[10px] font-medium uppercase tracking-[0.24em] text-caramel-dark">
                            {group.label}
                          </h4>
                          <ul className="mt-3.5 space-y-2.5">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-[14.5px] leading-[1.75] text-walnut"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-caramel/70"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Education entry */}
          <article className="reveal reveal-delay-1 grid grid-cols-1 gap-6 pt-11 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="font-serif text-[1.4rem] leading-snug text-espresso">
                {profile.education.period}
              </p>
              <div className="mt-2.5">
                <span className="rounded-full border border-taupe-strong/80 bg-ivory px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                  Education
                </span>
              </div>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 text-caramel" strokeWidth={1.4} />
                <span>{profile.education.location}</span>
              </p>
            </div>

            <div className="lg:col-span-8">
              <h3 className="font-serif text-3xl font-normal leading-tight text-espresso sm:text-[2.2rem]">
                {profile.education.institution}
              </h3>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-caramel-dark">
                {profile.education.program}{' '}
                <span className="font-normal text-muted">
                  · {profile.education.degreeNote}
                </span>
              </p>
            </div>
          </article>
        </div>
        </div>
      </section>
    </div>
  )
}
