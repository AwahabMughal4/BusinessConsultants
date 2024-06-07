import React from 'react';
import { businessServices, taxServices, brandIPServices } from '@/utils/mock';
import { ServiceDetail } from '@/utils/types';

type CategoryProps = {
  category: 'brandIPServices' | 'taxServices' | 'businessServices';
};

const servicesMap: Record<string, ServiceDetail[]> = {
  businessServices,
  taxServices,
  brandIPServices,
};


const CheckCategory: React.FC<CategoryProps> = ({ category }) => {
  const services = servicesMap[category] || [];

  return (
    <div className="px-6 py-10 bg-gradient-to-r from-slate-50 to-zinc-50">
      <h2 className="mb-10 text-3xl font-bold text-center text-blue-800">{` ${category}`}</h2>
      {services.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-blue-400"
            >
              <h3 className="mb-3 text-xl font-semibold text-blue-900">{service.name}</h3>
            
              <p className="mb-4 text-gray-700">
                <span className="font-semibold text-blue-800">Completion Time:</span> {service.completionTime}
              </p>
              <h4 className="mb-2 text-lg font-semibold text-blue-800">Requirements:</h4>
              <ul className="ml-4 space-y-1 text-gray-700 list-disc">
                {(service.requirements || []).map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No services available for this category.</p>
      )}
    </div>
  );
};

export default CheckCategory;
