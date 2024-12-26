import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'What groups of Asians or Asian Americans do you work with?',
        answer: 'We work with individuals across all Asian groups, honoring the unique cultural needs and backgrounds of each client. Our therapists have experience working with diverse Asian communities.'
    },
    {
        question: 'What are the factors that put Asian Americans at risk?',
        answer: 'Various factors including cultural adjustment, intergenerational conflict, discrimination, and pressure to meet cultural expectations can impact mental health in Asian American communities.'
    },
    {
        question: 'How can parents of Asian American respond to negative attitudes from other groups?',
        answer: 'We provide guidance on addressing discrimination, building resilience, and maintaining cultural pride while navigating challenges in multicultural environments.'
    }
];

const FAQSection = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">FAQs about our mental health services for Asian communities</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-white rounded-lg shadow-sm">
                            <summary className="flex justify-between items-center cursor-pointer p-6">
                                <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                                <ChevronDown className="flex-shrink-0 ml-2 w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-6">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;