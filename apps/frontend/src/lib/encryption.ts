// Browser-compatible crypto using Web Crypto API
const ALGORITHM = 'AES-CBC'
const IV_LENGTH = 16 // 16 bytes for AES

/**
 * Encrypts a plaintext string with a secret key.
 * @param {string} text - The text to encrypt.
 * @param {string} key - Secret key.
 * @returns {Promise<string>} Base64 encoded cipher.
 */
export async function encrypt(text: string, key: string): Promise<string> {
  // Derive key from password
  const keyBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key))
  const cryptoKey = await crypto.subtle.importKey('raw', keyBuffer, ALGORITHM, false, ['encrypt'])

  // Generate deterministic IV from text + key (same input = same IV)
  const ivSource = text + key
  const ivBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ivSource))
  const iv = new Uint8Array(ivBuffer).slice(0, IV_LENGTH)

  // Encrypt
  const encrypted = await crypto.subtle.encrypt(
    { name: ALGORITHM, iv },
    cryptoKey,
    new TextEncoder().encode(text),
  )

  // Combine IV and encrypted data
  const combined = new Uint8Array(iv.length + encrypted.byteLength)
  combined.set(iv)
  combined.set(new Uint8Array(encrypted), iv.length)

  return btoa(String.fromCharCode(...combined))
}

/**
 * Decrypts a cipher text with a secret key.
 * @param {string} cipherText - Base64 encoded cipher.
 * @param {string} key - Secret key.
 * @returns {Promise<string>} Decrypted plaintext.
 */
export async function decrypt(cipherText: string, key: string): Promise<string> {
  // Derive key from password
  const keyBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key))
  const cryptoKey = await crypto.subtle.importKey('raw', keyBuffer, ALGORITHM, false, ['decrypt'])

  // Decode base64
  const combined = new Uint8Array(
    atob(cipherText)
      .split('')
      .map((c) => c.charCodeAt(0)),
  )

  // Extract IV and encrypted data
  const iv = combined.slice(0, IV_LENGTH)
  const encrypted = combined.slice(IV_LENGTH)

  // Decrypt
  const decrypted = await crypto.subtle.decrypt({ name: ALGORITHM, iv }, cryptoKey, encrypted)

  return new TextDecoder().decode(decrypted)
}

// Example usage
async function example() {
  const secretKey = 'my_super_secret_key_123!'
  const originalText = 'Hello, World!'

  const encrypted = await encrypt(originalText, secretKey)

  const decrypted = await decrypt(encrypted, secretKey)
}
