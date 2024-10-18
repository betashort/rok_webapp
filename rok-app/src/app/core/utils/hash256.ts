
/**
 * hash sha256
 */
export async function sha256(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const passwordHash = await crypto.subtle.digest('SHA-256', data);
  const hashHex = Array.from(new Uint8Array(passwordHash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}
