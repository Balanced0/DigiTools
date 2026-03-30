import React from 'react';
import bannerImage from '../../assets/banner.png';
import purpleBall from '../../assets/purpleBall.png';
import play from '../../assets/Play.png';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg"
                    />
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full font-medium bg-[#E1E7FF] px-4 py-2 mb-4">
                            <img src={purpleBall}></img>
                            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className="text-7xl font-extrabold mb-4">Supercharge Your Digital Workflow</h1>
                        <p className="text-[#627382] text-lg mb-8">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 text-white rounded-full">Explore Products</button>
                            <div className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-[2px]">
                                <button className="bg-white px-4 py-3 rounded-full flex gap-1 items-center"><img src={play} className="w-4 h-4"></img><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Watch Demo</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;