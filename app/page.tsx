// app/page.tsx
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1 className="hero-title">ShipYard</h1>
        <p className="hero-sub">Gear for people who build, run, and explore.</p>
      </header>

      <section>
        <div className="section-head">
          <h2 className="section-title">All products</h2>
          <span className="section-count">{products.length} items</span>
        </div>

        {/* One card per product, straight from the data. */}
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}