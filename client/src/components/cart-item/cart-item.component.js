import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemDetailList,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <CartItemDetailsContainer>
      <CartItemDetailList>{name}</CartItemDetailList>
      <CartItemDetailList>
        {quantity} x ${price}
      </CartItemDetailList>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
