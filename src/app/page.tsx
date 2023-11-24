"use client";
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

export default function Home() {
  return (
    <>
      <div className="flex mt-28 justify-around">
        <div className="left-container">
          <div className="h-[30rem] w-[30rem] border-2 rounded-md mb-4">
            <Image
              className="rounded-md"
              width={1000}
              height={1000}
              alt=""
              src={imageProduct1}
            />
          </div>
          <div className="flex justify-between">
            <Image
              className="h-[7rem] w-[7rem] rounded-md hover:border-orange border-2"
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
              className="h-[7rem] w-[7rem] rounded-md hover:border-orange border-2"
            />
            <Image
              className="h-[7rem] w-[7rem] rounded-md hover:border-orange border-2"
              alt=""
              src={imageProduct3}
              width={1000}
              height={1000}
            />
            <Image
              className="h-[7rem] w-[7rem] rounded-md hover:border-orange border-2"
              alt=""
              src={imageProduct4}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="right-container">
          <span className="text-lg font-bold text-orange">
            sneakers company
          </span>
          <h1 className="text-4xl font-bold">
            Fall Limites Edition <br /> Sneakers
          </h1>
          <p className="font-sm font-xs font-light opacity-[80%]">
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
          <span className="opacity-[80%] line-through">$250.00</span>
          <div className="flex gap-4 mt-">
            <div className="px-[5rem] py-[0.5rem] bg-lightGrayishBlue rounded-md flex">
              <button type="button">
                <IconPrevious />
              </button>
              <span>7</span>
              <button className="">
                <IconNext />
              </button>
            </div>
            <button className="bg-orange cursor-pointer flex items-center px-12 rounded-md">
              <CartIcon colorFill="white" className="text-white" />{" "}
              <p className="text-white">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
