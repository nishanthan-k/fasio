import React from 'react'
import Logo from './Logo';
import { Menu } from './NavigationMenu';
import { SearchInput } from './ui/SearchInput';
import CartIcon from '@/assets/icons/svg/cart.svg';
import UserIcon from '@/assets/icons/svg/profile.svg';
import SearchIcon from '@/assets/icons/svg/searchDark.svg'
import Image from 'next/image';
import { MenuSheet } from './MenuSheet';

const Header = () => {
  return (
    <header className='shadow-sm p-2 md:px-8 md:py-4 flex items-center md:flexCenter md:gap-8 bg-white'>
      <div className='md:hidden iconButton'>
        <MenuSheet />
      </div>

      <Logo />

      <nav className='hidden md:flex'>
        <Menu />
        <ul className='flex gap-6 px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'>
          <li className='cursor-pointer text-nowrap'>On Sale</li>
          <li className='cursor-pointer text-nowrap'>New Arrival</li>
        </ul>
      </nav>

      <SearchInput
        placeholder='Search for products'
        className='w-1/2 hidden md:block'
        // onChange={() => {}}
      />

      <div className='flex ml-auto gap-2 '>
        <div className='md:hidden iconButton'>
          <Image src={SearchIcon} width={12} height={12} alt='icon' />
        </div>

        <div className='iconButton'>
          <Image src={CartIcon} width={12} height={12} alt='icon' />
        </div>

        <div className='iconButton'>
          <Image src={UserIcon} width={14} height={14} alt='icon' />
        </div>
      </div>

    </header>
  )
}

export default Header;
