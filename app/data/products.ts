
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  accent: string;
  description: string;
  specs: string[];
  image?: string;
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
    image: "/images/sneakers.jpg"
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
      "Compact wireless earbuds with active noise cancellation and an eight-hour battery.",
    specs: ["Active noise cancellation", "8h battery", "USB-C case", "IPX4 sweatproof"],
    image: "/images/pulsebuds.jpg"
  },
  {
    id: "nova-watch",
    name: "Nova Watch",
    tagline: "Smart tracking for your everyday adventures.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    accent: "#42bda5",
    description:
      "A stylish smartwatch that tracks your daily activity, heart rate, workouts and sleep.",
    specs: ["AMOLED display", "Heart rate tracking", "7-day battery", "Water resistant"],
    image: "/images/novawatch.jpg"
  },
  {
    id: "echo-speaker",
    name: "Echo Speaker",
    tagline: "Room-filling sound in a compact design.",
    price: 149,
    category: "Audio",
    emoji: "🔊",
    accent: "#f59e68",
    description:
      "A compact wireless speaker delivering clear vocals and rich bass for your music.",
    specs: ["Bluetooth 5.3", "360-degree sound", "12h battery", "USB-C charging"],
    image: "/images/echospeaker.jpg"
  },
  {
    id: "orbit-backpack",
    name: "Orbit Backpack",
    tagline: "Carry your essentials wherever you go.",
    price: 79,
    category: "Gadgets",
    emoji: "🎒",
    accent: "#d18acb",
    description:
      "A durable everyday backpack with organized compartments and a padded laptop sleeve.",
    specs: ["25L capacity", "15-inch laptop compartment", "Water-resistant fabric", "Padded straps"],
    image: "/images/backpack.jpg"
  },
  {
    id: "swift-mouse",
    name: "Swift Mouse",
    tagline: "Precision and comfort for your workspace.",
    price: 59,
    category: "Gadgets",
    emoji: "🖱️",
    accent: "#8ba5b8",
    description:
      "An ergonomic wireless mouse designed for smooth navigation and comfortable productivity.",
    specs: ["Wireless connectivity", "Adjustable DPI", "Rechargeable battery", "Ergonomic design"],
    image: "/images/mouse.jpg"
  },
  {
    id: "cloud-runner",
    name: "Cloud Runner",
    tagline: "Lightweight sneakers for everyday comfort.",
    price: 109,
    category: "Sneakers",
    emoji: "👟",
    accent: "#79b8e8",
    description:
      "Comfortable everyday sneakers with cushioned soles and breathable materials.",
    specs: ["Breathable mesh", "Cushioned sole", "Lightweight design", "Flexible outsole"],
    image: "/images/cloudrunner.jpg"
  },
  {
    id: "spark-powerbank",
    name: "Spark Powerbank",
    tagline: "Reliable portable power wherever you travel.",
    price: 49,
    category: "Gadgets",
    emoji: "🔋",
    accent: "#e5b85c",
    description:
      "A compact power bank that keeps your phone and other devices charged while traveling.",
    specs: ["20000mAh capacity", "USB-C output", "Fast charging", "LED battery indicator"],
    image: "/images/powerbank.jpg"
  },
];

// Find a product using its unique ID.
export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
