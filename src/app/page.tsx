import { AddCardForm } from "./addCardForm";
import { ThumbnailContainer } from "@/components/common/thumbnail";
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg";
import Image from "next/image";
import { MobileThumbnailContainer } from "@/components/mobileThumbnail";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 mt-28">
      <div className="flex items-center w-full justify-around gap-4 flex-wrap">
        <ThumbnailContainer />
        <MobileThumbnailContainer />
        <div className="right-container space-y-8">
          <div>
            <span className="text-lg font-bold text-orange mb-4 block">
              sneakers company
            </span>
            <h1 className="text-4xl font-bold">
              Fall Limites Edition <br /> Sneakers
            </h1>
          </div>
          <p className="font-xs font-light opacity-80">
            these low-profile sneakers are your perfect casual wear <br />{" "}
            companion. Featuring a durable rubber outer sole, they&apos;ill{" "}
            <br /> withstand everything the weather can offer.
          </p>
          <div className="flex gap-4">
            <span className="text-3xl font-bold">$125.00</span>
            <span className="bg-paleOrange text-orange text-sm font-bold justify-center- self-center p-1 rounded-md">
              50%
            </span>
          </div>
          <span className="opacity-60 line-through">$250.00</span>
          <AddCardForm id="1" />
        </div>
      </div>
    </main>
  );
}
