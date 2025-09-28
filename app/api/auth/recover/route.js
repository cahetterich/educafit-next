// app/api/auth/recover/route.js
import { NextResponse } from 'next/server';
import { findUserByEmail } from '../../../../lib/mockDb';

export async function POST(req) {
  const { email } = await req.json();
  
  const _ = findUserByEmail(email);
  
  return NextResponse.json({ ok: true });
}
