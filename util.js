// util.js
export async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hash = await crypto.subtle.digest("SHA-256", data);
  const bytes = Array.from(new Uint8Array(hash));
  return bytes.map(b => b.toString(16).padStart(2, "0")).join("");
}

export function slugify(text) {
  return text.toString().normalize("NFKD")
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || `yazi-${Date.now()}`;
}

export function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString('tr-TR');
}
