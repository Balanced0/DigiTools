import React from 'react';
import Writing from '../../assets/products/writing_2327400 1.png'
import DesignTool from '../../assets/products/design-tool.png'
import Operation from '../../assets/products/operation.png'
import Portfolio from '../../assets/products/portfolio.png'
import ShoppingCart from '../../assets/products/shopping-cart.png'
import SocialMedia from '../../assets/products/social-media.png'
import Camera from '../../assets/products/camera.png'
import { FiShoppingCart } from "react-icons/fi";
import {toast} from 'react-toastify';

const iconsList = {
    ai:  Writing,
    template: DesignTool,
    assets: Camera,
    automation: Operation,
    resume: Portfolio,
    social: SocialMedia
};

const CartBody = ({cartItems, setCartItems, cost, setCost}) => {
    const handleRemove = (cardRemove)=>{
        setCartItems(cartItems.filter((card) => card.id !== cardRemove.id));
        setCost(cost - cardRemove.price);
    }
    const handleCheckout = () =>{
        setCartItems(cartItems.filter(()=> cartItems.length === 0));
        setCost(cost - cost);
    }
    const notify = (item) => toast.error(`${item} Removed from Cart!`);
    const notifyCheckout = () => toast.success("Checkout Successful!");
    return (
        <div class="container mx-auto mb-32 p-4">
            <div className="card bg-base-100 shadow-sm">
                {
                    cartItems.length === 0?
                    (
                        <div className="card-body"> <h2 className="card-title mb-6">Your Cart</h2> <div className="flex justify-center items-center flex-col"> <FiShoppingCart className="mb-4 text-[#627382] mt-6" size={46}/> <p className="mb-28 font-bold text-[#627382] text-lg">Your cart is empty</p> </div> </div>
                    ):(
                        <div className="card-body">
                        <h2 className="card-title mb-6">Your Cart</h2>
                        <div className="mb-4">
                            {
                                cartItems.map((item) =>{
                                    return(
                                        <div key={item.id} className="card card-body bg-base-200 mb-6">
                                            <div className="flex gap-4 justify-between items-center">
                                                <div className="flex gap-4 items-center justify-center">
                                                    <div className="border border-neutral-200 w-13 h-13 rounded-full flex items-center justify-center">
                                                        <img src={iconsList[item.icon]}></img>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-xl mb-2">{item.name}</p>
                                                        <p className="font-medium text-[#627382]">${item.price}</p>
                                                    </div>
                                                </div>
                                                <div onClick={()=>{handleRemove(item),notify(item.name)}} className="text-[#FF3980] font-bold cursor-pointer">Remove</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex justify-between items-center mb-7">
                            <div className="text-[#627382]">Total:</div>
                            <div className="font-bold text-2xl">${cost}</div>
                        </div>
                        <button onClick={()=>{handleCheckout(); notifyCheckout()}} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 rounded-full">Proceed to Checkout</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CartBody;