import Link from "next/link";
import type { Product } from "../data/products";
import Image from "next/image";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div className="card-art">
        <Image
          src = {product.image || "/images/placeholder.jpg"}
          alt={product.name}
          width={460}
          height={345}
          className="card-img"
          sizes="(max-width: 560px) 100vw, 230px"
        />
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h2 className="card-name">{product.name}</h2>
        <p className="card-tagline">{product.tagline}</p>
        <span className="card-price">${product.price}</span>
      </div>
    </Link>
  );
}