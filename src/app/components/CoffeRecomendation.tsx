import Image from 'next/image'
import React from 'react'

import './style/CoffeeRecomendation.css'

interface Props{
  image: string,
  title: string,
  info: string,
  price: string
}

const CoffeRecomendation = ({image, title, info, price}:Props) => {
  return (
    <article className='w-[230px] h-[310px] shadow-2xl'>
      <header>
        <Image src={`/${image}`}
        className='max-w-[230px] max-h-[160px] object-cover '
        width={250}
        height={80}
        alt=''
        />
      </header>
      <main className='main_coffee px-4 py-2 h-[90px]'>
        <h3 className='main__title text-[#1e3932] text-lg font-medium '>{title}</h3>
        <p className='text-slate-300'>{info}</p>
        <Image
          className='justify-self-end self-center'
          width={15}
          height={15}
          alt=''
          src={'/icon-i.png'}
        />
        <span className='flex items-center gap-1 text-[#fed050] font-semibold'>
        <Image
        src={'/icon-star.png'}
        width={20}
        height={20}
        alt=''
        />
        <p> Bestseller</p>
        </span>
      </main>
      <footer className='flex justify-between items-center px-4 pb-3 h-[70px]'>
        <p className='text-xl text-[#1e3932] font-bold'>${price}</p>
        <button className='px-4 py-1 text-white bg-[#1e3932] rounded-md'>Add Item</button>
      </footer>
    </article>
  )
}

export default CoffeRecomendation