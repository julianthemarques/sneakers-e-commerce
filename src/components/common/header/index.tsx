"use client";
import { CartIcon } from "@/assets/images/icon-cart";
import { Logo } from "@/assets/images/logo";
import Image from "next/image";
import Avatar from "@/assets/images/image-avatar.png";
import { NavsMock } from "@/mock/navsmock";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [client, setClient] = useState(true);

  useEffect(() => {
    setClient(false);
  }, []);

  if (client) return;

  return (
    <header className="flex justify-between max-w-7xl mx-auto solid border-b-[1px]  border-black/25">
      <div className="flex justify-between ">
        <nav>
          <ul className="flex gap-9 justify-around  font-normal text-black h-16">
            <Logo className="opacity-100" />
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
      <div className="flex  items-start gap-8 h-16">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <CartIcon className="cursor-pointer" />
            <span className="flex justify-center items-center  rounded-full h-4 w-4 bg-orange absolute -top-2 -right-2 text-white text-xs font-semibold">
              7
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white min-h-[12rem] w-72 mt-5">
            <DropdownMenuLabel>Cart</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div></div>
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
