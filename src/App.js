import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Contact from './components/contact/Contact';
import Premium from './components/premium/Premium';
import { useState } from 'react';

function App() {
 
  const [toggleSideBar, setToggleSideBar] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
        <div className='hero-box'>
          <Routes>
            <Route path="/" element={<Navbar toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/premium" element={<Premium />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
