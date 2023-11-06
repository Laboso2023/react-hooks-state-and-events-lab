import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ShoppingList;
