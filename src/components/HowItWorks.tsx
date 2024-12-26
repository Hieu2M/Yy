import React from 'react';
import { ClipboardList, Shield, UserCircle, Calendar, Clock } from 'lucide-react';

const steps = [
    {
        icon: <ClipboardList className="w-8 h-8" />,
        title: 'Fill out an intake form',
        status: 'completed'
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Insurance verification (2-3 days)',
        status: 'completed'
    },
    {
        icon: <UserCircle className="w-8 h-8" />,
        title: 'Choose your Provider',
        status: 'active'
    },
    {
        icon: <Calendar className="w-8 h-8" />,
        title: 'Schedule for an initial appointment (60 minutes)',
        status: 'upcoming'
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'Schedule for follow-up visits (20-40 minutes)',
        status: 'upcoming'
    }
];

const HowItWorks = () => {
    return (
        <section className="py-16 bg-[#1a3d4c] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-start">
                    <h2 className="text-6xl font-bold text-[#ffd700]">How it works?</h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600" />

                        {/* Steps */}
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    {/* Timeline dot */}
                                    <div className={`w-4 h-4 rounded-full border-2 z-10 ${
                                        step.status === 'completed' ? 'bg-[#ffd700] border-[#ffd700]' :
                                            step.status === 'active' ? 'bg-teal-400 border-teal-400' :
                                                'bg-transparent border-gray-400'
                                    }`} />

                                    {/* Step content */}
                                    <div className={`flex items-center gap-4 p-4 rounded-lg ${
                                        step.status === 'active' ? 'bg-teal-400/20' : 'bg-white/5'
                                    }`}>
                                        <div className="text-[#ffd700]">{step.icon}</div>
                                        <span className="text-lg">{step.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;