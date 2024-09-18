import React from 'react'
// import { Input as ShadcnInput } from './input';
import Image from 'next/image';
import SearchIcon from '@/assets/icons/svg/searchLight.svg';
import { cn } from '@/lib/utils';

const InputIcon = () => {
  return (
    <div className='px-4 group bg-gray-100 rounded-2xl border border-input shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 relative '>
      <Image src={SearchIcon} width={16} height={16} alt='search' className='centerItem' />
      <input
        type="text"
        className={cn(
          "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm outline-none",
        )}
        placeholder='Search for products'
      />
    </div>
  )
}

export default InputIcon;
