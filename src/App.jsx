import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import Steps from './components/steps/Steps'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import ToolCard from './components/toolCard/ToolCard'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Main></Main>
      <ToolCard></ToolCard>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
