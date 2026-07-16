


// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { blogPosts } from '@/lib/blog-posts'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

// export const metadata: Metadata = {
//   title: 'Blog — Tutoring Tips, Exam Prep & Study Guides',
//   description:
//     'Practical advice on choosing a tutor, exam preparation, and getting the most out of online and home tuition from the Avenfield Tutors team.',
//   keywords: [
//     'tutoring blog', 'exam preparation tips', 'how to choose a tutor',
//     'O Level study guide', 'IELTS tips', 'home tuition advice',
//   ],
//   openGraph: {
//     title: 'Blog | Avenfield Tutors',
//     description: 'Practical advice on tutoring, exam prep, and study strategies.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url: `${SITE_URL}/blog`,
//     images: [{ url: `${SITE_URL}/avenfieldtutors-newlogo.png`, width: 1200, height: 630, alt: 'Avenfield Tutors Blog' }],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Blog | Avenfield Tutors',
//     description: 'Practical advice on tutoring, exam prep, and study strategies.',
//   },
//   alternates: {
//     canonical: `${SITE_URL}/blog`,
//   },
// }

// const categoryColors: Record<string, string> = {
//   'Choosing a Tutor':   'bg-[#E8C86A] text-[#2E4F5E]',
//   'Learning Formats':   'bg-[#3A9E8F] text-white',
//   'Exam Preparation':   'bg-[#E05C42] text-white',
//   'Curriculum Choices': 'bg-[#E8934A] text-white',
// }

// function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//       <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//     </div>
//   )
// }

// function Wiggle({ color = '#E8C86A' }: { color?: string }) {
//   return (
//     <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
//       <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
//     </svg>
//   )
// }

// function formatDate(d: string) {
//   return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
// }

// function BreadcrumbSchema() {
//   const schema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
//     ],
//   }
//   return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
// }

// export default function BlogPage() {
//   const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//   const [featured, ...rest] = sorted
//   const categories = Array.from(new Set(blogPosts.map(p => p.category)))

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <BreadcrumbSchema />

//       <div className="bg-[#FFFDF7] min-h-screen">
//         {/* ── HERO ── */}
//         <section className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
//           <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
//           <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
//           <div aria-hidden="true"
//             className="absolute inset-0 opacity-[0.04]"
//             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

//           <div className="relative max-w-3xl mx-auto text-center">
//             <Eyebrow text="From Our Team" light center />
//             <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
//               Avenfield{' '}
//               <span className="relative inline-block text-[#E8C86A]">
//                 <span className="relative z-10">Blog</span>
//                 <Wiggle color="#E05C42" />
//               </span>
//             </h1>
//             <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg mx-auto">
//               Practical, no-fluff advice on choosing a tutor, exam preparation, and getting the most out of your learning.
//             </p>
//           </div>
//         </section>

//         {/* ── CATEGORY CHIPS ── */}
//         <section className="px-4 sm:px-8 -mt-6 relative z-10">
//           <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
//             {categories.map(cat => (
//               <span key={cat} className={`px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] ${categoryColors[cat] || 'bg-white text-[#2E4F5E]'}`}>
//                 {cat}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* ── FEATURED POST ── */}
//         {featured && (
//           <section className="py-10 sm:py-12 px-4 sm:px-8">
//             <div className="max-w-5xl mx-auto">
//               <Link
//                 href={`/blog/${featured.slug}`}
//                 className="group block bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] hover:shadow-[3px_3px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 overflow-hidden no-underline"
//               >
//                 <div className="h-2 bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />
//                 <div className="p-6 sm:p-8">
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className={`px-2.5 py-1 text-[0.62rem] font-black rounded-full border border-[#2E4F5E] ${categoryColors[featured.category] || 'bg-[#E8C86A] text-[#2E4F5E]'}`}>
//                       {featured.category}
//                     </span>
//                     <span className="text-[0.68rem] font-black text-[#E05C42] uppercase tracking-wide">Latest</span>
//                   </div>
//                   <h2 className="text-[#2E4F5E] font-black text-[1.3rem] sm:text-[1.6rem] leading-snug mb-3 group-hover:text-[#3A9E8F] transition-colors">
//                     {featured.title}
//                   </h2>
//                   <p className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] font-semibold leading-relaxed mb-4 max-w-2xl">
//                     {featured.excerpt}
//                   </p>
//                   <div className="flex items-center gap-4 text-[0.72rem] font-bold text-[#7da8b8]">
//                     <span>{formatDate(featured.date)}</span>
//                     <span aria-hidden="true">·</span>
//                     <span>{featured.readTime}</span>
//                     <span aria-hidden="true">·</span>
//                     <span className="text-[#E05C42] font-black">Read article →</span>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </section>
//         )}

