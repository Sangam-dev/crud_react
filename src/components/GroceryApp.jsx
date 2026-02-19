import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import GroceryList from "./GroceryList";

export default function GroceryApp() {
  const [items, setItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("groceryList");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="Groccery-app">
        <h2>
          Groccery list <img src="/images/icon.png" alt="icon" />
        </h2>

        <AddItem setItems={setItems} />
        <GroceryList items={items} setItems={setItems} />
      </div>
    </div>
  );
}
