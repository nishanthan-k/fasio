"use client"

import MenuBar from '@/assets/icons/svg/menuBar.svg'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function MenuSheet() {
  const menuList = ["Link 1", "Link 2", "Link 3", "Link 4"];
  
  return (
    <div className="pr-4">
      <Sheet>
        <SheetTrigger asChild>
          <Image src={MenuBar} width={12} height={12} alt='icon' priority style={{ width: '20px' }} />
        </SheetTrigger>
        <SheetContent side="left" className='bg-white'>
          <div className="grid gap-4 py-4">
            <VisuallyHidden>
              <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Nav links
            </SheetDescription>
            </VisuallyHidden>
            <nav className='sm:hidden'>
              <Accordion type="single" collapsible className="w-full flexCenter">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Shop</AccordionTrigger>
                  {menuList.map((item) => (
                    <AccordionContent key={item}>{item}</AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>

              <ul className='flexCenter flex-col gap-6 px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50'>
                <li className='cursor-pointer text-nowrap'>On Sale</li>
                <li className='cursor-pointer text-nowrap'>New Arrival</li>
              </ul>
            </nav>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Login</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
