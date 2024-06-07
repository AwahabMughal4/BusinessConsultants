
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'
function ServiceCard(props: {
  id:number;
  service:string;
  image:string|StaticImageData ;
   category : string;
}) {
  return (
    <Link href={`/services/${props.category}`}>
      <div className='px-4 py-2 my-3 border rounded shadow-2xl border-fuchsia-400 border-r-amber-500 sm: sm:mx-3'>
      <h3 className='py-2 text-xl font-bold '>{props.service}</h3>
        <Image src={props.image} alt="no" height={"600"} width={"600"} className='object-cover w-full my-5 sm:w-80 md:h-60' ></Image>
      </div>
    </Link>

  )
}

export default ServiceCard