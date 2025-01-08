import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Discover from './components/discover/Discover';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='hero-box'>
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