//         {/* ── REMAINING POSTS GRID ── */}
//         {rest.length > 0 && (
//           <section className="pb-14 sm:pb-16 px-4 sm:px-8">
//             <div className="max-w-5xl mx-auto">
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
//                 <h3 className="font-black text-[1rem] text-[#2E4F5E]">More Articles</h3>
//               </div>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                 {rest.map(post => (
//                   <Link
//                     key={post.slug}
//                     href={`/blog/${post.slug}`}
//                     className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-5 flex flex-col no-underline"
//                   >
//                     <span className={`inline-block px-2.5 py-1 text-[0.62rem] font-black rounded-full border border-[#2E4F5E] mb-3 self-start ${categoryColors[post.category] || 'bg-[#E8C86A] text-[#2E4F5E]'}`}>
//                       {post.category}
//                     </span>
//                     <h3 className="text-[#2E4F5E] font-black text-[1.05rem] leading-snug mb-2">
//                       {post.title}
//                     </h3>
//                     <p className="text-[#4a6a78] text-[0.8rem] font-semibold leading-relaxed mb-4 flex-1">
//                       {post.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between text-[0.68rem] font-bold text-[#7da8b8] pt-3 border-t border-[#D4D0C5]">
//                       <span>{formatDate(post.date)}</span>
//                       <span>{post.readTime}</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ── CTA ── */}
//         <section className="pb-14 px-4 sm:px-8">
//           <div className="max-w-5xl mx-auto bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-[#2E4F5E] font-black text-[0.9rem] text-center sm:text-left">
//               Ready to find a tutor instead of just reading about it?
//             </p>
//             <Link href="/tutors"
//               className="flex-shrink-0 px-5 py-2.5 bg-[#2E4F5E] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#1a3240] hover:shadow-[0_1px_0_0_#1a3240] hover:translate-y-[2px] transition-all">
//               Browse Tutors →
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }





import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

