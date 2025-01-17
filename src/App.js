import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Discover from './components/discover/Discover';
import AboutUs from './components/aboutus/AboutUs';
import Contact from './components/contact/Contact';
import Premium from './components/premium/Premium';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Sidebar from './components/common/sidebar/Sidebar'
import Albums from './components/albums/Albums';
import Artists from './components/artists/Artists';

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
              <Route path="/discover" element={<Discover />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/artists" element={<Artists />} />
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
