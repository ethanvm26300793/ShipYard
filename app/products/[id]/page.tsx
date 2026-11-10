
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";
import dynamic from "next/dynamic";
import Reviews from "../../components/Reviews";

// Generate a static page for every product.
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

const reviews = dynamic( () => import("../../components/Reviews"), {
  loading: () => <p>Loading reviews....</p>,
})
// Display the product selected by its URL ID.
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = getProduct(id);

  // Display a 404 page if the product doesn't exist.
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
      <Reviews productName={product.name}/>
    </main>
  );
}
