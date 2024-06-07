import youtube from '@/assets/youtube.png'
import whatsapp from '@/assets/whatsapp.jpg'
import instagram from '@/assets/instagram.png'
import twitter from '@/assets/twitter.png'
import Image from "next/image"
import Link from 'next/link'
import Wrapper from "@/components/shared/Wrapper"

function Footer() {
    return (
        <Wrapper>
            <div className="flex flex-col items-center justify-center px-8  mt-[100px] pt-4 space-y-6 lg:flex-row lg:items-start lg:justify-between lg:space-y-0  border border-t-sky-400 border-b-navy-blue mb-5 py-6 shadow-md  ">
                <div className="text-center lg:text-left lg:w-1/3">
                    {/* <Image src={logo} alt="logoe" className="h-7 w-17"></Image> */}
                    <p className="mt-4 text-base lg:text-lg">
                        Trusted advisors offering expert guidance and strategic solutions to help businesses thrive in today&rsquo;s dynamic market landscape.
                    </p>

                </div>


                <div className="flex flex-col justify-around lg:flex-row lg:space-x-12 lg:w-2/3">
                    <ul className="space-y-2 text-center lg:text-left">
                        <h3 className="font-bold text-lg lg:text-xl">Links List</h3>
                        <li className="text-base lg:text-lg">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-base lg:text-lg">
                            <Link href="/aboutus">About us</Link>
                        </li>
                        <li className="text-base lg:text-lg">
                            <Link href="/contactus">Contact us</Link>
                        </li>
                    </ul>

                    <ul className="mt-6 space-y-2 text-center lg:text-left lg:mt-0">
                        <h3 className="font-bold text-lg lg:text-xl">Our Services</h3>
                        <li className="text-base lg:text-lg">
                            <Link href="/services/taxServices">Tax Services</Link>
                        </li>
                        <li className="text-base lg:text-lg">
                            <Link href="/services/">Business Consulting Support</Link>
                        </li>
                        <li className="text-base lg:text-lg">
                            <Link href="/services/businessServices">Business Registration</Link>
                        </li>
                        <li className="text-base lg:text-lg">
                            <Link href="/services/AI_Consultancy">AI Consultant</Link>
                        </li>
                    </ul>

                    <ul className="mt-6 space-y-2 text-center lg:text-left  lg:mt-0 lg:block   shadow-2xl rounded-full py-4 border border-r-cyan-400 transition-all duration-400 hover:border-l-lime-400  px-4 flex">
                        {/* <h3 className="font-bold">Social</h3> */}
                        <li><Link href={'https://wa.me/message/WPVWNGXIEDZYC1'}>
                            <Image src={whatsapp} alt="logo" className="w-[50px] rounded-full " />
                        </Link></li>
                        <li><Link href={'/'}>
                            <Image src={twitter} alt="logo" className="w-[40px] rounded-full" />
                        </Link></li>
                        <li><Link href={'/'}>
                            <Image src={instagram} alt="logo" className="w-[40px] rounded" />
                        </Link></li>
                        <li><Link href={'/'}>
                            <Image src={youtube} alt="logo" className="w-[40px] rounded" />
                        </Link></li>


                    </ul>
                </div>
            </div>



        </Wrapper>
    )
}

export default Footer
