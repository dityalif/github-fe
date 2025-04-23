import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="bg-gradient-to-bl from-[#161B22] via-[#161B22] to-[#4682B4] min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}