export const metadata: Metadata = {
  title: 'Tutoring Tips & Exam Preparation Guide | Avenfield Tutors Blog',
  description:
    'Expert advice on finding the best online and home tutors in Pakistan. Learn effective exam preparation strategies for O Level, A Level, IELTS, MDCAT, CSS and more.',
  keywords: [
    'tutoring tips Pakistan',
    'exam preparation guide',
    'how to choose a tutor',
    'online tutoring advice',
    'home tuition tips',
    'O Level study guide',
    'A Level preparation',
    'IELTS tips',
    'MDCAT preparation',
    'CSS exam guide',
    'study tips for students',
    'academic success tips',
  ],
  openGraph: {
    title: 'Tutoring Tips & Exam Preparation Guide | Avenfield Tutors',
    description: 'Expert advice on finding the best tutors and preparing for exams in Pakistan.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/avenfieldtutors-newlogo.png`, width: 1200, height: 630, alt: 'Avenfield Tutors Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tutoring Tips & Exam Preparation Guide | Avenfield Tutors',
    description: 'Expert advice on finding the best tutors and preparing for exams in Pakistan.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

// Blog Schema for listing page
function BlogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Avenfield Tutors Blog',
    description: 'Expert tutoring tips, exam preparation guides, and study advice for students in Pakistan and worldwide.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Avenfield Tutors',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

const categoryColors: Record<string, string> = {
  'Choosing a Tutor':   'bg-[#E8C86A] text-[#2E4F5E]',
  'Learning Formats':   'bg-[#3A9E8F] text-white',
  'Exam Preparation':   'bg-[#E05C42] text-white',
  'Curriculum Choices': 'bg-[#E8934A] text-white',
}

function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const [featured, ...rest] = sorted
  const categories = Array.from(new Set(blogPosts.map(p => p.category)))

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <BlogSchema />
      <BreadcrumbSchema />

      <div className="bg-[#FFFDF7] min-h-screen">
        {/* ── HERO ── */}
        <section className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
          <div aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative max-w-3xl mx-auto text-center">
            <Eyebrow text="From Our Team" light center />
            <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
              Avenfield{' '}
              <span className="relative inline-block text-[#E8C86A]">
                <span className="relative z-10">Blog</span>
                <Wiggle color="#E05C42" />
              </span>
            </h1>
            <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg mx-auto">
              Practical advice on finding the best online and home tutors in Pakistan, exam preparation strategies for O Level, A Level, IELTS, MDCAT, CSS, and more.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-[0.7rem] text-[#7da8b8] font-semibold">
              <span>📚 50+ Subjects</span>
              <span className="w-px h-4 bg-[#7da8b8]/30" />
              <span>🎓 Exam Prep Guides</span>
              <span className="w-px h-4 bg-[#7da8b8]/30" />
              <span>💡 Tutoring Tips</span>
            </div>
          </div>
        </section>

        {/* ── CATEGORY CHIPS ── */}
        <section className="px-4 sm:px-8 -mt-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] bg-[#2E4F5E] text-white">
              All Posts
            </span>
            {categories.map(cat => (
              <span key={cat} className={`px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] ${categoryColors[cat] || 'bg-white text-[#2E4F5E]'}`}>
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        {featured && (
          <section className="py-10 sm:py-12 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
              <Link
                href={`/blog/${featured.slug}`}
                className="group block bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] hover:shadow-[3px_3px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 overflow-hidden no-underline"
              >
                <div className="h-2 bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-1 text-[0.62rem] font-black rounded-full border border-[#2E4F5E] ${categoryColors[featured.category] || 'bg-[#E8C86A] text-[#2E4F5E]'}`}>
                      {featured.category}
                    </span>
                    <span className="text-[0.68rem] font-black text-[#E05C42] uppercase tracking-wide">Featured</span>
                  </div>
                  <h2 className="text-[#2E4F5E] font-black text-[1.3rem] sm:text-[1.6rem] leading-snug mb-3 group-hover:text-[#3A9E8F] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] font-semibold leading-relaxed mb-4 max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[0.72rem] font-bold text-[#7da8b8]">
                    <span>{formatDate(featured.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featured.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#E05C42] font-black">Read article →</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── REMAINING POSTS GRID ── */}
        {rest.length > 0 && (
          <section className="pb-14 sm:pb-16 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
                <h2 className="font-black text-[1rem] text-[#2E4F5E]">More Articles</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {rest.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-5 flex flex-col no-underline"
                  >
                    <span className={`inline-block px-2.5 py-1 text-[0.62rem] font-black rounded-full border border-[#2E4F5E] mb-3 self-start ${categoryColors[post.category] || 'bg-[#E8C86A] text-[#2E4F5E]'}`}>
                      {post.category}
                    </span>
                    <h3 className="text-[#2E4F5E] font-black text-[1.05rem] leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[#4a6a78] text-[0.8rem] font-semibold leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-[0.68rem] font-bold text-[#7da8b8] pt-3 border-t border-[#D4D0C5]">
                      <span>{formatDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── SEO CONTENT BLOCK ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-10">
          <div className="bg-white rounded-2xl border-2 border-[#E8C86A] shadow-[4px_4px_0_0_#E8C86A] p-6 sm:p-8">
            <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
              <span>📖</span>
              Why Read the Avenfield Tutors Blog?
            </h2>
            <div className="space-y-4 text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] leading-[1.8] font-semibold">
              <p>
                <strong className="text-[#2E4F5E]">Expert tutoring tips and exam strategies</strong> – Our blog is designed to help students, parents, and educators navigate the world of <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> and <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">home tuition</Link> in Pakistan. Whether you're preparing for <Link href="/tutors?subject=O%20Level" className="text-[#E05C42] hover:underline font-black">O Level</Link>, <Link href="/tutors?subject=A%20Level" className="text-[#E05C42] hover:underline font-black">A Level</Link>, <Link href="/tutors?subject=IELTS" className="text-[#E05C42] hover:underline font-black">IELTS</Link>, <Link href="/tutors?subject=MDCAT" className="text-[#E05C42} hover:underline font-black">MDCAT</Link>, or <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#E05C42} hover:underline font-black">CSS</Link>, our expert guides provide actionable advice to help you succeed.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Choosing the right tutor</strong> – Finding the perfect tutor can be challenging. Our articles cover everything from how to evaluate a tutor's qualifications to understanding different <Link href="/tutors" className="text-[#E05C42} hover:underline font-black">learning formats</Link> – online tuition vs. home tuition – and which one works best for your needs.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Exam preparation strategies</strong> – We share proven study techniques, time management tips, and subject-specific advice to help you ace your exams. From <Link href="/tutors?subject=Mathematics" className="text-[#E05C42} hover:underline font-black">Mathematics</Link> and <Link href="/tutors?subject=Physics" className="text-[#E05C42} hover:underline font-black">Physics</Link> to <Link href="/tutors?subject=English" className="text-[#E05C42} hover:underline font-black">English</Link> and <Link href="/tutors?subject=Computer%20Science" className="text-[#E05C42} hover:underline font-black">Computer Science</Link>, our blog covers a wide range of subjects and curricula including IGCSE, GCSE, CAIE, Edexcel, and local Pakistani boards.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Real stories from real students</strong> – Learn from the experiences of other students and parents who have navigated the tutoring journey. Their insights and recommendations can help you make informed decisions about your own learning path.
              </p>
              <p className="text-[0.8rem] text-[#7da8b8]">
                <span>📌 </span>
                Looking for a tutor? <Link href="/tutors" className="text-[#E05C42} hover:underline font-black">Browse our verified tutors</Link> or <Link href="/become-tutor" className="text-[#E05C42} hover:underline font-black">apply to become a tutor</Link> today.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pb-14 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#2E4F5E] font-black text-[0.9rem] text-center sm:text-left">
              Ready to find a tutor instead of just reading about it?
            </p>
            <Link href="/tutors"
              className="flex-shrink-0 px-5 py-2.5 bg-[#2E4F5E] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#1a3240] hover:shadow-[0_1px_0_0_#1a3240] hover:translate-y-[2px] transition-all">
              Browse Tutors →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}