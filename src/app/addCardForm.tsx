"use client";

import { CartIcon } from "@/assets/images/icon-cart";
import { CounterContainer } from "@/components/common/counter";
import { Product, useCartContext } from "@/contexts/Cart";
import React from "react";

export const AddCardForm = ({ id }: { id: string }) => {
  const { setCarts } = useCartContext();
  let amount = 1;

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const product: Product = {
      id,
      amount,
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
    };

    setCarts((prev) => {
      const newPrev = [...prev];
      const productIndex = newPrev.findIndex((product) => product.id === id);
      if (productIndex === -1) newPrev.push(product);
      else newPrev[productIndex] = product;
      return newPrev;
    });
  }
  return (
    <form className="flex gap-4 w-full max-md:flex-col" onSubmit={onSubmit}>
      <CounterContainer
        handleAmount={(counter) => {
          amount = counter;
        }}
      />
      <button
        type="submit"
        className="p-4 bg-orange cursor-pointer flex items-center rounded-md w-full justify-center gap-4"
      >
        <CartIcon colorFill="white" className="text-white" />{" "}
        <p className="text-white">Add to cart</p>
      </button>
    </form>
  );
};
