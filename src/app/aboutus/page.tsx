// components/AboutUs.tsx
import Link from 'next/link';
import React from 'react';
import Wrapper from "@/components/shared/Wrapper";

const AboutUs: React.FC = () => {
    return (
        <Wrapper>
            <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-bold text-blue-700 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">About us</h1>
                    <div className="max-w-5xl mx-auto">
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl mb-4 sm:mb-6 leading-relaxed">Evolve Business Consultants is a leading business consultancy company providing quality services to its clients in different areas of business registration and taxation with the highest level of integrity.</p>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl mb-4 sm:mb-6 leading-relaxed">Our team consists of dynamic professionals towards future changes. All projects at Evolve Business Consultants are professionally handled with the client’s satisfaction. We always offer effective solutions to complex Tax, Legal, Secretarial, Accounts & other corporate issues. Our forte is our speed and swift response.</p>
                        <Link href="https://wa.me/message/WPVWNGXIEDZYC1">
                            <span className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded block text-center sm:inline-block">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutUs;
