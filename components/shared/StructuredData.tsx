// This adds "Organization" structured data so Google understands
// Avenfield Tutors as a real education business (helps with
// knowledge panels, sitelinks, and how the brand shows up in search).

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Avenfield Tutors',
    url: 'https://avenfield-tutors.vercel.app',
    logo: 'https://avenfield-tutors.vercel.app/avenfield.jpeg',
    description:
      'Avenfield Tutors connects students with verified, expert tutors for online and home sessions across Pakistan, UAE & UK. O Level, A Level, IELTS, MDCAT, CSS/PMS and 50+ subjects.',
    areaServed: ['Pakistan', 'United Arab Emirates', 'United Kingdom'],
    sameAs: [
      // Add your real social links here, e.g.:
      // 'https://www.instagram.com/avenfield_tutors',
      // 'https://www.facebook.com/avenfieldtutors',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}