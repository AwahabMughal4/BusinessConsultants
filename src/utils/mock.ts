import { ServiceDetail, ServiceSummary } from "./types";
import businessService from '@/assets/businessServices.png'
import taxService from '@/assets/taxService.png'
export const Services: ServiceSummary[] = [
  {
    id: 1,
    service: 'Business Registration',
    image: businessService,
    category:'businessServices',
   
  },
  {
    id: 2,
    service: 'Tax Services',
    image: taxService,
    category:'taxServices',
   
  },
  {
    id: 3,
    service: 'Brand/IP Registration',
    image: businessService,
    category:'brandIPServices',

  },
  {
    id: 4,
    service: 'Service 003',
    image: businessService,
    category:'Nil'
  }
];

export const businessServices: ServiceDetail[] = [
  {
    id: 1,
    category: 'businessServices',
    name: 'Private Limited Company Registration (Other than Licensed entity)',
    price: 'Rs. 12,000',
    completionTime: '2 - 3 Working Days',
    requirements: [
      'Three Names of the proposed company',
      'Neat and Clear Scanned copies of CNICs of all the proposed Directors / subscribers',
      'NTN of the proposed directors / subscribers',
      'Registered address / correspondence address of the proposed Company',
      'The principal business of the proposed company',
      'Nature of the business activity',
      'Authorized Capital',
      'Paid up Capital',
      'Value per share e.g. Rs. 10, Rs. 50 or Rs. 100 etc',
      'Combination of Shares agreed to be subscribed by each director / subscriber',
      'Name of the Chief Executive of the Proposed Company',
      'Authorization from other subscribers (For Offline only)',
      'Telephone numbers and email ID of all the proposed directors',
      'Name of declarant person',
      'SECP login details of the proposed directors / subscribers (if any)'
    ]
  },
  {
    id: 2,
    category: 'businessServices',
    name: 'Single Member Company Registration (Other than Licensed entity)',
    price: 'Rs. 12,000',
    completionTime: '2 - 3 Working Days',
    requirements: [
      'Three Names of the proposed company',
      'Neat and Clear Scanned copies of CNICs of all the proposed Directors / subscribers',
      'NTN of the proposed directors / subscribers',
      'Registered address / correspondence address of the proposed Company',
      'The principal business of the proposed company',
      'Nature of the business activity',
      'Authorized Capital',
      'Paid up Capital',
      'Value per share e.g. Rs. 10, Rs. 50 or Rs. 100 etc',
      'Name of the Chief Executive of the Proposed Company',
      'Telephone numbers and email ID of all the proposed directors',
      'SECP login details of the proposed directors / subscribers (if any)'
    ]
  },
  {
    id: 3,
    category: 'businessServices',
    name: 'Limited Liability Partnership Registration (LLP) (Other than Licensed entity)',
    price: 'Rs. 25,000',
    completionTime: '7 - 10 Working Days',
    requirements: [
      'Three Names of the proposed company',
      'Neat and Clear Scanned copies of CNICs of all the proposed Directors / subscribers',
      'Partnership deeds duly executed',
      'NTN of the proposed directors / subscribers',
      'Registered address / correspondence address of the proposed Company',
      'The principal business of the proposed LLP',
      'Nature of the business activity',
      'Authorized Capital',
      'Paid up Capital',
      'Value per share e.g. Rs. 10, Rs. 50 or Rs. 100 etc',
      'Combination of Shares agreed to be subscribed by each director / subscriber',
      'Name of the Chief Executive of the Proposed Company',
      'Authorization from other subscribers (For Offline only)',
      'Telephone numbers and email ID of all the proposed directors',
      'Name of declarant person',
      'SECP login details of the proposed directors / subscribers (if any)'
    ]
  },
  {
    id: 4,
    category: 'businessServices',
    name: 'Partnership or AOP Registration',
    price: 'Rs. 25,000',
    completionTime: '5 - 7 Working Days',
    requirements: [
      'Partnership Deed',
      'Signed Partnership Form',
      'Authorization of principal Officer',
      'Color copy of CNICs of Partners',
      'Rent agreement/ownership docs of Office premises',
      'Letterhead',
      'Latest paid electricity bill',
      'Phone Number',
      'Email address'
    ]
  },
  {
    id: 5,
    category: 'businessServices',
    name: 'NPO Registration',
    price: 'Rs. 200,000',
    completionTime: '3 - 4 Months',
    requirements: [
      'Memorandum and articles of Association',
      'Authorization of principal Officer',
      'Color copy of CNICs of Partners',
      'Rent agreement/ownership docs of Office premises',
      'Letterhead',
      'Latest paid electricity bill',
      'Phone Number',
      'Email address',
      'NOC from Home Department'
    ]
}
];

