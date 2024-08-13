/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import banner from "@/components/images/banner.jpg"
import logo from "@/components/images/logo.jpg"
import Whatsapp from "@/components/icons/whatsapp"
import Instagram from "@/components/icons/instagram"
function Header() {
  return (
    <>
    <header>
        <nav className='w-full max-w-screen-xl rounded-sm px-4 pt-4 m-auto flex flex-col gap-4'>
        <Image  src={banner} alt='pizza banner' className='h-32 rounded-lg  object-cover sm:h-64'/>

        <div className='flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4'>
          
                  <div className="-mt-20 rounded-full p-1 sm:-mt-12">
                    <Image
                      alt="logo"
                      className="h-32 w-32 min-w-[128px] rounded-full border-8  border-[#030712] "
                      src={logo}
                    />
                  </div>
                  <div className='flex flex-col items-center gap-4 text-center sm:items-start sm:gap-2 sm:text-left'>
                    <div className='flex flex-col gap-1'>
                    
                      <h1 className='text-3xl font-bold sm:text-4xl uppercase'>deportivo<span className='text-orange-600'>pizza</span></h1>
                      <p>Somos fanáticos de la PiZzA y del DELIVERY!</p>
                    <div className='flex items-center gap-4 '>
                        <Whatsapp />
                      <Instagram />
                    </div>
                    </div>
                  </div>
        </div>
        </nav>
    </header>
    </>
  )
}

export default Header