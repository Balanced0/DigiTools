import React, {Suspense} from 'react';
import CartBody from '../cartBody/CartBody';
import ToolCardBody from '../toolCardBody/ToolCardBody';

const Main = ({toolsPromise, cartItems, setCartItems, cost, setCost, isProductsTab, setTab}) => {
    return (
        <div>
            <div className="container mx-auto text-center flex flex-col items-center justify-center">
                <h3 className="text-5xl font-extrabold mb-4 mt-32">Premium Digital Tools</h3>
                <p className="text-[#627382] mb-4">Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
                <div className="inline-flex rounded-full border border-neutral-200 p-0.5 mb-10">
                    <button onClick={()=>setTab(true)} className={`btn font-bold py-6 px-6 rounded-full ${isProductsTab? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"text-[#25065D] border-none bg-white"}`}>Products</button>
                    <button onClick={()=>setTab(false)} className={`btn font-bold py-6 px-6 rounded-full ${!isProductsTab? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":"text-[#25065D] border-none bg-white"}`}>Cart ({cartItems.length})</button>
                </div>
            </div>
            {
                isProductsTab? (
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                        <ToolCardBody toolsPromise={toolsPromise} cartItems={cartItems} setCartItems={setCartItems} cost={cost} setCost={setCost}></ToolCardBody>
                    </Suspense>
                ):(
                    <CartBody cartItems={cartItems} setCartItems={setCartItems} cost={cost} setCost={setCost}></CartBody>
                )
            }
        </div>
    );
};

export default Main;