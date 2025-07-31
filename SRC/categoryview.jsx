import React from "react";

export default function CategoryView({ items }) {
  if (!items || items.length === 0) return <p>Aucun article trouvé.</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong> — {item.price} €
        </li>
      ))}
    </ul>
  );
}

