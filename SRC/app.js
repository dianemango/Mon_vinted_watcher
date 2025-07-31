import React, { useState, useEffect } from "react";
import CategoryView from "./CategoryView";
import { categoriesConfig } from "./config";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [itemsByCategory, setItemsByCategory] = useState({});

  useEffect(() => {
    async function fetchItems() {
      const results = {};
      for (const cat of categoriesConfig) {
        const response = await fetch(cat.apiUrl);
        const data = await response.json();
        results[cat.id] = data.items || [];
      }
      setItemsByCategory(results);
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Veille Vinted</h1>
      <nav>
        {categoriesConfig.map((cat, idx) => (
          <button key={cat.id} onClick={() => setSelectedCategory(idx)}>
            {cat.name}
          </button>
        ))}
      </nav>
      <CategoryView items={itemsByCategory[categoriesConfig[selectedCategory].id]} />
    </div>
  );
}

export default App;

