
import type { Metadata } from "next";

import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

// Homepage SEO metadata.
export const metadata: Metadata = {
  title: "ShipYard | Gear for Everyday Adventures",
  description:
    "Explore ShipYard's collection of sneakers, audio devices, wearables and everyday gadgets.",
};

export default function HomePage() {
  return (
    <main className="container">

      <header className="hero">
        <h1 className="hero-title">
          ShipYard
        </h1>

        <p className="hero-sub">
          Gear for people who build, run, and explore.
        </p>
      </header>

      <section>

        <div className="section-head">
          <h2 className="section-title">
            All products
          </h2>

          <span className="section-count">
            {products.length} items
          </span>
        </div>

        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