export const taxServices: ServiceDetail[] = [
{
  id: 1,
  category: 'taxServices',
  name: 'NTN Registration – Salaried',
  price: 'Rs. 400',
  completionTime: '1 - 2 Working Days',
  requirements: [
    'Color copy of CNIC',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address'
  ]
},
{
  id: 2,
  category: 'taxServices',
  name: 'NTN Registration – Business',
  price: 'Rs. 2,500',
  completionTime: '1 - 2 Working Days',
  requirements: [
    'Color copy of CNIC',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address'
  ]
},
{
  id: 3,
  category: 'taxServices',
  name: 'NTN Registration – Partnership or AOP',
  price: 'Rs. 7,000',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'Partnership Deed',
    'Partnership registration certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address'
  ]
},
{
  id: 4,
  category: 'taxServices',
  name: 'NTN Registration – Company',
  price: 'Rs. 15,000',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'Incorporation Certificate',
    'Memorandum & Articles of Association',
    'Partnership registration certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address'
  ]
},
{
  id: 5,
  category: 'taxServices',
  name: 'NTN Registration – NPO',
  price: 'Rs. 15,000',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'NTN of all members',
    'Registration Certificate',
    'Constitution of NPO',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 6,
  category: 'taxServices',
  name: 'Quarterly Withholding Statements Tax Filing',
  price: 'Minimum Fee: Rs. 5,000',
  completionTime: '3 - 4 Working Days',
  requirements: [
    'Withholding Data for the quarter',
    'Bank Statement',
    'Tax payment evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 7,
  category: 'taxServices',
  name: 'Annual Income Tax Filing- Salaried',
  price: 'Rs. 4,000',
  completionTime: '1 - 2 Working Days',
  requirements: [
    'Salary Certificate',
    'Bank Statement',
    'Tax deduction evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 8,
  category: 'taxServices',
  name: 'Annual Income Tax Filing- Sole Proprietor',
  price: 'Rs. 7,500',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'Bank Statement',
    'Tax deduction evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 9,
  category: 'taxServices',
  name: 'Annual Income Tax Filing- Partnership/PVT Company',
  price: 'Rs. 15,000',
  completionTime: '5 - 7 Working Days',
  requirements: [
    'Partnership Deed',
    'Financial Statements',
    'Bank Statement',
    'Tax deduction evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 10,
  category: 'taxServices',
  name: 'Annual Income Tax Filing- NPO/Charitable Trusts',
  price: 'Rs. 20,000',
  completionTime: '5 - 7 Working Days',
  requirements: [
    'Bank Statement',
    'Tax deduction evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 11,
  category: 'taxServices',
  name: 'GST Registration',
  price: 'Rs. 15,000',
  completionTime: '3 - 5 Working Days',
  requirements: [
    'Company incorporation certificate / Partnership deed',
    'Bank Account Maintenance Certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 12,
  category: 'taxServices',
  name: 'Monthly Federal / Provincial Sales Tax Return Filing',
  price: 'Minimum Fee: Rs. 5,000',
  completionTime: '1 - 2 Working Days',
  requirements: [
    'Bank Statement',
    'Sales Tax Invoices',
    'Tax payment evidence',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 13,
  category: 'taxServices',
  name: 'PST Registration - Individual',
  price: 'Rs. 7,000',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'Bank Account Maintenance Certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 14,
  category: 'taxServices',
  name: 'PST Registration - Company',
  price: 'Rs. 12,000',
  completionTime: '3 - 5 Working Days',
  requirements: [
    'Bank Account Maintenance Certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address',
    'Any other document as required by the concerned authority'
  ]
},
{
  id: 15,
  category: 'taxServices',
  name: 'PST Registration - Partnership',
  price: 'Rs. 10,000',
  completionTime: '2 - 3 Working Days',
  requirements: [
    'Bank Account Maintenance Certificate',
    'Authorization of principal Officer',
    'Color copy of CNICs of Partners',
    'Rent agreement/ownership docs of Office premises',
    'Letterhead',
    'Latest paid electricity bill',
    'Phone Number',
    'Email address',
    'Any other document as required by the concerned authority'
  ]
}
];

  export const brandIPServices: ServiceDetail[] = [
  {
    id: 1,
    category: 'brandIPServices',
    name: 'Trademark Registration',
    price: 'Rs. 70,000',
    completionTime: '6 - 9 Months',
    requirements: [
      'Name and address of applicant',
      'Brand Name',
      'Class of registration',
      'Authorization form',
      'Description of goods/services'
    ]
  },
  {
    id: 2,
    category: 'brandIPServices',
    name: 'Copyright Registration',
    price: 'Rs. 150,000',
    completionTime: '6 - 9 Months',
    requirements: [
      'Name and address of applicant',
      'Nature of the work',
      'Sample of work',
      'Authorization form'
    ]
  },
  {
    id: 3,
    category: 'brandIPServices',
    name: 'Patent Registration',
    price: 'Rs. 200,000',
    completionTime: '1 - 2 Years',
    requirements: [
      'Name and address of applicant',
      'Title of invention',
      'Description of invention',
      'Claims',
      'Drawings (if any)',
      'Abstract',
      'Authorization form'
    ]
  }
  ];
