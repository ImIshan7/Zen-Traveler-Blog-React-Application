import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import SriLanka from './pages/SriLanka';
import Japan from './pages/Japan';
import Nepal from './pages/Nepal';
import Bali from './pages/Bali';
import Maldives from './pages/Maldives';
import Thailand from './pages/Thailand';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/destinations" element={<Destinations />} />
                        <Route path="/destinations/sri-lanka" element={<SriLanka />} />
                        <Route path="/destinations/japan" element={<Japan />} />
                        <Route path="/destinations/nepal" element={<Nepal />} />
                        <Route path="/destinations/bali" element={<Bali />} />
                        <Route path="/destinations/maldives" element={<Maldives />} />
                        <Route path="/destinations/thailand" element={<Thailand />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;