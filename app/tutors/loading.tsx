// Shown instantly while /tutors loads, so clicking a link feels immediate
// instead of freezing on the old page until the server responds.
export default function Loading() {
  return (
    <div className="bg-[#FFFDF7] min-h-screen" aria-busy="true" aria-label="Loading tutors">
      <div className="bg-[#2E4F5E] px-4 sm:px-6 md:px-8 pt-6 pb-6">
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="skeleton h-8 w-3/4 max-w-xl rounded-lg opacity-30" />
          <div className="skeleton h-4 w-full max-w-lg rounded opacity-30" />
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8 py-5">
        <div className="max-w-6xl mx-auto">
          <div className="skeleton h-10 w-full rounded-xl mb-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-[20px] border-[2.5px] border-[#D4D0C5] bg-white p-4 h-[300px]">
                <div className="flex gap-3 mb-4">
                  <div className="skeleton w-[58px] h-[58px] rounded-[14px]" />
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="skeleton h-4 w-2/3 rounded" />
                    <div className="skeleton h-3 w-1/3 rounded" />
                  </div>
                </div>
                <div className="skeleton h-3 w-full rounded mb-2" />
                <div className="skeleton h-3 w-5/6 rounded mb-2" />
                <div className="skeleton h-16 w-full rounded-xl mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}