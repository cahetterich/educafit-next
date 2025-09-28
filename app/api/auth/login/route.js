// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { findUserByEmail, sanitize } from '../../../../lib/mockDb';

export async function POST(req) {
  const { email, pass } = await req.json();

  const u = findUserByEmail(email);
  if (!u || u.password !== pass) {
    return NextResponse.json({ ok: false, error: 'INVALID_CREDENTIALS' }, { status: 401 });
  }
  return NextResponse.json({ ok: true, user: sanitize(u) });
}
