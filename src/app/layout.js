// src/app/layout.js
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Calendar, Mail, MapPin, PhoneCall } from 'lucide-react';
import QuickMenu from './components/QuickMenu';
import { redirect, useRouter } from 'next/navigation';

const x = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  const router = useRouter();
  router.push('/About');
  const leftSectionContent = (
    <>
      <div className='upper  flex flex-col gap-7 justify-center items-center'>
        <Image
          src="emote-removebg-preview.png"
          width={150}
          height={150}
          alt="Profile photo"
          className='rounded-full border-2 border-white bg-black'
        />
        <div className="name text-base md:text-xl font-semibold">
          Ashutosh Vats
        </div>
      </div>
      <div className="border-2 text-[rgb(56,56,56)] my-5 mx-5"></div>
      <div className='lower text-xs md:text-sm flex flex-col gap-7 ml-6 overflow-hidden justify-center items-start'>
        <div className="email flex items-center gap-2">
          <Mail className='' size={15} />
          <Link href="mailto:contact.ashutosh03@gmail.com">
            contact.ashutosh03@gmail.com
          </Link>
        </div>
        <div className="phonenumber flex items-center gap-2">
          <PhoneCall className='' size={15} />
          <div>8936820933</div>
        </div>
        <div className="birthday flex items-center gap-2">
          <Calendar className='' size={15} />
          <div>3rd January 2003</div>
        </div>
        <div className="location flex flex-col ">
          <div className='flex gap-2 items-center'>
            <MapPin className='' size={15} />
            <div>Kolkata</div>
          </div>
          <div className='ml-5'>
            <div>West Bengal</div>
            <div>India</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <html lang="en" className={x.className}>
      <body className="bg-black relative flex gap-16 text-white m-auto py-16 px-20 md:flex-row flex-col">
        {/* The QuickMenu component handles the mobile view */}
        <QuickMenu>
          {leftSectionContent}
        </QuickMenu>

        {/* This div is for desktop view */}
        <div className='left w-[20vw] h-[82vh] bg-gradient-to-r from-zinc-700 to-zinc-900 py-16 border-l-1 border-white rounded-3xl hidden md:block'>
          {leftSectionContent}
        </div>

        {/* The Main Content Area */}
        <div
          style={{ scrollbarWidth: 'none' }}
          className='h-[80vh]  bg-gradient-to-l py-10 from-zinc-900 to-zinc-700 border-0 border-l rounded-3xl overflow-y-scroll no-scrollbar w-[65vw] sm:w-[80vw] '>
          {children}
        </div>

        {/* Navbar */}
        <div className='navbar  w-fit fixed top-0 right-0 z-10 backdrop-blur-3xl bg-black md:border-b-1 md:border-l-1 sm:border-0 rounded-bl-3xl mt-16 px-3 py-4 md:mr-20 md:py-4 md:px-3'>
          <div className="links flex flex-wrap gap-2 text-sm font-semibold sm:text-lg md:gap-6 md:text-2xl">
            <Link href="/About">About</Link>
            <Link
              target="_blank"
              href="https://ashutoshvats2109.wixsite.com/my-site-1"
            >
              Blog
            </Link>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/Resume">Resume</Link>
          </div>
        </div>
      </body>
    </html>
  );
}