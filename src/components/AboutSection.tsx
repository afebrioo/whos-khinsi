import { profile } from '../data/profile'

export function AboutSection() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="script-accent text-[2.1rem] text-caramel sm:text-[2.4rem]">
            Introduction
          </p>
          <h2 className="mt-1 font-serif text-4xl font-normal leading-[1.1] tracking-[-0.015em] text-espresso sm:text-5xl">
            Grounded in legal rigor,{' '}
            <span className="italic text-caramel-dark">guided by curiosity.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial dossier sheet */}
          <aside className="reveal reveal-delay-1 lg:col-span-5">
            <div className="rounded-[28px] border border-taupe/85 bg-ivory p-7 sm:p-9">
              <div className="flex items-center justify-between border-b border-taupe/80 pb-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
                  Profile Dossier
                </span>
                <span className="font-serif italic text-sm text-caramel">
                  {profile.monogram}
                </span>
              </div>

              <dl className="divide-y divide-taupe/60">
                {profile.dossierFacts.map((fact) => (
                  <div key={fact.label} className="py-4">
                    <dt className="text-[10px] uppercase tracking-[0.24em] text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 font-serif text-[1.22rem] leading-snug text-espresso">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 border-t border-taupe/80 pt-5">
                <p className="font-serif italic text-[1.05rem] leading-relaxed text-walnut">
                  &ldquo;Applying legal knowledge to practical situations with care, adaptability, and continuous growth.&rdquo;
                </p>
              </div>
            </div>
          </aside>

          {/* Narrative & skills */}
          <div className="reveal reveal-delay-2 flex flex-col justify-between lg:col-span-7">
            <div className="space-y-6 text-[15px] leading-[1.9] text-walnut sm:text-[16px]">
              <p className="editorial-dropcap">{profile.summaryParagraphs[0]}</p>
              <p>{profile.summaryParagraphs[1]}</p>
            </div>

            <div className="mt-10 border-t border-taupe/80 pt-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted">
                    Top Skills
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {profile.skills.topSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-caramel/50 bg-linen px-4 py-1.5 text-xs font-medium tracking-[0.03em] text-espresso"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted">
                    Core Legal Competencies
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.skills.coreCompetencies.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-taupe/90 bg-ivory px-4 py-1.5 text-xs tracking-[0.02em] text-walnut"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
