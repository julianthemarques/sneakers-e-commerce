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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconNext } from "@/assets/images/icon-next";
import { IconPrevious } from "@/assets/images/icon-previous";
import { cn } from "@/lib/utils";

export const MobileThumbnailContainer = () => {
  const [thumbnailSelection, setThumbnailSelection] = useState(imageProduct1);
  const [imageSelection, setImageSelection] = useState(0);
  const [modalTrigger, setModalTrigger] = useState(false);

  return (
    <div className="left-container max-w-lg w-full md:hidden">
      <div className="rounded-md mb-4 w-full">
        <div className="relative w-full h-auto aspect-square sm:rounded-md overflow-hidden bg-[#FF7D1A]">
          {[imageProduct1, imageProduct2, imageProduct3, imageProduct4].map(
            (img, i) => (
              <Image
                key={i}
                className={cn(
                  "absolute w-full h-full top-0 left-0 opacity-0 transition-all pointer-events-none",
                  {
                    "opacity-100": i === imageSelection,
                  }
                )}
                alt=""
                src={img}
              />
            )
          )}
        </div>
        <button
          onClick={() =>
            setImageSelection(imageSelection === 0 ? 3 : imageSelection - 1)
          }
          className="group cursor-pointer z-10 top-[44%] left-[5%] w-12 h-12 rounded-full bg-white absolute items-center justify-center flex"
        >
          <IconPrevious className="-translate-x-[20%] group-hover:[&>path]:!stroke-[#FF7D1A] transition-all" />
        </button>
        <button
          onClick={() =>
            setImageSelection(imageSelection === 3 ? 0 : imageSelection + 1)
          }
          className="group cursor-pointer z-10 top-[44%] right-[5%] w-12 h-12 rounded-full bg-white absolute items-center justify-center flex"
        >
          <IconNext className="translate-x-[20%] group-hover:[&>path]:!stroke-[#FF7D1A] transition-all" />
        </button>
      </div>
    </div>
  );
};
