// app/api/users/route.js
import { NextResponse } from 'next/server';
import { users, createUser, sanitize } from '../../lib/mockDb';

export async function GET() {
  return NextResponse.json(users.map(sanitize));
}

export async function POST(req) {
  try {
    const body = await req.json();
    const created = createUser(body);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    if (err.code === 'EMAIL_TAKEN') {
      return NextResponse.json({ error: 'EMAIL_TAKEN' }, { status: 409 });
    }
    return NextResponse.json({ error: 'UNKNOWN' }, { status: 500 });
  }
}
