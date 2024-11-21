'use client';
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Reusable component for each goal (Vision/Mission item)
const GoalItem = ({ text }) => (
    <div className="relative flex pb-9">
        <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-full">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        </div>
        <div className="flex-grow pl-4">
            <p className="leading-relaxed">{text}</p>
        </div>
    </div>
);

function Objectives() {
    const visionGoals = [
        "Cultivate an entrepreneurship culture within the college and surrounding areas, fostering continuous generation of entrepreneurs",
        "Establish 'KIET Silicon Valley' as a beacon of innovation and entrepreneurship in the region.",
        "Provide R&D for industry to enable small/medium industries, to take up R&D activities and technology up-gradation.",
        "Empower local industries with cutting-edge research and tech upgrades to train unemployed youth for wage employment.",
        "Promote entrepreneurial success through indigenous technology and innovation."
    ];

    const missionGoals = [
        "Position KIET-TBI as a leader in entrepreneurship, focusing on ICT, Robotics, and Electronics.",
        "Support startups through innovation, IPR assistance, licensing, and comprehensive training programs.",
        "Disseminate knowledge through conferences and training for growth.",
        "Build strong institution-industry partnerships for collaborative innovation and technology commercialization.",
        "Promote knowledge dissemination via conferences and training for technological and business growth."
    ];

    return (
        <div className='max-w-screen-xl mx-auto text-gray-700'>
            <section className="w-full px-3 mb-1 overflow-x-hidden">
                <div className="grid px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-13 lg:grid-cols-10">
                    {/* Vision Section */}
                    <div className="mr-auto place-self-center lg:col-span-5">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                            Vision of TBI KIET
                        </h1>
                        <div className="flex mx-auto mt-6 mb-9">
                            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                        </div>

                        {visionGoals.map((goal, index) => (
                            <GoalItem key={index} text={goal} />
                        ))}
                    </div>

                    {/* Lottie Animation */}
                    <div className="lg:mt-0 lg:col-span-5 lg:flex place-items-center">
                        <Player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/525ef19e-9b6e-44db-83b0-c7787383f02b/0qB3Uq5iGy.json"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full px-3 mb-1 overflow-x-hidden">
                <div className="grid px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-13 lg:grid-cols-10">
                    {/* Lottie Animation */}
                    <div className="lg:mt-0 lg:col-span-5 lg:flex place-items-center">
                        <Player
                            autoplay
                            loop
                            mode="normal"
                            src="https://lottie.host/d5d50450-bf4b-49b0-a9e9-79186d514d30/FnJRja0fEQ.json"
                        />
                    </div>

                    {/* Mission Section */}
                    <div className="ml-auto place-self-center lg:col-span-5">
                        <h1 className="text-2xl font-semibold text-right text-gray-800 capitalize lg:text-3xl">
                            Mission of TBI KIET
                        </h1>
                        <div className="flex justify-end mx-auto mt-6 mb-9">
                            <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                            <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                        </div>

                        {missionGoals.map((goal, index) => (
                            <GoalItem key={index} text={goal} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Objectives;
