import React, { useState, useEffect } from "react";
import "./ShipmentInfo.css";


const ShipmentInfo = ({ data, setData }) => {
  
  const { orderId, shipmentDate, deliveryType } = data;

  useEffect(() => {
    const generateOrderID = () => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const randomStr = Math.random().toString(36).substring(2, 5).toUpperCase();
      return `ORD-${randomNum}-${randomStr}`;
    };
    
    
    if (!orderId) {
      setData((prevData) => ({ ...prevData, orderId: generateOrderID() }));
    }
  }, [orderId, setData]); 

  // --- HANDLERS ---
  const handleDateChange = (e) => {
    setData((prevData) => ({ ...prevData, shipmentDate: e.target.value }));
  };

  const handleDeliveryChange = (type) => {
    setData((prevData) => ({ ...prevData, deliveryType: type }));
  };
  return (
    <div className="shipment-card">
      {/* Header */}
      <div className="card-header">
        <div className="red-bar"></div>
        <h3>Shipment Info</h3>
      </div>

      {/* Form Content */}
      <div className="form-container">
        
        {/* Order ID Field (Read Only) */}
        <div className="input-group">
          <label>Order ID</label>
          <input 
            type="text" 
            value={orderId} 
            readOnly 
            className="input-field read-only"
          />
        </div>

        {/* Shipment Date Field */}
        <div className="input-group">
          <label>Shipment Date</label>
          <div className="date-input-wrapper">
             <input 
              type="date" 
              value={shipmentDate}
              onChange={handleDateChange}
              className="input-field date-field"
            />
            {/* The custom <CalendarIcon /> has been removed because <input type="date"> brings its own! */}
          </div>
        </div>

        {/* Delivery Type Toggle */}
        <div className="input-group">
          <label>Delivery Type</label>
          <div className="toggle-container">
            <button
              className={`toggle-btn ${deliveryType === "Standard" ? "active" : ""}`}
              onClick={() => handleDeliveryChange("Standard")}
            >
              Standard
            </button>
            <button
              className={`toggle-btn ${deliveryType === "Express" ? "active" : ""}`}
              onClick={() => handleDeliveryChange("Express")}
            >
              Express
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShipmentInfo;