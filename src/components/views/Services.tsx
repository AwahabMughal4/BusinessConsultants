import ServiceCard from "@/components/ui/ServiceCard"
import Wrapper from "@/components/shared/Wrapper"
import { Services } from "@/utils/mock"
import { StaticImageData } from "next/image";

const Page = () => {
  const checkService = Services.slice(0, 3);
  return (
    <Wrapper>
      <div className="max-w-screen-xl mx-auto mt-10">
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-700">Our Business Services</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-16 ">
          {checkService.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image as StaticImageData}
              service={service.service}
              id={service.id}
              category = {service.category}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Page
