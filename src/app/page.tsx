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
      <div className="flex">
        <div className="left-container">
          <div className="h-[30rem] w-[30rem] border-2 rounded-[3%] mb-4">
            <Image
              className=" rounded-[3%]"
              width={1000}
              height={1000}
              alt=""
              src={imageProduct1}
            />
          </div>
          <div className="flex justify-between">
            <Image
              className="h-[7rem] w-[7rem] rounded-[3%] hover:border-[#FF7D1A] border-2"
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
              className="h-[7rem] w-[7rem] rounded-[3%] hover:border-[#FF7D1A] border-2"
            />
            <Image
              className="h-[7rem] w-[7rem] rounded-[3%] hover:border-[#FF7D1A] border-2"
              alt=""
              src={imageProduct3}
              width={1000}
              height={1000}
            />
            <Image
              className="h-[7rem] w-[7rem] rounded-[3%] hover:border-[#FF7D1A] border-2"
              alt=""
              src={imageProduct4}
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="right-container">
          <span>sneakers company</span>
          <h1>
            Fall Limites Edition <br /> Sneakers
          </h1>
          <p>
            these low-profile sneakers are your perfect casual wear <br />{" "}
            companion. Featuring a durable rubber outer sole, they'ill <br />{" "}
            withstand everything the weather can offer.
          </p>
          <div className="flex">
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <span>$250.00</span>
          <div>
            <button type="button">
              <IconPrevious />
            </button>
            <span>7</span>
            <button>
              <IconNext />
            </button>
          </div>
          <button className="cursor-pointer flex">
            <CartIcon /> <p>Add to cart</p>
          </button>
        </div>
      </div>
    </>
  );
}
