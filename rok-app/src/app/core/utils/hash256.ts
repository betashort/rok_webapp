import crypto from'crypto';

export function sha256(password:string) {
    // const encoder = new TextEncoder();
    // const data = encoder.encode(password);
    // const passwordHash = crypto.subtle.digest('SHA-256', data);
    // return Array.from(new Uint8Array(passwordHash)).map((b) => b.toString(16).padStart(2, "0")).join("");

    const hash = crypto.createHash('sha256');
    hash.update(password);
    const hashHex = hash.digest('hex');
    return hashHex;
}