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
import { Suspense, useState } from 'react'
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
  return (
    <>
      <Navbar cartItems={cartItems}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main cartItems={cartItems} cost={cost} setCost={setCost}></Main>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <ToolCardBody toolsPromise={toolsPromise} cartItems={cartItems} setCartItems={setCartItems} cost={cost} setCost={setCost}></ToolCardBody>
      </Suspense>
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
