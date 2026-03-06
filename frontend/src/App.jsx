import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExpenseTable from './components/ExpenseTable'; // Reusing your table component
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // State for different datasets
  const [apCities, setApCities] = useState([]);
  const [tgCities, setTgCities] = useState([]);
  const [indiaCities, setIndiaCities] = useState([]);

  // Fetch all data on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [apRes, tgRes, indiaRes] = await Promise.all([
          fetch('https://cities-3a5v.onrender.com/api/ap_cities').then(res => res.json()),
          fetch('https://cities-3a5v.onrender.com/api/tg_cities').then(res => res.json()),
          fetch('https://cities-3a5v.onrender.com/api/india_cities').then(res => res.json())
        ]);

        setApCities(apRes);
        setTgCities(tgRes);
        setIndiaCities(indiaRes);
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchAllData();
  }, []);

return (
  <Router>
    <div className="bg-light min-vh-100">
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Population Dashboard</a>
          <div>
            <a className="btn btn-outline-light me-2" href="/ap">AP</a>
            <a className="btn btn-outline-light me-2" href="/tg">TG</a>
            <a className="btn btn-outline-light" href="/india">India</a>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <Routes>
          
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* AP Route */}
          <Route path="/ap" element={
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h2 className="text-primary mb-4 fw-bold">
                  Andhra Pradesh: Population Data
                </h2>
                <ExpenseTable data={apCities} title="AP Cities" />
              </div>
            </div>
          } />

          {/* TG Route */}
          <Route path="/tg" element={
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h2 className="text-success mb-4 fw-bold">
                  Telangana: Population Data
                </h2>
                <ExpenseTable data={tgCities} title="TG Cities" />
              </div>
            </div>
          } />

          {/* India Route */}
          <Route path="/india" element={
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h2 className="text-dark mb-4 fw-bold">
                  India: Top Cities per State
                </h2>
                <ExpenseTable data={indiaCities} title="National Hubs" />
              </div>
            </div>
          } />

        </Routes>
      </div>
    </div>
  </Router>
)

}

export default App;
