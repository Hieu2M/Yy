import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
    {
        title: 'Individual Therapy',
        description: 'One-on-one sessions focused on personal growth and healing.',
        image: '/images/zoomtherapy.jpg',
    },
    {
        title: 'Couples Therapy',
        description: 'Building stronger relationships through effective communication.',
        image: '/images/couple.jpg',
    },
    {
        title: 'Family Therapy',
        description: 'Strengthening family bonds and improving dynamics.',
        image: '/images/family.jpg',
    }
];

const ServiceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <div className="relative bg-gradient-to-r from-teal-600 to-teal-300 rounded-xl p-8">
            <div className="flex items-center">
                <div className="flex-1 text-white">
                    <h3 className="text-2xl font-bold mb-3">{services[currentSlide].title}</h3>
                    <p className="mb-4">{services[currentSlide].description}</p>
                    <div className="flex space-x-3">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/2 ml-8">
                    <img
                        src={services[currentSlide].image}
                        alt={services[currentSlide].title}
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default ServiceSlider;