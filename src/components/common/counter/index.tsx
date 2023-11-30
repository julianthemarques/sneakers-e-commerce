"use client";
import { IconMinus } from "@/assets/images/icon-minus";
import { IconPlus } from "@/assets/images/icon-plus";
import { useCartContext } from "@/contexts/Cart";
import { count } from "console";
import { useEffect, useState } from "react";

export const CounterContainer = ({
  handleAmount,
}: {
  handleAmount: (n: number) => void;
}) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    handleAmount(counter);
  }, [counter]);

  return (
    <div className="bg-lightGrayishBlue rounded-md flex items-center w-fit space-x-6">
      <button
        type="button"
        disabled={counter === 1}
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="disabled:opacity-60 p-4"
      >
        <IconMinus />
      </button>
      <span className="w-8 text-center">{counter}</span>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="p-4"
      >
        <IconPlus />
      </button>
    </div>
  );
};
