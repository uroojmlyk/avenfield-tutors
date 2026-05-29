import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Both fields required' }, { status: 400 })
    }

    if (currentPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 401 })
    }

    if (newPassword.length < 6) {
      return NextResponse.json({ error: 'New password must be at least 6 characters' }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      newPassword,
    })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}