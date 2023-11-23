import Image from "next/image";
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imageProduct1 from "@/assets/images/image-product-1.jpg"
import thumbnail2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imageProduct2 from "@/assets/images/image-product-2.jpg"
import imageProduct3 from "@/assets/images/image-product-3.jpg"
import thumbnail3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imageProduct4 from "@/assets/images/image-product-4.jpg"
import thumbnail4 from "@/assets/images/image-product-4-thumbnail.jpg"
import { Header } from "@/components/common/header";
import { CartIcon } from "@/assets/images/icon-cart";

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex">
      <div className="left-container">
        <div>
          <Image alt="" src={imageProduct1} />
        </div>
        <div>
          <Image alt="" src={imageProduct1} className="" />
          <Image alt="" src={imageProduct2} />
          <Image alt="" src={imageProduct3} />
          <Image alt="" src={imageProduct4} />
        </div>
      </div>
      <div className="right-container">
        <span>sneakers company</span>
        <h1>Fall Limites Edition <br/> Sneakers</h1>
        <p>these low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they'ill <br /> withstand everything the weather can offer.</p>
        <div className="flex">
          <span>$125.00</span>
          <span>50%</span>
        </div>
        <span>$250.00</span>
        <input type="text" />
        <button className="cursor-pointer flex"><CartIcon /> <p>Add to cart</p></button>
      </div>      
    </div>
    </>
  )
}
