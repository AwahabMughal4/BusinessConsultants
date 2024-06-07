// components/ContactUs.tsx
import React from 'react';
import Wrapper from "@/components/shared/Wrapper";
import Image from 'next/image';
import Link from 'next/link';
import whatsapp from '@/assets/whatsapp.jpg';

const ContactUs: React.FC = () => {
    return (
        <Wrapper>
            <div className="bg-white py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-18">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-5xl font-bold text-blue-900 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">Contact Us</h1>
                    <div className="max-w-lg mx-auto">
                        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-md 2xl:text-3xl mb-6 sm:mb-8 leading-relaxed text-center">For inquiries, feel free to contact us via email or phone:</p>
                        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
                            <div className="flex items-center justify-center space-x-2">
                                <p className="text-gray-700 font-bold">Email:</p>
                                <p className="text-gray-700">evolvepk@gmail.com</p>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <p className="text-gray-700 font-bold">Phone:</p>
                                <p className="text-gray-700">03088882464</p>
                            </div>
                            {/* Add any additional contact details here */}
                            <Link href={'https://wa.me/message/WPVWNGXIEDZYC1'}>
                                <span className="cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-700 font-bold">Whatsapp:</p>
                                        <div className="w-[40px] h-[40px]">
                                            <Image src={whatsapp} alt="WhatsApp" layout="responsive" width={40} height={40} className="rounded-full transition-transform duration-300 transform hover:scale-110" />
                                        </div>
                                    </div>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ContactUs;
