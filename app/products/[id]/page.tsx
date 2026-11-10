
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProduct, products } from "../../data/products";
import ReviewsLoader from "../../components/Reviews";

// Generate static pages for all products.
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each individual product.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | ShipYard",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | ShipYard`,
    description: product.description,
  };
}

// Display the selected product.
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">

      <Link href="/" className="back-link">
        ← Back to catalog
      </Link>

      <article className="detail">

        <div
          className="detail-art"
          style={{ background: product.accent }}
        >
          <span className="detail-emoji">
            {product.emoji}
          </span>
        </div>

        <div className="detail-body">

          <span className="card-category">
            {product.category}
          </span>

          <h1 className="detail-name">
            {product.name}
          </h1>

          <p className="detail-tagline">
            {product.tagline}
          </p>

          <span className="detail-price">
            ${product.price}
          </span>

          <p className="detail-desc">
            {product.description}
          </p>

          <h2 className="detail-specs-title">
            Specifications
          </h2>

          <ul className="detail-specs">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>

        </div>
      </article>

      {/* Dynamically loaded Reviews component */}
      <ReviewsLoader productName={product.name} />

    </main>
  );
}
