import Image from "next/image";
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct1 from "@/assets/images/image-product-1.jpg";
import thumbnail2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import thumbnail3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";
import thumbnail4 from "@/assets/images/image-product-4-thumbnail.jpg";
import { CartIcon } from "@/assets/images/icon-cart";
import { IconNext } from "@/assets/images/icon-next";
import { IconMinus } from "@/assets/images/icon-minus";
import { IconPrevious } from "@/assets/images/icon-previous";
import { IconPlus } from "@/assets/images/icon-plus";
import { useState } from "react";
import { CounterContainer } from "@/components/common/Counter";
import { AddCardForm } from "./addCardForm";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 mt-28">
      <div className="flex items-center w-full justify-around gap-4 flex-wrap">
        <div className="left-container max-w-lg w-full">
          <div className="border-2 rounded-md mb-4 w-full">
            <Image
              className="rounded-md aspect-square w-full"
              width={1000}
              height={1000}
              alt=""
              src={imageProduct1}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Image
              className="w-full aspect-square  rounded-md hover:border-orange border-2"
              alt=""
              src={imageProduct1}
              width={1000}
              height={1000}
            />
            <Image
              alt=""
              src={imageProduct2}
              width={1000}
              height={1000}
              className="w-full aspect-square rounded-md hover:border-orange border-2"
            />
            <Image
              className="w-full aspect-square rounded-md hover:border-orange border-2"
              alt=""
              src={imageProduct3}
              width={1000}
              height={1000}
            />
            <Image
              className="w-full aspect-square rounded-md hover:border-orange border-2"
              alt=""
              src={imageProduct4}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="right-container space-y-8">
          <div>
            <span className="text-lg font-bold text-orange mb-4 block">
              sneakers company
            </span>
            <h1 className="text-4xl font-bold">
              Fall Limites Edition <br /> Sneakers
            </h1>
          </div>
          <p className="font-sm font-xs font-light opacity-80">
            these low-profile sneakers are your perfect casual wear <br />{" "}
            companion. Featuring a durable rubber outer sole, they'ill <br />{" "}
            withstand everything the weather can offer.
          </p>
          <div className="flex gap-4">
            <span className="text-3xl font-bold">$125.00</span>
            <span className="bg-paleOrange text-orange text-sm font-bold justify-center- self-center p-1 rounded-md">
              50%
            </span>
          </div>
          <span className="opacity-80 line-through">$250.00</span>
          <AddCardForm id="1" />
        </div>
      </div>
    </main>
  );
}
