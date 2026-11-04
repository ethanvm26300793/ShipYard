export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: 'Sneakers' | "Audio" | "Wearables" | "Gadgets"
  emoji: string;
  accent: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    accent: "#6c8cff",
    description:
      "A lightweight daily trainer with a springy foam midsole and a breathable knit upper.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    description:
      "Compact earbuds with active noise cancellation and an eight-hour battery.",
    specs: ["Active noise cancel", "8h battery", "USB-C case", "IPX4 sweatproof"],
  },
  // Add a few more of your own: aim for 6 to 8 products across the categories.
];

// Helper: look up one product by its id. Returns undefined if not found.
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}