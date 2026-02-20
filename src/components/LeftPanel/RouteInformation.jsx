import React, { useState } from "react";
import "./RouteInformation.css";

const RouteInformation = ({ consigner, setConsigner, consignee, setConsignee }) => {

  // --- HANDLERS ---
  const handleConsignerChange = (e) => {
    setConsigner((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleConsigneeChange = (e) => {
    setConsignee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="route-card">
      {/* Header */}
      <div className="card-header">
        <div className="red-bar"></div>
        <h3>Route Information</h3>
      </div>

      {/* Timeline and Forms Container */}
      <div className="timeline-container">
        {/* The continuous vertical line */}
        <div className="timeline-line"></div>

        {/* --- CONSIGNER SECTION --- */}
        <div className="timeline-section">
          <div className="timeline-dot"></div>
          <h4 className="section-title">CONSIGNER (SENDER)</h4>
          
          <div className="form-grid">
            <div className="input-group full-width">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Name" value={consigner.fullName || ""} onChange={handleConsignerChange} className="input-field" />
            </div>
            
            <div className="input-group full-width">
              <label>Mobile Number</label>
              <input type="tel" name="mobileNumber" placeholder="+91 " value={consigner.mobileNumber || ""} onChange={handleConsignerChange} className="input-field" />
            </div>

            <div className="input-group full-width">
              <label>Address</label>
              <input type="text" name="address" placeholder="address" value={consigner.address || ""} onChange={handleConsignerChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>City</label>
              <input type="text" name="city" placeholder="city" value={consigner.city || ""} onChange={handleConsignerChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>State</label>
              <input type="text" name="state" placeholder="state" value={consigner.state || ""} onChange={handleConsignerChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>Country</label>
              <input type="text" name="country" placeholder="country" value={consigner.country || ""} onChange={handleConsignerChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>Pincode</label>
              <input type="text" name="pincode" placeholder="area pincode" value={consigner.pincode || ""} onChange={handleConsignerChange} className="input-field" />
            </div>
          </div>
        </div>

        {/* --- CONSIGNEE SECTION --- */}
        <div className="timeline-section">
          <div className="timeline-dot"></div>
          <h4 className="section-title">CONSIGNEE (RECEIVER)</h4>
          
          <div className="form-grid">
            <div className="input-group full-width">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Full Name" value={consignee.fullName || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>
            
            <div className="input-group full-width">
              <label>Mobile Number</label>
              <input type="tel" name="mobileNumber" placeholder="+91" value={consignee.mobileNumber || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>

            <div className="input-group full-width">
              <label>Address</label>
              <input type="text" name="address" placeholder="address" value={consignee.address || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>City</label>
              <input type="text" name="city" placeholder="city" value={consignee.city || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>State</label>
              <input type="text" name="state" placeholder="state" value={consignee.state || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>Country</label>
              <input type="text" name="country" placeholder="country" value={consignee.country || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>

            <div className="input-group half-width">
              <label>Pincode</label>
              <input type="text" name="pincode" placeholder="area pincode" value={consignee.pincode || ""} onChange={handleConsigneeChange} className="input-field" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RouteInformation;