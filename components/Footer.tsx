// "use client";

import React from 'react'
import { MailInput } from './ui/MailInput';
import x from "@/assets/icons/social/x.webp";
import facebook from "@/assets/icons/social/facebook.webp";
import instagram from "@/assets/icons/social/instagram.webp";
import github from "@/assets/icons/social/github.webp";
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Footer = () => {
  const footLinks = [
    {
      title: 'COMPANY',
      links: [
        "About", "Features", "Works", "Career"
      ]
    },
    {
      title: 'HELP',
      links: [
        "Customer Support", "Delivery Support", "Terms & Conditions", "Privacy Policy"
      ]
    },
    {
      title: 'FAQ',
      links: [
        "Account", "Manage Deliveries", "Orders", "Payments"
      ]
    },
    {
      title: 'Resources',
      links: [
        "Free eBook", "Development Tutorial", "Blogs", "Leetcode"
      ]
    },
  ]

  const socialLinks = [
    {
      img: x,
      desc: 'X',
    },
    {
      img: facebook,
      desc: 'Facebook',
    },
    {
      img: instagram,
      desc: 'Instagram',
    },
    {
      img: github,
      desc: 'Github',
    },
  ]

  return (
    <footer className='px-5 md:px-20 mt-32 bg-hardPearl'>
      <Subscribe />

      <section className='relative -top-24 md:-top-16 flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-1/3'>
          <span className='text-3xl font-extrabold cursor-pointer'>FASIO</span>

          <p className='text-sm text-gray-500 md:w-4/5'>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>

          <div className='flex gap-4 mt-4'>
            <TooltipProvider >
            {socialLinks.map((social) => (
              <div key={social.desc} className='relative'>
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                      <button>
                        <Image src={social.img} width={28} height={28} alt={social.desc} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 text-white p-2 rounded-md shadow-lg">
                <p>{social.desc}</p>
              </TooltipContent>
                  </Tooltip>
              </div>
            ))}
            </TooltipProvider>
          </div>
        </div>

        <div className='lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:justify-between'>
          {footLinks.map((ele) => (
            <nav key={ele.title} className='flex flex-col gap-2'>
              <span className='tracking-widest'>{ele.title}</span> 
              <ul className='flex flex-col gap-2'>
                {ele.links.map((e) =>(
                  <li key={e} className='text-gray-500 cursor-pointer'>{e}</li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </footer>
  )
}

export default Footer;

function Subscribe(): React.ReactElement {
  return (
    <section className='bg-black rounded-3xl p-5 md:p-10 flex flex-col md:flex-row md:justify-between gap-6 relative -top-28 md:-top-20'>
      <p className='md:w-1/2 text-3xl font-extrabold text-white'>
        STAY UPTO DATE ABOUT OUR <span className='text-nowrap'>LATEST OFFERS</span>
      </p>

      <div className='md:w-1/2 flex flex-col gap-2'>
        <MailInput placeholder='Enter your email address'/>
        <button className='rounded-full bg-white w-full py-1.5'>
          Subscribe to Newsletter
        </button>
      </div>
    </section>
  )
}