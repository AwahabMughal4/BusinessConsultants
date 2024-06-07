import React from 'react';
import Wrapper from '../shared/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import whatsapp from '@/assets/whatsapp.jpg';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50">
      <Wrapper>
        <div className="relative my-4  border rounded-full navbar lg:px-8 shadow hover:border-cyan-600 bg-gradient-to-r from-white to-lime-600 ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4 font-white">
              <Link href="/" aria-label="Home">
                <Image src={logo} alt="Evolve Business Consultants Logo" className="w-[70px] h-[70px] rounded-full" />
              </Link>
              <div className="hidden lg:flex">
                <a className="text-lg font-bold text-black">EVOLVE BUSINESS CONSULTANTS</a>
              </div>
            </div>
            <div className="hidden font-bold text-black lg:flex">
              <ul className="flex space-x-4 mr-9  ">
                <li><Link href="/" className="text-lg">Home</Link></li>
                <li className="relative group space-x-5">
                  <span className="text-lg cursor-pointer">Services</span>
                  <ul className="absolute hidden px-9 py-3 space-y-3  mt-1 bg-base-100   rounded-md shadow-lg z-60 group-hover:block  ">
                    <li><Link href="/services/businessServices" className="text-lg">Business Services</Link></li>
                    <li><Link href="/services/taxServices" className="text-lg">Tax Services</Link></li>
                    <li><Link href="/services/brandIPServices" className="text-lg">BrandIP Services</Link></li>
                  </ul>
                </li>
                <li><Link href="/contactus" className="text-lg">Contact us</Link></li>
                <li><Link href="/aboutus" className="text-lg">About us</Link></li>
              </ul>
            </div>
            <div className="flex items-center space-x-4 ">
              <div className="lg:hidden dropdown">
                <button className="btn btn-ghost" aria-label="Toggle Menu">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </button>
                <ul className="  z-50 px-6 mt-8 mr-8 shadow menu dropdown-content bg-base-100 rounded-box w-72 border border-r-indigo-600 border-l-indigo-600 right-0">
                  <li><Link href="/" className="font-xl">Home</Link></li>
                  <li>
                    <span className="font-xl cursor-pointer">Services</span>
                    <ul>
                      <li><Link href="/services/businessServices" className="text-lg">Business Services</Link></li>
                      <li><Link href="/services/taxServices" className="text-lg">Tax Services</Link></li>
                      <li><Link href="/services/brandIPServices" className="text-lg">BrandIP Services</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/contactUs" className="text-lg">Contact Us</Link></li>
                  <li><Link href="/aboutus" className="text-lg">About Us</Link></li>
                </ul>
              </div>
              <Link href="https://wa.me/message/WPVWNGXIEDZYC1" aria-label="WhatsApp">
                <Image src={whatsapp} alt="Contact us on WhatsApp" className="w-[50px] h-[50px] rounded-full border-2 hover:border-green-500 border-green-400 animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
