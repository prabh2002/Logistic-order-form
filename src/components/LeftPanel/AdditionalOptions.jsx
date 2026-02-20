import React, { useState } from "react";
import "./AdditionalOptions.css";

// --- Icons ---
const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const AdditionalOptions = () => {
  // --- STATE MANAGEMENT ---
  // Ready to be lifted up to Home.jsx to use in your order summary
  const [options, setOptions] = useState({
    fragile: false,
    insurance: false,
  });

  // --- HANDLERS ---
  const toggleOption = (optionName) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: !prevOptions[optionName],
    }));
  };

  return (
    <div className="options-card">
      {/* Header */}
      <div className="card-header">
        <div className="red-bar"></div>
        <h3>Additional Options</h3>
      </div>

      {/* Options Container */}
      <div className="options-grid">
        
        {/* Fragile Option Card */}
        <div 
          className={`option-box ${options.fragile ? "active" : ""}`}
          onClick={() => toggleOption("fragile")}
        >
          <div className="icon-circle fragile-icon">
            <WarningIcon />
          </div>
          <div className="option-text">
            <h4>Fragile</h4>
            <p>Handle with care</p>
          </div>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              checked={options.fragile} 
              readOnly 
            />
            <span className="slider"></span>
          </div>
        </div>

        {/* Insurance Option Card */}
        <div 
          className={`option-box ${options.insurance ? "active" : ""}`}
          onClick={() => toggleOption("insurance")}
        >
          <div className="icon-circle insurance-icon">
            <ShieldIcon />
          </div>
          <div className="option-text">
            <h4>Insurance</h4>
            <p>Full coverage</p>
          </div>
          <div className="toggle-switch">
            <input 
              type="checkbox" 
              checked={options.insurance} 
              readOnly 
            />
            <span className="slider"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdditionalOptions;