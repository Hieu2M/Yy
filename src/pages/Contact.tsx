import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
  };

  return (
    // <div className="bg-gray-50 min-h-screen">
    //   {/* Contact Info Section */}
    //   <section className="bg-teal-600 text-white py-16">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //         <div className="flex flex-col items-center text-center">
    //           <Phone className="h-8 w-8 mb-4" />
    //           <h3 className="text-xl font-semibold mb-2">Phone</h3>
    //           <p>(555) 123-4567</p>
    //         </div>
    //         <div className="flex flex-col items-center text-center">
    //           <Mail className="h-8 w-8 mb-4" />
    //           <h3 className="text-xl font-semibold mb-2">Email</h3>
    //           <p>contact@healingminds.com</p>
    //         </div>
    //         <div className="flex flex-col items-center text-center">
    //           <MapPin className="h-8 w-8 mb-4" />
    //           <h3 className="text-xl font-semibold mb-2">Address</h3>
    //           <p>123 Therapy Street<br />Wellness City, ST 12345</p>
    //         </div>
    //         <div className="flex flex-col items-center text-center">
    //           <Clock className="h-8 w-8 mb-4" />
    //           <h3 className="text-xl font-semibold mb-2">Hours</h3>
    //           <p>Mon-Fri: 9AM-7PM<br />Sat: 10AM-4PM</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //
    //   {/* Contact Form Section */}
    //   <section className="py-16">
    //     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="bg-white rounded-lg shadow-md p-8">
    //         <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
    //         <form onSubmit={handleSubmit} className="space-y-6">
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700">First Name</label>
    //               <input
    //                 type="text"
    //                 required
    //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //               />
    //             </div>
    //             <div>
    //               <label className="block text-sm font-medium text-gray-700">Last Name</label>
    //               <input
    //                 type="text"
    //                 required
    //                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //               />
    //             </div>
    //           </div>
    //
    //           <div>
    //             <label className="block text-sm font-medium text-gray-700">Email</label>
    //             <input
    //               type="email"
    //               required
    //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //             />
    //           </div>
    //
    //           <div>
    //             <label className="block text-sm font-medium text-gray-700">Phone</label>
    //             <input
    //               type="tel"
    //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //             />
    //           </div>
    //
    //           <div>
    //             <label className="block text-sm font-medium text-gray-700">Subject</label>
    //             <input
    //               type="text"
    //               required
    //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //             />
    //           </div>
    //
    //           <div>
    //             <label className="block text-sm font-medium text-gray-700">Message</label>
    //             <textarea
    //               required
    //               rows={6}
    //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
    //             ></textarea>
    //           </div>
    //
    //           <button
    //             type="submit"
    //             className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors"
    //           >
    //             Send Message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </div>
      <div></div>
  );
};

export default Contact;