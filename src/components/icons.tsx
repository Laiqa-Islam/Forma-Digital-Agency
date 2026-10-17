export function Arrow({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 16h21M17 6l10 10-10 10" stroke="currentColor" strokeWidth="1.8" /></svg>;
}
export function Globe() {
  return <svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="11"/><ellipse cx="14" cy="14" rx="5" ry="11"/><path d="M3 14h22M5 8h18M5 20h18"/></svg>;
}
export function Emblem() {
  return <svg viewBox="0 0 180 100" fill="none" aria-hidden="true"><path d="M25 80 90 10l65 70H25Z" stroke="currentColor" strokeWidth="2"/><path d="M49 80 90 36l41 44M70 80l20-22 20 22M90 10v70M25 80h130" stroke="currentColor" strokeWidth="2"/><circle cx="90" cy="46" r="40" stroke="currentColor" strokeWidth="1"/></svg>;
}
