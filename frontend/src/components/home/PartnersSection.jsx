import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png',
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/150px-Microsoft_Azure.svg.png',
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/512px-Google_Cloud_logo.svg.png',
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png',
    },
  ];

  // return (
  //   <section className="py-16 bg-white">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <h2 className="text-2xl md:text-3xl font-bold text-[#1e5aa8] text-center mb-4">
  //         Leverage Our Technology Partnerships
  //       </h2>
  //       <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
  //         Over the years, Mutex Corp has formed strategic partnerships with leading technology companies
  //         that share our passion for innovation. Working together, we help our clients enhance operational
  //         agility, increase revenue, and maintain a competitive advantage.
  //       </p>

  //       <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
  //         {partners.map((partner, index) => (
  //           <div
  //             key={index}
  //             className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
  //           >
  //             <img
  //               src={partner.logo}
  //               alt={partner.name}
  //               className="h-12 md:h-16 w-auto object-contain"
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default PartnersSection;