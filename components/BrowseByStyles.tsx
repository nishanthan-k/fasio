import React from 'react';
import casual from "@/assets/images/globals/dressStyles/casual.png";
import formal from "@/assets/images/globals/dressStyles/formal.png";
import gym from "@/assets/images/globals/dressStyles/gym.png";
import party from "@/assets/images/globals/dressStyles/party.png";
import casualMD from "@/assets/images/globals/dressStyles/casual-md.png";
import formalMD from "@/assets/images/globals/dressStyles/formal-md.png";
import gymMD from "@/assets/images/globals/dressStyles/gym-md.png";
import partyMD from "@/assets/images/globals/dressStyles/party-md.png";
import Image from 'next/image';

const BrowseByStyles = () => {
  return (
    <section className='px-5 mt-4'>
      <div className='p-5 rounded-3xl flex flex-col gap-4 bg-gray-300'>
         <p className='text-2xl font-bold text-center my-2'>BROWSE BY DRESS STYLE</p>

        <div className='flex flex-col md:flex-row gap-4 h-max'>
          <div className='relative md:w-[40%]'>
            <Image src={casual} height={100} width={100} alt='casual' className='w-full cursor-pointer object-contain md:hidden' />
            <Image src={casualMD} height={100} width={100} alt='casual' className='w-full cursor-pointer h-full  hidden md:block' />

            <span className='absolute top-4 left-4 font-medium text-lg'>Casual</span>
          </div>
          <div className='relative md:w-2/3'>
            <Image src={formal} height={100} width={100} alt='formal' className='w-full cursor-pointer object-contain md:hidden' />
            <Image src={formalMD} height={100} width={100} alt='formal' className='w-full cursor-pointer object-contain hidden md:block' />

            <span className='absolute top-4 left-4 font-medium text-lg'>Formal</span>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 h-max'>
          <div className='relative md:w-[60%]'>
            <Image src={party} height={100} width={100} alt='party' className='w-full cursor-pointer object-contain md:hidden' />
            <Image src={partyMD} height={100} width={100} alt='party' className='w-full cursor-pointer h-full hidden md:block' />

            <span className='absolute top-4 left-4 font-medium text-lg'>Party</span>
          </div>
          <div className='relative  md:w-[40%]'>
            <Image src={gym} height={100} width={100} alt='gym' className='w-full cursor-pointer object-contain md:hidden' />
            <Image src={gymMD} height={100} width={100} alt='gym' className='w-full cursor-pointer object-contain hidden md:block' />

            <span className='absolute top-4 left-4 font-medium text-lg'>Gym</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrowseByStyles;
