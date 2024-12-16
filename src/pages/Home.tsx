import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0">
          <img
            // src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Your Journey to Mental Wellness Starts Here
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl">
              Description ...
              {/*Professional, compassionate therapy services to help you navigate life's challenges and achieve emotional well-being.*/}
            </p>
            <Link
              to="/schedule"
              className="inline-flex items-center bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-teal-700 transition-colors text-sm sm:text-base"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600">
              Experience comprehensive mental health care tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Expert Therapists</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our licensed professionals bring years of experience and specialized training to help you.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Personalized Care</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Treatment plans tailored to your unique needs and goals.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Safe Space</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                A comfortable, confidential environment for your healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
            Schedule your consultation today and begin your journey to wellness.
          </p>
          <Link
            to="/schedule"
            className="inline-flex items-center bg-white text-teal-600 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;