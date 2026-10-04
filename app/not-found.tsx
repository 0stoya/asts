import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="shell narrow-shell">
        <span className="eyebrow">404</span>
        <h1>That branch appears to have gone missing.</h1>
        <p>The page does not exist, but the rest of the garden is still intact.</p>
        <Link className="button button-primary" href="/">Back to the homepage</Link>
      </div>
    </section>
  );
}
