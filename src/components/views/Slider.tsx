'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import Image,{StaticImageData} from 'next/image';
import Wrapper from '@/components/shared/Wrapper';

import SmallBusinessConsulting from '@/assets/smallBusinessConsulting.png'
import SmallBusinessTaxAdvisor from '@/assets/smallBusinessTaxAdvisor.png';
import businessService from '@/assets/businessServices.png'

type ImageType = {
    src: StaticImageData;
    alt: string;
};

const images: ImageType[] = [
    { src: SmallBusinessConsulting, alt: 'SmallBusinessConsulting' },
    { src: SmallBusinessTaxAdvisor, alt: 'SmallBusinessTaxAdvisor' },
    { src: businessService, alt: 'business Service' },
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentIndex]);

    return (
        <Wrapper>
            <div className="relative w-full  h-[60vh] md:h-[80vh] lg:h-[917px]">
                <div className="relative w-full h-full overflow-hidden rounded shadow-md shadow-cyan-100">
                    <Carousel
                        autoplay
                        autoplaySpeed={2000}
                        effect="fade"
                        beforeChange={(from, to) => setCurrentIndex(to)}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full md:w-full lg:w-full h-[60vh] md:h-[80vh] lg:h-[917px]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority={index === currentIndex}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </Wrapper>
    );
};

export default Slider;
