'use client'

import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return(
        <>
            <header className="max-w-[100vw] w-full z-50 fixed">

                <nav className="flex justify-between items-center box-border px-20 tablet:px-12 mobile:px-12 py-0 h-[6vh] min-h-[50px] bg-[#222222]">

                    <Link href={"/"} className="bg-transparent">
                        <Image 
                            src="/images/logo.svg"
                            alt="Imagem do logotipo"
                            width={150}
                            height={47}
                            title="Nitriz"
                            priority="true"
                            className="m-0"
                            quality={100}
                        />
                    </Link>

                    <div className="flex">

                        <div className="mobile-menu hidden desktop:hidden tablet:block cursor-pointer mobile:block">

                            <div className="line-1 w-8 h-[2px] bg-white m-2 duration-300"></div>

                            <div className="line-2 w-8 h-[2px] bg-white m-2 duration-300"></div>

                            <div className="line-3 w-8 h-[2px] bg-white m-2 duration-300"></div>
                        </div>
            
                        <ul className="list-none hidden desktop:flex items-center m-0 p-0 mobile:flex mobile:absolute mobile:top-[6vh] mobile:right-0 mobile:w-[70vw] mobile:h-[94vh] mobile:bg-[#222222] mobile:flex-col mobile:items-center mobile:justify-around mobile:box-border mobile:py-[100px] mobile:translate-x-full mobile:transition-transform mobile:duration-300 mobile:ease-in">

                            <li className="mr-3 tracking-[3px] mobile:max-h-[85%] mobile:ml-0 mobile:opacity-0">
                                <Link href={"#masculino"} 
                                    className="no-underline decoration-transparent p-2 text-white duration-300 hover:text-[#0080ff] border-none mobile:p-5">
                                    Masculino
                                </Link>
                            </li>

                            <li className="mr-3 tracking-[3px]">
                                <Link href={"#feminino"} 
                                    className="no-underline decoration-transparent p-2 text-white duration-300 hover:text-[#0080ff] border-none">
                                    Feminino
                                </Link>
                            </li>
                            
                            <li className="mr-3 tracking-[3px]">
                                <Link href={"#corta-vento"} 
                                    className="no-underline decoration-transparent p-2 text-white duration-300 hover:text-[#0080ff] border-none">
                                    Corta vento
                                </Link>
                            </li>

                            <li className="mr-0 tracking-[3px]">
                                <Link href={"#kits-da-Nike"} 
                                    className="no-underline decoration-transparent p-2 text-white duration-300 hover:text-[#0080ff] border-none">
                                    Kits
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
