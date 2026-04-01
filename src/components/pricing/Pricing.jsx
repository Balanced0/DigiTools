import React from 'react';

const Pricing = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-center">
                <h3 className="font-extrabold text-5xl mb-4 mt-32">Simple, Transparent Pricing</h3>
                <p className="text-[#627382] mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 mb-32 md:grid-cols-3">
                <div className="card bg-base-200 shadow-sm rounded-2xl flex flex-col">
                    <div className="card-body flex flex-col flex-1">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                                <p className="text-[#627382] mb-6">Perfect for getting started</p>
                                <p>
                                    <span className="text-4xl font-bold">$0</span>
                                    <span className="text-[#627382] text-xl">/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col flex-1 gap-2 text-xs">
                                 <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">1 project per month</span>
                                </li>
                            </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 w-full rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm rounded-2xl flex flex-col relative">
                    <div className="card-body">
                        <div className="badge badge-soft badge-warning absolute left-1/2 -translate-x-1/2 -translate-y-8.5 text-[#BB4D00] bg-[#FEF3C6]">Most Popular</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                                <p className="mb-6 text-white">Best for professionals</p>
                                <p>
                                    <span className="text-4xl font-bold text-white">$29</span>
                                    <span className="text-white text-xl">/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                 <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-white">Advanced analytics</span>
                                </li>
                            </ul>
                        <div className="mt-6">
                            <button className="btn font-bold py-4 w-full rounded-full"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-sm rounded-2xl flex flex-col">
                    <div className="card-body">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                                <p className="text-[#627382] mb-6">For teams and businesses</p>
                                <p>
                                    <span className="text-4xl font-bold">$99</span>
                                    <span className="text-[#627382] text-xl">/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                 <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="font-medium text-[#627382]">Custom branding</span>
                                </li>
                            </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 w-full rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;