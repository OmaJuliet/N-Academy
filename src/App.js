import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Blog from './Pages/Blog';
import Course from './Pages/Course';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;
