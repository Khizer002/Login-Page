import { useLocation, useNavigate } from "react-router-dom";
import "./LoggedIn.css";

const LoggedIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.userEmail || "Guest";

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="success-icon">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.2" />
            <circle cx="50" cy="50" r="35" fill="#10b981" />
            <path
              d="M30 50 L45 65 L70 35"
              stroke="white"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="welcome-title">Welcome! 🎉</h1>
        <p className="welcome-email">{email}</p>
        <p className="welcome-subtitle">You have successfully logged in to your account</p>

        <div className="dashboard-content">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <div className="info-text">
              <h3>Email Verified</h3>
              <p>Your account is active</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🔒</div>
            <div className="info-text">
              <h3>Secure Access</h3>
              <p>Your data is protected</p>
            </div>
          </div>
        </div>

        <button onClick={() => navigate("/")} className="logout-btn">
          <span>Logout</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="16 17 21 12 16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoggedIn;