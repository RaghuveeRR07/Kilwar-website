
import {BrowserRouter,Routes, Route,} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import Footer from './components/Footer';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import About from './About/About.jsx';
import Services from './Services/Services.jsx';
import Gallery from './Gallery/Gallery.jsx';



function App() {



  return (
    <>
    <div className="bg-mycustomcolor h-max">
    <Navbar/>
      <BrowserRouter>
      
      <Routes> 
      <Route path="/" element={<Home/>} /> 
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Gallery" element={<Gallery/>} />
</Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
    

    
  )
}

export default App
