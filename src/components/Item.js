import React, { useState } from "react";

function Item({ item }) {
  // Create a state variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle the item in and out of the cart
  const toggleCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <div className="item">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
      <button onClick={toggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
