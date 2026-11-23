export interface ExperienceGroup {
  label: string
  items: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  organizationNote?: string
  period: string
  duration: string
  location: string
  isCurrent?: boolean
  summary?: string
  groups?: ExperienceGroup[]
}

export interface PublicationItem {
  index: string
  title: string
  type: string
  theme: string
  language: string
  url: string | null
}

export interface HonorItem {
  award: string
  event: string
  level: string
  medal: 'gold' | 'bronze'
}

export interface CertificationItem {
  index: string
  title: string
  category: string
}

export const profile = {
  fullName: 'Khansa Fauzia Zahra',
  firstName: 'Khansa',
  monogram: 'K.F.Z.',
  roleShort: 'Corporate Legal & Law Graduate',
  currentPosition: 'Legal at PT Lucas Djaja (PT Phapros Tbk Group)',
  headline:
    'Legal at PT Lucas Djaja (PT Phapros Tbk Group) · Law Graduate of Universitas Pasundan · Ex-Legal Intern at Regional Secretariat of West Java Province',
  heroLead:
    'A detail-oriented Law graduate navigating corporate legal practice, contract management, and regulatory compliance with clarity and rigor.',
  location: 'Bandung, West Java, Indonesia',
  email: '35khansa.kf@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/khansafzr',
  linkedinLabel: 'linkedin.com/in/khansafzr',

  /**
   * Photo & CV slots (leave null for now).
   * To add Khansa's photo later: place the file in `public/images/khansa.jpg`
   * and set `portraitImage: '/images/khansa.jpg'`.
   */
  portraitImage: null as string | null,
  portraitAlt: 'Portrait of Khansa Fauzia Zahra',
  cvUrl: null as string | null,

  practicePillars: [
    'Corporate Law',
    'Contract Review & Management',
    'Legal Drafting',
    'Regulatory Compliance',
    'Litigation Support',
  ],

  summaryParagraphs: [
    'I am a Law graduate from Universitas Pasundan with hands-on experience across corporate legal and litigation. Through these experiences, I have developed practical foundations in legal research, legal drafting, contract review, corporate agreements, and legal documentation, alongside an understanding of regulatory compliance and legal risk considerations.',
    'I am particularly interested in corporate law, contract management, and regulatory compliance. I enjoy exploring different areas of law, learning new perspectives, and applying legal knowledge to practical situations. As a detail-oriented and adaptable individual, I remain eager to learn, refine my craft, and grow professionally.',
  ],

  dossierFacts: [
    { label: 'Current Role', value: 'Legal, PT Lucas Djaja (PT Phapros Tbk Group)' },
    { label: 'Education', value: 'Ilmu Hukum, Universitas Pasundan (2022–2026)' },
    { label: 'Primary Focus', value: 'Corporate Law · Contracts · Compliance' },
    { label: 'Based In', value: 'Bandung, West Java, Indonesia' },
  ],

  skills: {
    topSkills: ['Legal Contract Review', 'Legal Education', 'Public Relations'],
    coreCompetencies: [
      'Corporate Law',
      'Contract Management',
      'Legal Drafting',
      'Corporate Agreements',
      'Regulatory Compliance',
      'Legal Research',
      'Litigation Support',
      'Legal Documentation',
      'Legal Risk Considerations',
    ],
  },

  experiences: [
    {
      id: 'pt-phapros',
      role: 'Legal',
      organization: 'PT Lucas Djaja',
      organizationNote: 'PT Phapros Tbk Group',
      period: 'September 2026 — Present',
      duration: 'Current Role',
      location: 'Bandung, West Java, Indonesia',
      isCurrent: true,
      summary:
        'Serving within the corporate legal function of PT Lucas Djaja under PT Phapros Tbk Group, supporting corporate legal operations, agreements, and regulatory alignment.',
    },
    {
      id: 'setda-jabar',
      role: 'Legal Intern',
      organization: 'Regional Secretariat of West Java Province',
      organizationNote: 'Sekretariat Daerah Provinsi Jawa Barat',
      period: 'July 2025 — October 2025',
      duration: '4 Months',
      location: 'Bandung, West Java, Indonesia',
      groups: [
        {
          label: 'Litigation & Court Proceedings',
          items: [
            'Supported litigation processes by assisting in case preparation, legal documentation, and court proceedings.',
            'Assisted legal officers during court hearings and provided administrative support throughout litigation matters.',
            'Assisted in compiling and reviewing evidentiary documents for court proceedings.',
          ],
        },
        {
          label: 'Legal & Regulatory Drafting',
          items: [
            'Drafted legal documents, including duplik, and organized litigation case files and supporting evidence.',
            'Contributed to the drafting and review of Regional Governor Regulations (Pergub).',
          ],
        },
        {
          label: 'Research & Case Administration',
          items: [
            'Conducted legal research and analysis related to litigation and regulatory issues.',
            'Managed legal databases, case records, and documentation to ensure accurate and efficient case administration.',
            'Prepared legal briefs, presentation materials, and supporting documents for meetings and legal discussions.',
          ],
        },
      ],
    },
  ] as ExperienceItem[],

  education: {
    institution: 'Universitas Pasundan',
    program: 'Ilmu Hukum',
    degreeNote: 'Bachelor of Laws',
    period: '2022 — 2026',
    location: 'Bandung, West Java, Indonesia',
  },

  publications: [
    {
      index: '01',
      title:
        'Persoalan Pelanggaran Kode Etik dan Tanggung Jawab Profesional dalam Profesi Advokat',
      type: 'Academic Journal',
      theme: 'Professional Ethics · Advocate Responsibility',
      language: 'Bahasa Indonesia',
      url: null,
    },
    {
      index: '02',
      title: 'Moralitas Sebagai Fondasi Hukum dalam Pemikiran Aristoteles',
      type: 'Academic Journal',
      theme: 'Legal Philosophy · Aristotelian Jurisprudence',
      language: 'Bahasa Indonesia',
      url: null,
    },
  ] as PublicationItem[],

  honors: [
    {
      award: 'Gold Medalist',
      event: 'National-Level Indonesian Language Olympiad',
      level: 'National Recognition',
      medal: 'gold',
    },
    {
      award: 'Bronze Medalist',
      event: 'National-Level Geography Olympiad',
      level: 'National Recognition',
      medal: 'bronze',
    },
  ] as HonorItem[],

  certifications: [
    {
      index: '01',
      title: 'Workshop Legal Course Essential Skills To Be a Great Lawyers',
      category: 'Legal Practice',
    },
    {
      index: '02',
      title: 'Business Law and Entrepreneurship',
      category: 'Corporate & Business Law',
    },
    {
      index: '03',
      title: 'Pelatihan Legal Drafting',
      category: 'Legal Drafting',
    },
    {
      index: '04',
      title: 'Negotiations and Conflict Management',
      category: 'Dispute & Negotiation',
    },
    {
      index: '05',
      title: 'TOEFL iBT',
      category: 'Language Proficiency',
    },
  ] as CertificationItem[],
} as const
