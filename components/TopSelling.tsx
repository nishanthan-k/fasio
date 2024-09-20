import React from 'react';
import products from '@/assets/json/topSelling.json';
import { ProductCard } from './global/ProductCard';

const TopSelling = () => {
  return (
    <section className='py-5 mt-4 flex flex-col items-center gap-6'>
      <p className='text-2xl md:text-3xl font-extrabold uppercase flexCenter'>
        Top Selling
      </p>

      <div className='w-5/6 flex justify-between gap-5 px-5 overflow-scroll noScrollBar'>
        {products.map((data) => (
          <ProductCard
            key={data.name}
            img={data.img}
            name={data.name}
            ratings={data.ratings}
            price={data.price}
          />
        ))}
      </div>

      <button className='rounded-full px-10 py-2 outline-none bg-white text-black border-2 border-black'>View All</button>
    </section>
  )
}

export default TopSelling;
