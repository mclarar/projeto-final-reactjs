import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

export const BotaoAdicionarCarrinho = ({produto}) => {

  const{ cart, addItem, removeItem, clearCart } = useContext(CartContext)

  return (
    <>
      <button onClick={() => addItem(produto)}>Adicionar ao Carrinho</button>
    </>
  );
};
