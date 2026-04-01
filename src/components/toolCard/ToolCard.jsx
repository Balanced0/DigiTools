import React from 'react';
import Writing from '../../assets/products/writing_2327400 1.png'

const ToolCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="border border-neutral-200 w-13 h-13 rounded-full flex items-center justify-center relative">
                        <div className="badge badge-soft badge-warning absolute ">Warning</div>
                        <img src={Writing} className=""></img>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">AI Writing Pro</h3>
                        <p className="text-[#627382] mb-4">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <p>
                            <span className="text-2xl font-bold">$29</span>
                            <span className="text-[#627382]">/mo</span>
                        </p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 w-full rounded-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;