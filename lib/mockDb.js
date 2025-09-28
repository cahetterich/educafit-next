// lib/mockDb.js

let _id = 3;

export const users = [
  { id: '1', name: 'Demo Teacher', email: 'teacher@escola.com', role: 'teacher', password: '123456' },
  { id: '2', name: 'Demo Student', email: 'student@escola.com', role: 'student', password: '123456' },
];

export function findUserByEmail(email) {
  return users.find(u => u.email.toLowerCase() === String(email).toLowerCase());
}

export function createUser({ name, email, password, role = 'student' }) {
  if (findUserByEmail(email)) {
    const err = new Error('EMAIL_TAKEN');
    err.code = 'EMAIL_TAKEN';
    throw err;
  }
  const user = { id: String(_id++), name, email, role, password };
  users.push(user);
  return sanitize(user);
}

export function sanitize(user) {
  const { password, ...safe } = user;
  return safe;
}
