import { CartIcon } from "@/assets/images/icon-cart"
import { Logo } from "@/assets/images/logo"
import Image from "next/image"
import Avatar from "@/assets/images/image-avatar.png"
import { NavsMock } from "@/mock/navsmock"


export const Header = () => { 
    return(
    <header className="flex justify-between border-style: solid border-b-2  border-black/25 pb-8">
        <div className="flex justify-between ">
            <nav>
                <ul className="flex gap-9 justify-around  font-normal text-black">  
                    <Logo className="opacity-100" />
                    {NavsMock.map((i) => {
                        return (
                            <li key={i.id} className="opacity-75" >
                                <a href={i.link}>{i.label}</a>
                            </li>
                        )
                    })}
                    {/* <li className="opacity-75">
                        <a>Collections</a>
                    </li>
                    <li className="opacity-75">
                        <a>Men</a>
                    </li>
                    <li className="opacity-75">
                        <a>Women</a>
                    </li>
                    <li className="opacity-75">
                        <a>about</a>
                    </li>
                    <li className="opacity-75">
                        <a>contact</a>
                    </li> */}
                </ul>
            </nav>
        </div>
        <div className="flex justify-center items-center gap-8">
            <CartIcon />
            <Image className="w-[3rem] h-[3rem]" width={100} height={100} alt="" src={Avatar} />
        </div>
    </header>
    )
}