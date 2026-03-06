import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container py-5">
      
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          Welcome to <span className="text-primary">CityMetrics</span>
        </h1>
        <p className="lead text-muted">
          Your centralized dashboard for population demographics across India.
        </p>
      </div>

      {/* Cards Section */}
      <div className="row g-4 mb-5">
        
        <div className="col-md-4">
          <Link to="/ap" className="text-decoration-none">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">🏛️</div>
                <h5 className="card-title fw-semibold">Andhra Pradesh</h5>
                <p className="card-text text-muted">
                  Explore population trends in the sunrise state.
                </p>
                <span className="text-primary fw-semibold">
                  View Data →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/tg" className="text-decoration-none">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">🏙️</div>
                <h5 className="card-title fw-semibold">Telangana</h5>
                <p className="card-text text-muted">
                  Deep dive into the growing urban hubs of TG.
                </p>
                <span className="text-primary fw-semibold">
                  View Data →
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/india" className="text-decoration-none">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">🇮🇳</div>
                <h5 className="card-title fw-semibold">All India</h5>
                <p className="card-text text-muted">
                  Top 15 metropolitan cities from across the nation.
                </p>
                <span className="text-primary fw-semibold">
                  View Data →
                </span>
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* Info Section */}
      <div className="row border-top pt-4">
        <div className="col-md-6 mb-3">
          <h6 className="text-primary fw-bold">Real-time Data</h6>
          <p className="text-muted">
            Connected directly to our MySQL backend for the latest 2026 estimates.
          </p>
        </div>
        <div className="col-md-6 mb-3">
          <h6 className="text-primary fw-bold">Clean Analytics</h6>
          <p className="text-muted">
            Optimized table views with automatic number formatting and PIN lookup.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Home;
