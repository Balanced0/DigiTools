import React from 'react';

const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="container mx-auto flex flex-col gap-10 justify-center py-16 md:flex-row lg:gap-32">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-white mb-3">50K+</h1>
                    <h3 className="text-white text-2xl font-medium">Active Users</h3>
                </div>
                <div className="divider before:bg-white after:bg-white md:divider-horizontal"></div>
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-white mb-3">200+</h1>
                    <h3 className="text-white text-2xl font-medium">Premium Tools</h3>
                </div>
                <div className="divider before:bg-white after:bg-white md:divider-horizontal"></div>
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-white mb-3">4.9</h1>
                    <h3 className="text-white text-2xl font-medium">Rating</h3>
                </div>
            </div>
        </div>
    );
};

export default Stats;