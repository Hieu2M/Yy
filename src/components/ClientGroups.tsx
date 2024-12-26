import React from 'react';

const groups = [
    {
        title: 'Students',
        image: '/images/students.png',
    },
    {
        title: 'Immigrants',
        image: '/images/immigrant.png',
    },
    {
        title: 'Asian-Americans',
        image: '/images/asianamerican.png'
    },
    {
        title: 'Multiracial',
        image: '/images/multiracial.png',
    }
];

const ClientGroups = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Who we work with</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {groups.map((group, index) => (
                        <div key={index} className="text-center">
                            <div className="aspect-square mb-4">
                                <img
                                    src={group.image}
                                    alt={group.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="font-medium">{group.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientGroups;