import { StaticImageData } from "next/image";

// Interface for detailed service
export interface ServiceDetail {
  id: number;
  category: string;
  name: string;
  price: string;
  completionTime: string;
  requirements?: string[];
}

// Interface for summary service
export interface ServiceSummary {
  id: number;
  service: string;
  image: StaticImageData;
  category: string;
}
