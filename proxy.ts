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

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

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
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}