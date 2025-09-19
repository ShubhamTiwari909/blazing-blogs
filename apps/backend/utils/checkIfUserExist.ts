import { Users } from '../schemas/Users.js';

export async function checkIfUserExists(email: string) {
  return await Users.findOne({ email }).select('_id passkey').lean();
}

export async function checkIfUserExistsById(id: string | undefined) {
  return !!(await Users.findOne({ id }).select('_id').lean());
}
