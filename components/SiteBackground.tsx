export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden no-print" aria-hidden>
      <div className="aurora absolute inset-0" />
      <div className="site-grid absolute inset-0 opacity-70 dark:opacity-100" />
      <div className="noise absolute inset-0" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-signal/20 animate-spin-slow" />
      <div className="absolute -left-12 top-36 h-48 w-48 rounded-full border border-pulse/20 animate-spin-slow [animation-direction:reverse]" />
    </div>
  );
}
