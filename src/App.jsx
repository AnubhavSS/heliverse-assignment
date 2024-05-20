import './App.css'
import Header from './components/Header'
import Motion from './components/Motion'
import Purchase from './components/Purchase'
import ApplySection from './components/ApplySection'
import SupportSection from './components/SupportSection'
import BottomSection from './components/BottomSection'
import Footer from './components/Footer'


function App() {


  return (
    <div>
     <Header/>
     <div className='flex flex-col justify-center items-center gap-20'>
     <Motion/>
     <Purchase/>
     <ApplySection/>
     <SupportSection/>
     <BottomSection/>
 
     </div>
   <Footer/>
    </div>
  )
}

export default App
