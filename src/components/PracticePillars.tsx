import { profile } from '../data/profile'

export function PracticePillars() {
  return (
    <section aria-label="Core legal focus areas" className="bg-cream py-3">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[28px] border border-taupe/80 bg-linen px-6 py-4 sm:px-8 lg:rounded-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 lg:justify-between">
            {profile.practicePillars.map((pillar, index) => (
              <li
                key={pillar}
                className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-walnut"
              >
                <span>{pillar}</span>
                {index < profile.practicePillars.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1.5 w-1.5 rounded-full bg-caramel/65 lg:inline-block"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
