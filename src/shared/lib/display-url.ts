/**
 * Versión legible de un enlace para mostrar en pantalla:
 * `https://www.linkedin.com/in/jorgeespinal/` → `linkedin.com/in/jorgeespinal`.
 * `mailto:` se reduce a la dirección de correo.
 */
export function displayUrl(url: string): string {
  return url
    .replace(/^mailto:/, '')
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '')
}
