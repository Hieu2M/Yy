import React from 'react';

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
    return (
        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex-shrink-0 text-teal-600">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;