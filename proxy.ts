


// import { NextRequest, NextResponse } from 'next/server'

// export function proxy(req: NextRequest) {
//   const { pathname } = req.nextUrl

//   const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login'
//   const isAdminAPI  = pathname.startsWith('/api/admin') && pathname !== '/api/admin/login'

//   if (isAdminPage || isAdminAPI) {
//     const session = req.cookies.get('admin_session')
//     const valid   = session?.value === process.env.ADMIN_SECRET

//     if (!valid) {
//       if (isAdminPage) {
//         return NextResponse.redirect(new URL('/admin/login', req.url))
//       }
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/admin/:path*', '/api/admin/:path*'],
// }





// import { NextRequest, NextResponse } from 'next/server'

// export function proxy(req: NextRequest) {
//   const { pathname } = req.nextUrl

//   const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login'
//   const isAdminAPI  = pathname.startsWith('/api/admin') && pathname !== '/api/admin/login'

//   if (isAdminPage || isAdminAPI) {
//     const session = req.cookies.get('admin_session')
//     const valid   = session?.value === process.env.ADMIN_SECRET

//     if (!valid) {
//       if (isAdminPage) {
//         return NextResponse.redirect(new URL('/admin/login', req.url))
//       }
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/admin/:path*', '/api/admin/:path*'],
// }





import { NextRequest, NextResponse } from 'next/server'

// Canonical host — must match SITE_URL used everywhere in metadata/sitemap.
// GSC was showing http://www.avenfieldtutors.com indexed as a separate page
// from https://avenfieldtutors.com because nothing in the app was forcing a
// redirect — Vercel's own domain settings weren't catching every variant.
// This 301-redirects any non-canonical host/protocol to the single canonical
// URL, which is what fixes the "Page with redirect" / "Redirect error" /
// duplicate "Alternative page with proper canonical tag" issues in GSC.
const CANONICAL_HOST = 'avenfieldtutors.com'

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get('host') || ''
  const proto = req.headers.get('x-forwarded-proto') || req.nextUrl.protocol.replace(':', '')

  // Only touch requests that are actually for our real domain (apex or www).
  // This must NEVER fire on Vercel preview deployments (*.vercel.app) or
  // localhost, or every preview/dev build would redirect to production.
  const isOurDomain = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`

  const isWrongHost = isOurDomain && host !== CANONICAL_HOST
  const isWrongProto = isOurDomain && proto !== 'https'

  if (isOurDomain && (isWrongHost || isWrongProto)) {
    const canonicalUrl = new URL(`https://${CANONICAL_HOST}${pathname}${search}`)
    return NextResponse.redirect(canonicalUrl, 301)
  }

  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login'
  const isAdminAPI  = pathname.startsWith('/api/admin') && pathname !== '/api/admin/login'

  if (isAdminPage || isAdminAPI) {
    const session = req.cookies.get('admin_session')
    const valid   = session?.value === process.env.ADMIN_SECRET

    if (!valid) {
      if (isAdminPage) {
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|favicon-32x32.png|icon-192.png|apple-touch-icon.png).*)',
  ],
}