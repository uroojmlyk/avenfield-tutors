// Profile-shaped skeleton so opening a tutor profile feels instant.
export default function Loading() {
  return (
    <div className="bg-[#FFFDF7] min-h-screen px-4 sm:px-6 md:px-8 py-8" aria-busy="true" aria-label="Loading tutor profile">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border-2 border-[#D4D0C5] bg-white p-5 sm:p-7">
          <div className="flex gap-4 mb-6">
            <div className="skeleton w-20 h-20 rounded-2xl" />
            <div className="flex-1 space-y-3 pt-2">
              <div className="skeleton h-6 w-1/2 rounded" />
              <div className="skeleton h-4 w-1/3 rounded" />
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="skeleton h-3.5 w-full rounded" />
            <div className="skeleton h-3.5 w-11/12 rounded" />
            <div className="skeleton h-3.5 w-4/5 rounded" />
          </div>
          <div className="skeleton h-11 w-48 rounded-xl mt-6" />
        </div>
      </div>
    </div>
  )
}