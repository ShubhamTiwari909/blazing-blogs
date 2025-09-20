import { randomBytes } from 'crypto';

/**
 * Generate a cryptographically-strong random passkey.
 *
 * @param bytes Number of random bytes (32 bytes ≈ 256 bits). Use ≥16.
 * @param encoding "base64url" (default) | "hex"
 */
export function generatePasskey(bytes = 32, encoding: 'base64url' | 'hex' = 'base64url'): string {
  const buf = randomBytes(bytes);
  return encoding === 'hex' ? buf.toString('hex') : buf.toString('base64url'); // URL-safe, no padding
}
