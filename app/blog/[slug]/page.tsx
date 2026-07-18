
// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { blogPosts, getBlogPost } from '@/lib/blog-posts'
// import BlogShare from '@/components/shared/BlogShare'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

// // Turns a heading into a URL-safe anchor id
// function headingToId(heading: string): string {
//   return heading
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .trim()
//     .replace(/\s+/g, '-')
// }

// interface Props {
//   params: Promise<{ slug: string }>
// }

// // Pre-builds every post page at build time
// export function generateStaticParams() {
//   return blogPosts.map(post => ({ slug: post.slug }))
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params
//   const post = getBlogPost(slug)
//   if (!post) return { title: 'Post Not Found' }

//   const url = `${SITE_URL}/blog/${slug}`

//   return {
//     title: `${post.title} | Avenfield Tutors Blog`,
//     description: post.excerpt,
//     keywords: [post.category, 'tutoring tips', 'exam preparation', 'online tutors Pakistan', 'home tutors Pakistan', post.title],
//     alternates: { canonical: url },
//     openGraph: {
//       title: `${post.title} | Avenfield Tutors Blog`,
//       description: post.excerpt,
//       type: 'article',
//       url,
//       siteName: 'Avenfield Tutors',
//       publishedTime: post.date,
//       images: [{ url: `${SITE_URL}/avenfieldtutors-newlogo.png`, width: 1200, height: 630, alt: post.title }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.excerpt,
//     },
//   }
// }

// function Eyebrow({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-2 mb-3" aria-hidden="true">
//       <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#E05C42]" />
//       <span className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#E05C42]">{text}</span>
//       <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#E05C42]" />
//     </div>
//   )
// }

// function ArticleSchema({ post, slug }: { post: NonNullable<ReturnType<typeof getBlogPost>>; slug: string }) {
//   const url = `${SITE_URL}/blog/${slug}`
//   const articleSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     headline: post.title,
//     description: post.excerpt,
//     datePublished: post.date,
//     dateModified: post.date,
//     author: { '@type': 'Organization', name: 'Avenfield Tutors' },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Avenfield Tutors',
//       logo: { '@type': 'ImageObject', url: `${SITE_URL}/avenfieldtutors-newlogo.png` },
//     },
//     mainEntityOfPage: { '@type': 'WebPage', '@id': url },
//     image: `${SITE_URL}/avenfieldtutors-newlogo.png`,
//   }
//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
//       { '@type': 'ListItem', position: 3, name: post.title, item: url },
//     ],
//   }
//   const faqSchema = post.faqs.length > 0 ? {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: post.faqs.map(f => ({
//       '@type': 'Question',
//       name: f.q,
//       acceptedAnswer: { '@type': 'Answer', text: f.a },
//     })),
//   } : null
//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
//       {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
//     </>
//   )
// }

// export default async function BlogPostPage({ params }: Props) {
//   const { slug } = await params
//   const post = getBlogPost(slug)
//   if (!post) notFound()

//   const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <ArticleSchema post={post} slug={slug} />

//       {/* ── HERO ── */}
//       <div className="bg-[#2E4F5E] pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden">
//         <div aria-hidden="true" className="absolute top-0 right-0 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full opacity-20 pointer-events-none"
//           style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />

//         <div className="max-w-3xl mx-auto relative">
//           <Link href="/blog"
//             className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-[0.82rem] mb-7 transition-colors group font-bold">
//             <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to blog
//           </Link>

//           <span className="inline-block px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.62rem] font-black rounded-full border border-[#2E4F5E] mb-4">
//             {post.category}
//           </span>
//           <h1 className="text-white text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4">
//             {post.title}
//           </h1>

//           <div className="flex items-center justify-between flex-wrap gap-3">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-[#E8C86A] border-2 border-white/30 flex items-center justify-center flex-shrink-0">
//                 <span className="text-[#2E4F5E] font-black text-[0.85rem]">AT</span>
//               </div>
//               <div className="text-[0.78rem] font-bold text-[#7da8b8]">
//                 <p className="text-white font-black">Avenfield Tutors Team</p>
//                 <div className="flex items-center gap-2">
//                   <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
//                   <span aria-hidden="true">·</span>
//                   <span>{post.readTime}</span>
//                 </div>
//               </div>
//             </div>
//             <BlogShare url={`${SITE_URL}/blog/${slug}`} title={post.title} />
//           </div>
//         </div>
//       </div>

