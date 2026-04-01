import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#101727]">
            <div className="container mx-auto pt-32 grid grid-cols-2 gap-12 px-4 md:grid-cols-3 lg:grid-cols-5">
                <div className="text-white">
                    <h3 className="mb-4 text-4xl font-medium">DigiTools</h3>
                    <p className="text-wrap">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className="text-white">
                    <h4 className="text-xl font-medium mb-4">Product</h4>
                    <p className="mb-4">Features</p>
                    <p className="mb-4">Pricing</p>
                    <p className="mb-4">Templates</p>
                    <p className="mb-4">Integrations</p>
                </div>
                <div className="text-white">
                    <h4 className="text-xl font-medium mb-4">Company</h4>
                    <p className="mb-4">About</p>
                    <p className="mb-4">Blog</p>
                    <p className="mb-4">Careers</p>
                    <p className="mb-4">Press</p>
                </div>
                <div className="text-white">
                    <h4 className="text-xl font-medium mb-4">Resources</h4>
                    <p className="mb-4">Documentation</p>
                    <p className="mb-4">Help Center</p>
                    <p className="mb-4">Community</p>
                    <p className="mb-4">Contact</p>
                </div>
                <div className="text-white">
                    <h4 className="text-xl font-medium mb-4">Social Links</h4>
                    <div className="flex gap-4">
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-20 mb-8">
                <div className="border-t border-white opacity-50"></div>
            </div>
            <div className="text-white container mx-auto pb-8 flex flex-wrap justify-between px-4">
                <div className="mb-4 mr-8 md:mb-0">
                    <p className="text-[#FAFAFA]/50">© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-[#FAFAFA]/50">Privacy Policy</p>
                    <p className="text-[#FAFAFA]/50">Terms of Service</p>
                    <p className="text-[#FAFAFA]/50">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;