"use client";

import React, { Children, createContext, useContext, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

const CartContext = createContext<{
  carts: Product[];
  setCarts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({} as any);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = (props: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {props.children}
    </CartContext.Provider>
  );
};
