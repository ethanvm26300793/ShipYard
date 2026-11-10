
import Link from "next/link";
import type { Product } from "../data/products";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card"
    >
      <div
        className="card-art"
        style={{ background: product.accent }}
      >
        <span className="card-emoji">
          {product.emoji}
        </span>
      </div>

      <div className="card-body">
        <span className="card-category">
          {product.category}
        </span>

        <h2 className="card-name">
          {product.name}
        </h2>

        <p className="card-tagline">
          {product.tagline}
        </p>

        <span className="card-price">
          ${product.price}
        </span>
      </div>
    </Link>
  );
}
