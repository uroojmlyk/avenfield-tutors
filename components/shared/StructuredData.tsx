


export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    // Educational organization + local tutoring business
    "@type": ["EducationalOrganization", "LocalBusiness"],

    name: "Avenfield Tutors",

    url: "https://avenfieldtutors.com",

    logo: "https://avenfieldtutors.com/avenfieldtutors-newlogo.png",

    image: "https://avenfieldtutors.com/avenfieldtutors-newlogo.png",

    description:
      "Avenfield Tutors provides verified online tutors worldwide and home tutors in Islamabad, Rawalpindi & Lahore for O Level, A Level, IGCSE, IELTS, MDCAT, CSS/PMS and 50+ subjects.",

    email: "avenfieldtutors@gmail.com",

    telephone: "+923095154253",

    foundingDate: "2025",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Islamabad",
      },
      {
        "@type": "City",
        name: "Rawalpindi",
      },
      {
        "@type": "City",
        name: "Lahore",
      },
      "Pakistan",
      "United Arab Emirates",
      "United Kingdom",
    ],

    availableLanguage: ["English", "Urdu"],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923095154253",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },

    sameAs: [
      "https://www.instagram.com/avenfield_tutors/",
      "https://www.facebook.com/avenfieldtutoors/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}