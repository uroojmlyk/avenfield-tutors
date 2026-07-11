



// export default function StructuredData() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",

//     name: "Avenfield Tutors",

//     url: "https://avenfieldtutors.com",

//     logo: "https://avenfieldtutors.com/avenfield.jpeg",

//     image: "https://avenfieldtutors.com/avenfield.jpeg",

//     description:
//       "Avenfield Tutors provides verified online and home tutors across Pakistan, UAE and the UK for O Level, A Level, IGCSE, IELTS, MDCAT, CSS/PMS and 50+ subjects.",

//     email: "avenfieldtutors@gmail.com",

//     telephone: "+923095154253",

//     foundingDate: "2025",

//     areaServed: [
//       "Pakistan",
//       "United Arab Emirates",
//       "United Kingdom"
//     ],

//     availableLanguage: [
//       "English",
//       "Urdu"
//     ],

//     sameAs: [
//       // Add social profiles later
//       // "https://facebook.com/...",
//       // "https://instagram.com/..."
//     ]
//   }

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(jsonLd),
//       }}
//     />
//   )
// }






export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",

    name: "Avenfield Tutors",

    url: "https://avenfieldtutors.com",

    logo: "https://avenfieldtutors.com/avenfieldtutors-newlogo.png",

    image: "https://avenfieldtutors.com/avenfieldtutors-newlogo.png",

    description:
      "Avenfield Tutors provides verified online and home tutors across Pakistan, UAE and the UK for O Level, A Level, IGCSE, IELTS, MDCAT, CSS/PMS and 50+ subjects.",

    email: "avenfieldtutors@gmail.com",

    telephone: "+923095154253",

    foundingDate: "2025",

    areaServed: [
      "Pakistan",
      "United Arab Emirates",
      "United Kingdom"
    ],

    availableLanguage: [
      "English",
      "Urdu"
    ],

    sameAs: [
      // Add social profiles later
      // "https://facebook.com/...",
      // "https://instagram.com/..."
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}