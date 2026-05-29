// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export async function POST(request: Request) {
//   try {
//     const { password } = await request.json();
    
//     console.log('Received password:', password); // Debug ke liye
    
//     if (password === process.env.ADMIN_PASSWORD) {
//       // ✅ await lagana zaroori hai
//       const cookieStore = await cookies();
//       cookieStore.set('admin_session', process.env.ADMIN_SECRET!, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         maxAge: 60 * 60 * 24, // 1 day
//         path: '/',
//       });
      
//       return NextResponse.json({ success: true });
//     }
    
//     return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }





import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const res = NextResponse.json({ success: true })
    res.cookies.set('admin_session', process.env.ADMIN_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
      path: '/',
    })

    return res
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}