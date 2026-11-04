import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <div className="notfound">
        <h1 className="notfound-title">Product not found</h1>
        <p className="notfound-sub">We could not find that item.</p>
        <Link href="/" className="back-link">← Back to catalog</Link>
      </div>
    </main>
  );
}