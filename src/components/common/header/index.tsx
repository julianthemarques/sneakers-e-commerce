"use client";
import { CartIcon } from "@/assets/images/icon-cart";
import { IconDelete } from "@/assets/images/icon-delete";
import { IconMenu } from "@/assets/images/icon-menu";
import Avatar from "@/assets/images/image-avatar.png";
import thumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg";
import { Logo } from "@/assets/images/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartContext } from "@/contexts/Cart";
import { NavsMock } from "@/mock/navsmock";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";

export const Header = () => {
  const { carts, setCarts } = useCartContext();
  const [client, setClient] = useState(true);

  useEffect(() => {
    setClient(false);
  }, []);

  if (client) return;

  return (
    <header className="flex justify-between max-lg:bg-white max-lg:w-full max-lg:top-0 max-lg:left-0 max-w-7xl mx-auto solid max-lg:p-4 max-lg:items-center lg:border-b-[1px]  border-black/25">
      <div className="flex justify-between">
        <nav className="flex lg:gap-9 max-lg:gap-4">
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <IconMenu />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
              <ul className="flex gap-2 justify-around font-bold text-lg text-black h-16 flex-col mt-24">
                {NavsMock.map((i) => {
                  return (
                    <li
                      key={i.id}
                      className="opacity-75 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-[6px] border-orange hover:opacity-100 hover:font-semibold"
                    >
                      <a href={i.link}>{i.label}</a>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
          <Logo className="opacity-100" />
          <ul className="flex gap-9 justify-around  font-normal text-black h-16 max-lg:hidden">
            {NavsMock.map((i) => {
              return (
                <li
                  key={i.id}
                  className="opacity-75 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-[6px] border-orange hover:opacity-100 hover:font-semibold"
                >
                  <a href={i.link}>{i.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="flex  items-start gap-8 h-16 max-lg:items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <CartIcon className="cursor-pointer" />
            {carts.length ? (
              <span className="flex justify-center items-center  rounded-full h-4 w-4 bg-orange absolute -top-2 -right-2 text-white text-xs font-semibold">
                {carts.reduce((acc, prod) => acc + prod.amount, 0)}
              </span>
            ) : null}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white min-h-[12rem] w-80 mt-5 flex flex-col">
            <DropdownMenuLabel className="solid border-b-[1px] h-fit border-black/25">
              Cart
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {!carts.length ? (
              <div className="flex flex-1 text-muted-foreground italic opacity-70 justify-center h-full items-center">
                <span>Your cart is empty.</span>
              </div>
            ) : (
              <div className="p-3">
                {carts.map((product) => {
                  return (
                    <div
                      className="flex justify-between items-center mb-6"
                      key={product.id}
                    >
                      <Image
                        className="w-10 h-10 rounded-md"
                        alt=""
                        src={thumbnail1}
                      />
                      <div className="flex flex-col opacity-80">
                        <p className="text-sm align-top">{product.name}</p>
                        <p className="text-sm tracking-wide align-bottom">
                          {"$" + product.price + ".00" + " x " + product.amount}
                          <span className="font-bold ml-2">
                            {"$" + product.amount * product.price + ".00"}
                          </span>
                        </p>
                      </div>
                      <button
                        className=""
                        onClick={() =>
                          setCarts((prev) => {
                            const newPrev = [...prev];
                            const productIndex = newPrev.findIndex(
                              ({ id }) => product.id === id
                            );
                            newPrev.splice(productIndex, 1);
                            return newPrev;
                          })
                        }
                      >
                        <IconDelete />
                      </button>
                    </div>
                  );
                })}
                <button
                  type="submit"
                  className="p-3 bg-orange cursor-pointer flex items-center rounded-md w-full self-center justify-center"
                >
                  <p className="text-white">Checkout</p>
                </button>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Image
          className="w-[1.75rem] h-[1.75rem] cursor-pointer hover:rounded-full hover:border-solid hover:border-2 hover:border-orange"
          width={100}
          height={100}
          alt=""
          src={Avatar}
        />
      </div>
    </header>
  );
};
