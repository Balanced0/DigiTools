import React from 'react';
import UserLogo from '../../assets/user.png';
import PackageLogo from '../../assets/package.png';
import RocketLogo from '../../assets/rocket.png';

const Steps = () => {
    return (
        <div className="bg-[#F9FAFC]">
            <div className="container mx-auto text-center p-4">
                <h2 className="font-extrabold text-5xl pt-32 text-black">Get Started in 3 Steps</h2>
                <p className="text-[#627382] mt-4 mb-10">Start using premium digital tools in minutes, not hours.</p>
                <div className="pb-32 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="card relative bg-base-100 shadow-sm">
                        <div className="absolute top-4 right-4 h-10 w-10 rounded-full text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center">
                            <p className="text-sm font-bold text-white">01</p>
                        </div>
                        <div className="rounded-full flex items-center justify-center">
                            <img src={UserLogo} className="bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full p-5 mt-20"></img>
                        </div>
                        <div className="card-body">
                            <h3 className="font-bold text-2xl mb-4">Create Account</h3>
                            <p className="text-[#627382] mb-20">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card relative bg-base-100 shadow-sm">
                        <div className="absolute top-4 right-4 h-10 w-10 rounded-full text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center">
                            <p className="text-sm font-bold text-white">02</p>
                        </div>
                        <div className="rounded-full flex items-center justify-center">
                            <img src={PackageLogo} className="bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full p-5 mt-20"></img>
                        </div>
                        <div className="card-body">
                            <h3 className="font-bold text-2xl mb-4">Choose Products</h3>
                            <p className="text-[#627382] mb-20">Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className="card relative bg-base-100 shadow-sm">
                        <div className="absolute top-4 right-4 h-10 w-10 rounded-full text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center">
                            <p className="text-sm font-bold text-white">03</p>
                        </div>
                        <div className="rounded-full flex items-center justify-center">
                            <img src={RocketLogo} className="bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full p-5 mt-20"></img>
                        </div>
                        <div className="card-body">
                            <h3 className="font-bold text-2xl mb-4">Start Creating</h3>
                            <p className="text-[#627382] mb-20">Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;