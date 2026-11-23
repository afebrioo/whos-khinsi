import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export function ContactFooter() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Fallback: open mailto if clipboard is unavailable
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="bg-linen">
      <footer id="contact" className="rounded-t-[36px] bg-cocoa text-cream sm:rounded-t-[48px]">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:px-8 sm:pt-28 lg:px-10">
          <div className="reveal max-w-2xl">
            <p className="script-accent text-[2.4rem] text-[#D7B397] sm:text-[2.95rem]">
              Let&rsquo;s Connect
            </p>
            <h2 className="mt-1 font-serif text-4xl font-normal leading-[1.12] tracking-[-0.015em] text-cream sm:text-5xl">
              Open to meaningful legal{' '}
              <span className="italic text-[#E2C8B2]">conversations &amp; opportunities.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-[1.85] text-[#CBBAA9]">
              Whether regarding corporate legal collaboration, contract review, regulatory compliance, or academic discussion, feel free to reach out directly.
            </p>
          </div>

          <div className="reveal reveal-delay-1 mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Email card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-cocoa-border bg-cocoa-deep p-7 sm:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89F8B]">
                  Electronic Mail
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 block break-all font-serif text-2xl font-normal text-cream transition-colors hover:text-[#E2C8B2] sm:text-[1.75rem]"
                >
                  {profile.email}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-cocoa-border pt-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-cream bg-cream px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-[#E8DDD0]"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cocoa-border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#E6D6C3] transition-colors hover:border-[#D7B397] hover:text-cream"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#D7B397]" strokeWidth={1.6} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" strokeWidth={1.4} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn & location card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-cocoa-border bg-cocoa-deep p-7 sm:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#B89F8B]">
                  Professional Network
                </p>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block break-all font-serif text-2xl font-normal text-cream transition-colors hover:text-[#E2C8B2] sm:text-[1.75rem]"
                >
                  {profile.linkedinLabel}
                </a>
                <p className="mt-2 text-xs tracking-[0.04em] text-[#B89F8B]">
                  {profile.location}
                </p>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-cocoa-border pt-5">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-link inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#E6D6C3] hover:text-cream"
                >
                  <span>Visit LinkedIn Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom signature bar */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cocoa-border pt-8 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="script-accent text-[1.95rem] text-[#E8D8C5]">
                {profile.fullName}
              </span>
              <span className="text-[11px] tracking-[0.08em] text-[#A88F7B]">
                &copy; 2026 · Bandung, Indonesia
              </span>
            </div>

            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-cocoa-border px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#CBBAA9] transition-colors hover:border-[#D7B397] hover:text-cream"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
