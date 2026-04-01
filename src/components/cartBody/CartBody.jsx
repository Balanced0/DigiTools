import React from 'react';
import Writing from '../../assets/products/writing_2327400 1.png'
import DesignTool from '../../assets/products/design-tool.png'
import Operation from '../../assets/products/operation.png'
import Portfolio from '../../assets/products/portfolio.png'
import ShoppingCart from '../../assets/products/shopping-cart.png'
import SocialMedia from '../../assets/products/social-media.png'
import Camera from '../../assets/products/camera.png'

const iconsList = {
    ai:  Writing,
    template: DesignTool,
    assets: Camera,
    automation: Operation,
    resume: Portfolio,
    social: SocialMedia
};

const CartBody = ({cartItems}) => {
    return (
        <div class="container mx-auto mb-32">
            <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title mb-6">Your Cart</h2>
                <div className="mb-4">
                    {
                        cartItems.map((item) =>{
                            return(
                                <div className="card card-body bg-base-200 mb-6">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center justify-center">
                                            <div className="border border-neutral-200 w-13 h-13 rounded-full flex items-center justify-center">
                                                <img src={iconsList[item.icon]}></img>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-xl mb-2">{item.name}</p>
                                                <p className="font-medium text-[#627382]">${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="text-[#FF3980] font-bold cursor-pointer">Remove</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-between items-center mb-7">
                    <div className="text-[##627382]">Total:</div>
                    <div className="font-bold text-2xl">$0</div>
                </div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-4 rounded-full">Proceed to Checkout</button>
            </div>
            </div>
        </div>
    );
};

export default CartBody;