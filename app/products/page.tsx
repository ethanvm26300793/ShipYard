// app/products/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data/products";

// Pre-build one static page per product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  // If the id in the URL matches no product, show the 404 page.
  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">← Back to catalog</Link>

      <article className="detail">
        <div className="detail-art" style={{ background: product.accent }}>
          <span className="detail-emoji">{product.emoji}</span>
        </div>
        <div className="detail-body">
          <span className="card-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <span className="detail-price">${product.price}</span>
          <p className="detail-desc">{product.description}</p>

          <h2 className="detail-specs-title">Specs</h2>
          <ul className="detail-specs">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}