//       {/* ── TABLE OF CONTENTS ── */}
//       <div className="max-w-3xl mx-auto px-4 sm:px-8 -mt-8 relative z-10">
//         <nav aria-label="Table of contents" className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//           <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#E05C42] mb-3">In This Article</p>
//           <ol className="space-y-1.5">
//             {post.sections.map((section, i) => (
//               <li key={i}>
//                 <a href={`#${headingToId(section.heading)}`}
//                   className="flex items-start gap-2 text-[0.82rem] font-bold text-[#4a6a78] hover:text-[#E05C42] transition-colors no-underline">
//                   <span className="text-[#E8C86A] font-black flex-shrink-0">{i + 1}.</span>
//                   {section.heading}
//                 </a>
//               </li>
//             ))}
//             {post.faqs.length > 0 && (
//               <li>
//                 <a href="#faqs"
//                   className="flex items-start gap-2 text-[0.82rem] font-bold text-[#4a6a78] hover:text-[#E05C42] transition-colors no-underline">
//                   <span className="text-[#E8C86A] font-black flex-shrink-0">{post.sections.length + 1}.</span>
//                   Frequently Asked Questions
//                 </a>
//               </li>
//             )}
//           </ol>
//         </nav>
//       </div>

//       {/* ── ARTICLE BODY ── */}
//       <div className="max-w-3xl mx-auto px-4 sm:px-8 pb-10 sm:pb-14 pt-6">
//         <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 space-y-8">
//           {post.sections.map((section, i) => (
//             <div key={i} id={headingToId(section.heading)} className="scroll-mt-24">
//               <h2 className="text-[#2E4F5E] font-black text-[1.15rem] sm:text-[1.3rem] mb-3">
//                 {section.heading}
//               </h2>
//               <div className="space-y-3">
//                 {section.paragraphs.map((p, j) => (
//                   <p key={j} className="text-[#4a6a78] text-[0.92rem] leading-relaxed font-semibold">
//                     {p}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── RELATED SUBJECTS ── */}
//         {post.relatedSubjects.length > 0 && (
//           <div className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
//             <Eyebrow text="Find Tutors for These Subjects" />
//             <p className="text-[#4a6a78] text-[0.85rem] font-semibold mb-4">
//               Looking for expert tutoring in these subjects?
//             </p>
//             <div className="flex flex-wrap gap-2.5">
//               {post.relatedSubjects.map(s => (
//                 <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
//                   className="px-3.5 py-2 bg-[#E8C86A] text-[#2E4F5E] text-[0.78rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] no-underline hover:opacity-90 transition-opacity">
//                   {s} Tutors →
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ── FAQ ── */}
//         {post.faqs.length > 0 && (
//           <div id="faqs" className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 scroll-mt-24">
//             <Eyebrow text="Frequently Asked Questions" />
//             <div className="space-y-4">
//               {post.faqs.map((faq, i) => (
//                 <details key={i} className="group border-2 border-[#D4D0C5] rounded-xl overflow-hidden">
//                   <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                     <span className="text-[0.85rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
//                     <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-xs transition-transform group-open:rotate-180">▼</span>
//                   </summary>
//                   <div className="px-4 pb-4 pt-1">
//                     <p className="text-[#4a6a78] text-[0.85rem] leading-relaxed font-semibold">{faq.a}</p>
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ── INTERNAL LINKING ── */}
//         <div className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
//           <Eyebrow text="Explore More" />
//           <div className="grid sm:grid-cols-2 gap-3">
//             <Link href="/tutors" className="group flex items-center gap-3 p-3 rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] transition-colors no-underline">
//               <span className="text-2xl">👨‍🏫</span>
//               <div>
//                 <p className="text-[#2E4F5E] font-black text-[0.85rem] group-hover:text-[#3A9E8F] transition-colors">Browse All Tutors</p>
//                 <p className="text-[#7da8b8] text-[0.65rem] font-bold">Find verified tutors for any subject</p>
//               </div>
//             </Link>
//             <Link href="/become-tutor" className="group flex items-center gap-3 p-3 rounded-xl border-2 border-[#D4D0C5] hover:border-[#E8C86A] transition-colors no-underline">
//               <span className="text-2xl">🎓</span>
//               <div>
//                 <p className="text-[#2E4F5E] font-black text-[0.85rem] group-hover:text-[#E8C86A] transition-colors">Become a Tutor</p>
//                 <p className="text-[#7da8b8] text-[0.65rem] font-bold">Share your knowledge with students</p>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* ── CTA ── */}
//         <div className="mt-8 bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 text-center">
//           <p className="text-white font-black text-[1.1rem] mb-2">Ready to put this into practice?</p>
//           <p className="text-[#c5e8e3] text-[0.85rem] font-semibold mb-5 max-w-md mx-auto">
//             Browse verified tutors on Avenfield and book your first session via WhatsApp – no long forms, no waiting.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <Link href="/tutors"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//               Find a Tutor Now →
//             </Link>
//             <Link href="/become-tutor"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all no-underline">
//               Become a Tutor
//             </Link>
//           </div>
//         </div>

