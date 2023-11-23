import { CartIcon } from "@/assets/images/icon-cart"
import { Logo } from "@/assets/images/logo"
import Image from "next/image"
import Avatar from "@/assets/images/image-avatar.png"
import { NavsMock } from "@/mock/navsmock"


export const Header = () => { 
    return(
    <header className="flex justify-between border-style: solid border-b-2  border-black/25">
        <div className="flex justify-between ">
            <nav>
                <ul className="flex gap-9 justify-around  font-normal text-black h-16">  
                    <Logo className="opacity-100" />
                    {NavsMock.map((i) => {
                        return (
                            <li key={i.id} className="opacity-75 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:border-b-[6px] border-[#FF7D1A] hover:opacity-100 hover:font-semibold" >
                                <a href={i.link}>{i.label}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        <div className="flex  items-start gap-8 h-16">
            <CartIcon className="cursor-pointer" />
            <span className="flex justify-center items-center  rounded-full h-4 w-4 bg-[#FF7D1A] absolute top-8 right-[9.5rem] text-white text-xs font-semibold">7</span>
            <Image className="w-[1.75rem] h-[1.75rem] cursor-pointer hover:rounded-full hover:border-solid hover:border-2 hover:border-[#FF7D1A]" width={100} height={100} alt="" src={Avatar} />
        </div>
    </header>
    )
}