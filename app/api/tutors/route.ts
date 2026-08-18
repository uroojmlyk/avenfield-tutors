



// import { NextRequest, NextResponse } from 'next/server'
// import { connectDB } from '@/lib/db'
// import Tutor from '@/lib/models/Tutor'
// import { ensureTutorSlug } from '@/lib/utils/slug'

// export async function GET(req: NextRequest) {
//   try {
//     await connectDB()

//     const { searchParams } = new URL(req.url)

//     const subject = searchParams.get('subject')
//     const limitParam = searchParams.get('limit')

//     const query: Record<string, unknown> = {
//       status: 'approved',
//     }

//     if (subject) {
//       query.subjects = { $in: [subject] }
//     }

//     let tutorQuery = Tutor.find(query).sort({ createdAt: -1 })

//     // Apply limit only if explicitly provided
//     if (limitParam) {
//       tutorQuery = tutorQuery.limit(parseInt(limitParam))
//     }

//     const tutors = await tutorQuery.lean()

//     await Promise.all(
//       tutors.map((t: any) =>
//         t.slug ? Promise.resolve() : ensureTutorSlug(t, Tutor)
//       )
//     )

//     return NextResponse.json(tutors)
//   } catch {
//     return NextResponse.json(
//       { error: 'Failed to fetch tutors' },
//       { status: 500 }
//     )
//   }
// }







import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'
import { ensureTutorSlug } from '@/lib/utils/slug'

export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)

    const subject = searchParams.get('subject')
    const limitParam = searchParams.get('limit')

    const query: Record<string, unknown> = {
      status: 'approved',
    }

    if (subject && subject !== 'All') {
      // Was: query.subjects = { $in: [subject] } — an exact, case-sensitive
      // match against the tagged subjects array only. A tutor whose subjects
      // array said "Maths" (or who only mentioned "Mathematics" in their
      // bio, not the structured subjects field) would never show up for a
      // search of "Mathematics". Escape regex special chars since some
      // subject values contain them (e.g. "CSS / PMS").
      const escaped = subject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const pattern = new RegExp(escaped, 'i')
      query.$or = [
        { subjects: { $elemMatch: { $regex: pattern } } },
        { bio: { $regex: pattern } },
      ]
    }

    let tutorQuery = Tutor.find(query).sort({ createdAt: -1 })

    // Apply limit only if explicitly provided
    if (limitParam) {
      tutorQuery = tutorQuery.limit(parseInt(limitParam))
    }

    const tutors = await tutorQuery.lean()

    await Promise.all(
      tutors.map((t: any) =>
        t.slug ? Promise.resolve() : ensureTutorSlug(t, Tutor)
      )
    )

    return NextResponse.json(tutors)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch tutors' },
      { status: 500 }
    )
  }
}