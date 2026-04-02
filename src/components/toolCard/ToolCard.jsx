import React,{useState} from 'react';
import Writing from '../../assets/products/writing_2327400 1.png'
import DesignTool from '../../assets/products/design-tool.png'
import Operation from '../../assets/products/operation.png'
import Portfolio from '../../assets/products/portfolio.png'
import ShoppingCart from '../../assets/products/shopping-cart.png'
import SocialMedia from '../../assets/products/social-media.png'
import Camera from '../../assets/products/camera.png'
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';

const iconsList = {
    ai:  Writing,
    template: DesignTool,
    assets: Camera,
    automation: Operation,
    resume: Portfolio,
    social: SocialMedia
};

const badgeStyles = {
    "best-seller": "badge-warning",
    "popular": "badge-primary",
    "new": "badge-success"
}

const ToolCard = ({tool, cartItems, setCartItems, cost ,setCost}) => {
    const[isAdded, setIsAdded] = useState(false);
    const notify = () => toast.success(`${tool.name} Added to Cart!`);
    return (
        <div>
            <div className="card bg-base-100 shadow-sm flex flex-col h-full">
                <div className="card-body relative flex flex-col h-full">
                    <div className={`badge badge-soft ${badgeStyles[tool.tagType]} absolute right-2 top-2`}>{tool.tag}</div>
                    <div className="border border-neutral-200 w-13 h-13 rounded-full flex items-center justify-center">
                        <img src={iconsList[tool.icon]} className=""></img>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
                        <p className="text-[#627382] mb-4">{tool.description}</p>
                        <div className="mt-auto">
                            <span className="text-2xl font-bold">${tool.price}</span>
                            <span className="text-[#627382]">/{tool.period}</span>
                        </div>
                    </div>
                    <ul className="mt-auto flex flex-col gap-2 text-xs">
                        {
                            tool.features.map((feature, index) =>{
                                return(
                                    <li key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={()=>{setCartItems([...cartItems, tool]); setCost(cost + tool.price); setIsAdded(true); notify()}} disabled={isAdded} className={`btn font-bold py-4 w-full mt-auto rounded-full ${isAdded?"bg-green-600 text-white":"bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}>{isAdded? <span className="flex gap-2 justify-center items-center"><FaCheck /> Added to Cart!</span> : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;