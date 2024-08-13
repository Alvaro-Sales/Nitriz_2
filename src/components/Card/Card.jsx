
'use client'

import Image from "next/image"
import Link from "next/link"

const Card = ({src, alt, href, text, precoAntes, precoAtual}) => {
    return(
        <>
            <div className="w-[410px] h-full min-h-[424px] flex items-center flex-col justify-around box-border px-2 py-7 m-3 rounded-3xl shadow bg-white">

                <Image
                    width={300}
                    height={200}
                    src={src} 
                    alt={alt}
                    priority="true"
                    quality={100}
                />

                <div className="flex flex-col items-center mt-5">

                    {text && <h1 className="text-[#222222] text-2xl">{text}</h1>}

                    <div className="flex items-center m-5 p-0">
                        {precoAntes && <sup className="text-red-500 text-lg mr-3 line-through">{precoAntes}</sup>}

                        {precoAtual && <p className="text-green-500 text-xl">{precoAtual}</p>}
                    </div>
                
                    <button className="py-3 border-none bg-[#0080ff] rounded-xl">
                        <Link href={href} className="text-white py-3 px-5">
                            Comprar
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
