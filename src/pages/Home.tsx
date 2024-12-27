import React from 'react';
import { ArrowRight, Brain, Users, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
import ServiceSlider from '../components/ServiceSlider';
import ClientGroups from '../components/ClientGroups';
import FAQSection from '../components/FAQSection';
import HowItWorks from "../components/HowItWorks.tsx";

const Home = () => {
  return (
      <div>
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0">
            <img
                src="/images/talking.jpg"
                alt="Peaceful setting"
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
                Professional, compassionate therapy services to help you navigate life's challenges and achieve emotional well-being.
              </p>
              <Link
                  to="https://intakeq.com/booking/ejjbvl"
                  className="inline-flex items-center bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-teal-700 transition-colors text-sm sm:text-base"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InfoCard
                  icon={<Brain size={24} />}
                  title="Mental Health Stigma"
                  description="We understand the cultural barriers that may prevent you from seeking mental health support. Our team provides culturally sensitive care in a safe, judgment-free environment."
              />
              <InfoCard
                  icon={<Users size={24} />}
                  title="A Familiar Feeling"
                  description="Our diverse team of therapists understands the unique challenges you face. We're here to help you navigate cultural expectations while maintaining your mental well-being."
              />
              <InfoCard
                  icon={<ClipboardCheck size={24} />}
                  title="Simplifying the Process"
                  description="Getting started with therapy shouldn't be complicated. We've made the process simple and accessible, helping you take the first step toward healing."
              />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <HowItWorks />

        {/* Services Slider Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ServiceSlider />
          </div>
        </section>

        {/* Client Groups Section */}
        <ClientGroups />

        {/* FAQ Section */}
        <FAQSection />

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
                to="https://intakeq.com/booking/ejjbvl"
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