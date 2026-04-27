import React, { useMemo, useState } from "react";

const inventory = [
  { id: 1, name: "Floral Dress", section: "Women", price: 45 },
  { id: 2, name: "Denim Jacket", section: "Men", price: 60 },
  { id: 3, name: "Girls Dress", section: "Girls", price: 32 },
  { id: 4, name: "Boys Shirt", section: "Boys", price: 18 },
  { id: 5, name: "Infant Set", section: "Infant", price: 22 }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return inventory.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1 style={{ color: "purple" }}>MimiE Loves 💜</h1>

      <input
        placeholder="Search items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 10, marginBottom: 20 }}
      />

      <div>
        {filtered.map(item => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
}
