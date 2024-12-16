import React from 'react';
import { Check } from 'lucide-react';

const Services = () => {
  return (
    // <div className="bg-white">
    //   {/* Hero Section */}
    //   <section className="relative h-[400px]">
    //     <div className="absolute inset-0">
    //       <img
    //         src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    //         alt="Services"
    //         className="w-full h-full object-cover"
    //       />
    //       <div className="absolute inset-0 bg-black opacity-50"></div>
    //     </div>
    //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    //       <h1 className="text-4xl md:text-6xl font-bold text-white">Our Services</h1>
    //     </div>
    //   </section>
    //
    //   {/* Services Grid */}
    //   <section className="py-16">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
    //           <h3 className="text-2xl font-semibold mb-4">Individual Therapy</h3>
    //           <p className="text-gray-600 mb-6">
    //             One-on-one sessions focused on personal growth and healing.
    //           </p>
    //           <ul className="space-y-3">
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Anxiety and Depression</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Trauma Recovery</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Stress Management</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Personal Development</span>
    //             </li>
    //           </ul>
    //         </div>
    //
    //         <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
    //           <h3 className="text-2xl font-semibold mb-4">Couples Therapy</h3>
    //           <p className="text-gray-600 mb-6">
    //             Building stronger relationships through effective communication.
    //           </p>
    //           <ul className="space-y-3">
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Communication Skills</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Conflict Resolution</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Trust Building</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Intimacy Issues</span>
    //             </li>
    //           </ul>
    //         </div>
    //
    //         <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
    //           <h3 className="text-2xl font-semibold mb-4">Family Therapy</h3>
    //           <p className="text-gray-600 mb-6">
    //             Strengthening family bonds and improving dynamics.
    //           </p>
    //           <ul className="space-y-3">
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Parent-Child Relations</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Behavioral Issues</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Family Transitions</span>
    //             </li>
    //             <li className="flex items-center">
    //               <Check className="h-5 w-5 text-teal-600 mr-2" />
    //               <span>Blended Families</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //
    //   {/* Pricing Section */}
    //   <section className="py-16 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold mb-12 text-center">Our Rates</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="bg-white p-8 rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-4">Initial Consultation</h3>
    //           <p className="text-3xl font-bold mb-4">$150</p>
    //           <p className="text-gray-600">
    //             60-minute session to discuss your needs and create a treatment plan.
    //           </p>
    //         </div>
    //         <div className="bg-white p-8 rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-4">Individual Session</h3>
    //           <p className="text-3xl font-bold mb-4">$120</p>
    //           <p className="text-gray-600">
    //             50-minute one-on-one therapy session.
    //           </p>
    //         </div>
    //         <div className="bg-white p-8 rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-4">Couples/Family Session</h3>
    //           <p className="text-3xl font-bold mb-4">$180</p>
    //           <p className="text-gray-600">
    //             80-minute session for couples or family therapy.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
      <div></div>
  );
};

export default Services;