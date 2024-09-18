import React from 'react';
import HeroImg from "@/assets/images/globals/hero.webp";
import Image from 'next/image';
import PlusIcon from "@/assets/icons/svg/plus.svg";

const Hero = () => {
  const businessCross = {
    "International Brands": 200,
    "High-Quality Products": 2000,
    "Happy Customers": 30000,
  }

  return (
    <main className='w-full flex flex-col md:flex-row lg:justify-evenly pt-6 px-4 md:pt-0 md:px-0 bg-softPearl'>
      <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-6 px-4 py-10'>
        <div className='w-full flex flex-col gap-4 md:gap-2'>
          <p className='font-extrabold text-4xl'>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </p>

          <p className='text-sm text-gray-500'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your   individuality and cater to your sense of style.
          </p>

          <button className='w-full md:w-max md:mt-2 roundedButton '>Shop now</button>
        </div>

        <div className='w-full h-max flexCenter lg:justify-start flex-wrap gap-6'>
          {Object.entries(businessCross).map(([key, value]) => (
              <div key={key} className="flex space-x-6">
                <div>
                  <p className='text-3xl font-semibold flex'>
                    {value}
                    <Image
                      src={PlusIcon}
                      alt='plus'
                      width={24}
                      height={24}
                    />
                  </p>
                  <span className='text-sm text-gray-500 text-nowrap'>{key}</span>
                </div>
                
                <span className='hidden h-full w-0.5 bg-gray-300' />
              </div>
            ))}
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:max-w-[450px]'>
        <Image
          src={HeroImg}
          alt='hero'
          width={0}
          height={0}
          // sizes="100%"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
    </main>
  )
}

export default Hero;
