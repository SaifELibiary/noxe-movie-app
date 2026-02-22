import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import AllHome from './components/AllHome';
import TrendingMovies from './components/TrendingMovies';
import TrendingTV from './components/TrendingTV';
import Footer from './components/Footer';
// import AuthPage from './components/AuthPage';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617]">
        <Routes>
          <Route path="/" element={
            <>
              
              <AllHome />
              <div className="space-y-10">
                <TrendingMovies />      
                <TrendingTV />
              </div>
              <Footer />
            </>
          } />

          {/* صفحة التفاصيل - بتستقبل ID متغير */}
          <Route path="/details/:id" element={<Details />} />

          {/* صفحات الـ Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;