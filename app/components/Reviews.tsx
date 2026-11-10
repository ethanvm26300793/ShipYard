"use client"

import { useState } from "react";

interface Review {
  id: number;
  rating: number;
  name: string;
  comment: string;
}
const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    comment: "Excellent product! Great quality and worth the price.",
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 4,
    comment: "Really good product. The quality exceeded my expectations.",
  },
  {
    id: 3,
    name: "David Wilson",
    rating: 5,
    comment: "Amazing experience. I would definitely recommend it!",
  },
  {
    id: 4,
    name: "Emma Brown",
    rating: 4,
    comment: "Good quality and design. Very happy with my purchase.",
  },
];

export default function Reviews({
  productName,
}: {
  productName: string;
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, 2);

  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>

      <p className="reviews-subtitle">
        What customers think about {productName}
      </p>

      <div className="review-list">
        {visibleReviews.map((review) => (
          <article key={review.id} className="review-card">
            <h3>{review.name}</h3>

            <p className="review-stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>

            <p>{review.comment}</p>
          </article>
        ))}
      </div>

      <button
        className="reviews-button"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All Reviews"}
      </button>
    </section>
  );
}