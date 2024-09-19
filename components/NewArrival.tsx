import React from 'react';
import products from '@/assets/json/newArrival.json';
import { ProductCard } from './global/ProductCard';

const NewArrival = () => {
  return (
    <section className='py-5 mt-4 flex flex-col items-center gap-10'>
      <p className='text-2xl md:text-3xl font-extrabold uppercase flexCenter'>
        New Arrival
      </p>

      <div className='w-5/6 flex justify-between gap-5 px-5 overflow-scroll'>
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
    </section>
  )
}

export default NewArrival;
