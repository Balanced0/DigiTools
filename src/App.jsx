import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import Steps from './components/steps/Steps'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import ToolCard from './components/toolCard/ToolCard'
import Pricing from './components/pricing/Pricing'
import ToolCardBody from './components/toolCardBody/ToolCardBody'
import { Suspense, useState, useRef } from 'react'
import CartBody from './components/cartBody/CartBody'
import { ToastContainer } from 'react-toastify';

const fetchTools = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}
const toolsPromise = fetchTools();
function App() {
  const[cartItems, setCartItems] = useState([]);
  const[cost, setCost] = useState(0);
  const[isProductsTab, setTab] = useState(true);
  const cartRef = useRef(null);
  const goToCart = () => {
      setTab(false);
      if (cartRef.current) {
        cartRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };
  return (
    <>
      <Navbar cartItems={cartItems} isProductsTab={isProductsTab} setTab={setTab} goToCart={goToCart}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main toolsPromise={toolsPromise} cartItems={cartItems} setCartItems={setCartItems} cost={cost} setCost={setCost} isProductsTab={isProductsTab} setTab={setTab} cartRef={cartRef}></Main>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
            />
    </>
  )
}

export default App
