"use client";
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imageProduct1 from "@/assets/images/image-product-1.jpg";
import thumbnail2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import thumbnail3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";
import thumbnail4 from "@/assets/images/image-product-4-thumbnail.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

export const ThumbnailContainer = () => {
  const [thumbnailSelection, setThumbnailSelection] = useState(imageProduct1);

  return (
    <div className="left-container max-w-lg w-full">
      <div className="border-2 rounded-md mb-4 w-full">
        <Image
          className="rounded-md aspect-square w-full"
          width={1000}
          height={1000}
          alt=""
          src={thumbnailSelection}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Image
          className="w-full aspect-square  rounded-md hover:border-orange border-2"
          alt=""
          src={thumbnail1}
          width={1000}
          height={1000}
          onClick={() => setThumbnailSelection(imageProduct1)}
        />
        <Image
          alt=""
          src={thumbnail2}
          width={1000}
          height={1000}
          onClick={() => setThumbnailSelection(imageProduct2)}
          className="w-full aspect-square rounded-md hover:border-orange border-2"
        />
        <Image
          className="w-full aspect-square rounded-md hover:border-orange border-2"
          alt=""
          src={thumbnail3}
          width={1000}
          height={1000}
          onClick={() => setThumbnailSelection(imageProduct3)}
        />
        <Image
          className="w-full aspect-square rounded-md hover:border-orange border-2"
          alt=""
          src={thumbnail4}
          width={1000}
          height={1000}
          onClick={() => setThumbnailSelection(imageProduct4)}
        />
      </div>
    </div>
  );
};
