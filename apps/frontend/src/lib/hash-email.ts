import { createHash } from 'node:crypto'

const HASH_ALGORITHM = 'sha256'
const ENCODING = 'hex'

/**
 * Returns a non-reversible hash of the email for use as an analytics identifier.
 * Uses SHA-256; do not use for security (e.g. password hashing).
 */
export function hashEmail(email: string): string {
  const normalized = email.trim().toLowerCase()
  return createHash(HASH_ALGORITHM).update(normalized).digest(ENCODING)
}
