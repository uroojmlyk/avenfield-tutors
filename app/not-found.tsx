import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="bg-[#FFFDF7] min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-24"
    >
      <div className="max-w-lg w-full text-center">
        <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#C43D24] mb-3">
          Page Not Found
        </p>

        <h1
          id="not-found-heading"
          className="text-[3.5rem] sm:text-[4.5rem] font-black text-[#2E4F5E] leading-none mb-2"
        >
          404
        </h1>

        <h2 className="text-[1.3rem] sm:text-[1.6rem] font-black text-[#2E4F5E] mb-4">
          This page has wandered off somewhere
        </h2>

        <p className="text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] font-semibold leading-relaxed mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or may have moved. Let us help you find a
          verified tutor or get back to browsing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            aria-label="Go back to the Avenfield Tutors homepage"
            className="px-6 py-3 bg-[#c94e37] hover:bg-[#a83c2a] text-white text-[0.9rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/tutors"
            aria-label="Browse all verified online and home tutors at Avenfield Tutors"
            className="px-6 py-3 bg-white hover:bg-[#FFFDF7] text-[#2E4F5E] text-[0.9rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] transition-colors"
          >
            Find My Tutor
          </Link>
        </div>

        <p className="text-[#7da8b8] text-[0.78rem] font-semibold mt-8">
          Or explore{' '}
          <Link href="/blog" className="text-[#2c7d70] underline underline-offset-2">
            our guides
          </Link>{' '}
          or{' '}
          <Link href="/contact" className="text-[#2c7d70] underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      </div>
    </section>
  )
}