//         {/* ── OTHER POSTS ── */}
//         {otherPosts.length > 0 && (
//           <div className="mt-10">
//             <Eyebrow text="Keep Reading" />
//             <div className="grid sm:grid-cols-3 gap-4">
//               {otherPosts.map(p => (
//                 <Link key={p.slug} href={`/blog/${p.slug}`}
//                   className="bg-white rounded-xl border-2 border-[#D4D0C5] hover:border-[#E8C86A] transition-colors p-4 no-underline">
//                   <p className="text-[#2E4F5E] font-black text-[0.85rem] leading-snug">{p.title}</p>
//                   <p className="text-[#7da8b8] text-[0.68rem] font-bold mt-1.5">{p.readTime}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }





import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/lib/blog-posts'
import BlogShare from '@/components/shared/BlogShare'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

// Turns a heading into a URL-safe anchor id
function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

interface Props {
  params: Promise<{ slug: string }>
}

// Pre-builds every post page at build time
export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: 'Post Not Found' }

  const url = `${SITE_URL}/blog/${slug}`

  return {
    title: `${post.title} | Avenfield Tutors Blog`,
    description: post.excerpt,
    keywords: [post.category, 'tutoring tips', 'exam preparation', 'online tutors Pakistan', 'home tutors Pakistan', post.title],
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Avenfield Tutors Blog`,
      description: post.excerpt,
      type: 'article',
      url,
      siteName: 'Avenfield Tutors',
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}/avenfieldtutors-newlogo.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function Eyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3" aria-hidden="true">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#E05C42]" />
      <span className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#E05C42]">{text}</span>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#E05C42]" />
    </div>
  )
}

function ArticleSchema({ post, slug }: { post: NonNullable<ReturnType<typeof getBlogPost>>; slug: string }) {
  const url = `${SITE_URL}/blog/${slug}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Avenfield Tutors' },
    publisher: {
      '@type': 'Organization',
      name: 'Avenfield Tutors',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/avenfieldtutors-newlogo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/avenfieldtutors-newlogo.png`,
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }
  const faqSchema = post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <ArticleSchema post={post} slug={slug} />

      {/* ── HERO ── */}
      <div className="bg-[#2E4F5E] pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />

        <div className="max-w-3xl mx-auto relative">
          <Link href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-[0.82rem] mb-7 transition-colors group font-bold">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <span className="inline-block px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.62rem] font-black rounded-full border border-[#2E4F5E] mb-4">
            {post.category}
          </span>
          <h1 className="text-white text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E8C86A] border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[#2E4F5E] font-black text-[0.85rem]">AT</span>
              </div>
              <div className="text-[0.78rem] font-bold text-[#7da8b8]">
                <p className="text-white font-black">Avenfield Tutors Team</p>
                <div className="flex items-center gap-2">
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <BlogShare url={`${SITE_URL}/blog/${slug}`} title={post.title} />
          </div>
        </div>
      </div>

      {/* ── TABLE OF CONTENTS ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 -mt-8 relative z-10">
        <nav aria-label="Table of contents" className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#E05C42] mb-3">In This Article</p>
          <ol className="space-y-1.5">
            {post.sections.map((section, i) => (
              <li key={i}>
                <a href={`#${headingToId(section.heading)}`}
                  className="flex items-start gap-2 text-[0.82rem] font-bold text-[#4a6a78] hover:text-[#E05C42] transition-colors no-underline">
                  <span className="text-[#E8C86A] font-black flex-shrink-0">{i + 1}.</span>
                  {section.heading}
                </a>
              </li>
            ))}
            {post.faqs.length > 0 && (
              <li>
                <a href="#faqs"
                  className="flex items-start gap-2 text-[0.82rem] font-bold text-[#4a6a78] hover:text-[#E05C42] transition-colors no-underline">
                  <span className="text-[#E8C86A] font-black flex-shrink-0">{post.sections.length + 1}.</span>
                  Frequently Asked Questions
                </a>
              </li>
            )}
          </ol>
        </nav>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 pb-10 sm:pb-14 pt-6">
        <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 space-y-8">
          {post.sections.map((section, i) => (
            <div key={i} id={headingToId(section.heading)} className="scroll-mt-24">
              <h2 className="text-[#2E4F5E] font-black text-[1.15rem] sm:text-[1.3rem] mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-[#4a6a78] text-[0.92rem] leading-relaxed font-semibold"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── RELATED SUBJECTS ── */}
        {post.relatedSubjects.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
            <Eyebrow text="Find Tutors for These Subjects" />
            <p className="text-[#4a6a78] text-[0.85rem] font-semibold mb-4">
              Looking for expert tutoring in these subjects?
            </p>
            <div className="flex flex-wrap gap-2.5">
              {post.relatedSubjects.map(s => (
                <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                  className="px-3.5 py-2 bg-[#E8C86A] text-[#2E4F5E] text-[0.78rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] no-underline hover:opacity-90 transition-opacity">
                  {s} Tutors →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── FAQ ── */}
        {post.faqs.length > 0 && (
          <div id="faqs" className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 scroll-mt-24">
            <Eyebrow text="Frequently Asked Questions" />
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <details key={i} className="group border-2 border-[#D4D0C5] rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                    <span className="text-[0.85rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-xs transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-[#4a6a78] text-[0.85rem] leading-relaxed font-semibold">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* ── INTERNAL LINKING ── */}
        <div className="mt-8 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
          <Eyebrow text="Explore More" />
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/tutors" className="group flex items-center gap-3 p-3 rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] transition-colors no-underline">
              <span className="text-2xl">👨‍🏫</span>
              <div>
                <p className="text-[#2E4F5E] font-black text-[0.85rem] group-hover:text-[#3A9E8F] transition-colors">Browse All Tutors</p>
                <p className="text-[#7da8b8] text-[0.65rem] font-bold">Find verified tutors for any subject</p>
              </div>
            </Link>
            <Link href="/become-tutor" className="group flex items-center gap-3 p-3 rounded-xl border-2 border-[#D4D0C5] hover:border-[#E8C86A] transition-colors no-underline">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="text-[#2E4F5E] font-black text-[0.85rem] group-hover:text-[#E8C86A] transition-colors">Become a Tutor</p>
                <p className="text-[#7da8b8] text-[0.65rem] font-bold">Share your knowledge with students</p>
              </div>
            </Link>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-8 bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 text-center">
          <p className="text-white font-black text-[1.1rem] mb-2">Ready to put this into practice?</p>
          <p className="text-[#c5e8e3] text-[0.85rem] font-semibold mb-5 max-w-md mx-auto">
            Browse verified tutors on Avenfield and book your first session via WhatsApp – no long forms, no waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/tutors"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
              Find a Tutor Now →
            </Link>
            <Link href="/become-tutor"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all no-underline">
              Become a Tutor
            </Link>
          </div>
        </div>

        {/* ── OTHER POSTS ── */}
        {otherPosts.length > 0 && (
          <div className="mt-10">
            <Eyebrow text="Keep Reading" />
            <div className="grid sm:grid-cols-3 gap-4">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl border-2 border-[#D4D0C5] hover:border-[#E8C86A] transition-colors p-4 no-underline">
                  <p className="text-[#2E4F5E] font-black text-[0.85rem] leading-snug">{p.title}</p>
                  <p className="text-[#7da8b8] text-[0.68rem] font-bold mt-1.5">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}