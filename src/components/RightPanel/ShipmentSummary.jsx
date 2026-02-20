import React from "react";
import "./ShipmentSummary.css";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ShipmentSummary = ({ shipmentInfo, consigner, consignee, packages }) => {
  // --- Calculations for Footer ---
  const totalPackages = packages.length;
  const totalWeight = packages.reduce((sum, pkg) => sum + Number(pkg.weight || 0), 0);
  const totalValue = packages.reduce((sum, pkg) => sum + Number(pkg.declaredValue || 0), 0);

  // Helper to format address nicely
  const formatAddress = (person) => {
    return (
      <>
        {person.address && <div>{person.address}</div>}
        <div>
          {[person.city, person.state].filter(Boolean).join(", ")}
        </div>
        <div>
          {[person.country, person.pincode].filter(Boolean).join(", ")}
        </div>
      </>
    );
  };

  return (
    <div className="summary-wrapper">
      {/* Top Section (White Background) */}
      <div className="summary-top">
        {/* Header */}
        <div className="summary-header">
          <div>
            <h2>Shipment Summary</h2>
            <div className="summary-meta">
              <span>ID: {shipmentInfo.orderId || "N/A"}</span>
              <span className="meta-divider"></span>
              <span>{shipmentInfo.shipmentDate || "N/A"}</span>
            </div>
          </div>
          <div className={`delivery-badge ${shipmentInfo.deliveryType === 'Express' ? 'express' : 'standard'}`}>
            {shipmentInfo.deliveryType || "Standard"}
          </div>
        </div>

        {/* Route Visualization */}
        <div className="summary-route">
          <div className="route-box">
            <span className="route-label">From:</span>
            <div className="route-address">
              {formatAddress(consigner)}
            </div>
          </div>
          
          <div className="route-arrow">
            <ArrowIcon />
          </div>

          <div className="route-box">
            <span className="route-label">To:</span>
            <div className="route-address">
              {formatAddress(consignee)}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Packages List (Light Gray) */}
      <div className="summary-middle">
        <h3>PACKAGE DETAILS</h3>
        <div className="table-container">
          <table className="packages-table">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>WEIGHTS</th>
                <th>DIMENSIONS</th>
                <th>VALUE</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={pkg.id || index}>
                  <td>{pkg.label || "N/A"}</td>
                  <td>{pkg.weight ? `${pkg.weight} ${pkg.weightUnit}` : "-"}</td>
                  <td>
                    {pkg.length && pkg.width && pkg.height 
                      ? `${pkg.length}x${pkg.width}x${pkg.height} ${pkg.dimUnit}` 
                      : "-"}
                  </td>
                  <td>{pkg.declaredValue ? `₹ ${pkg.declaredValue}` : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section (Dark Gray) */}
      <div className="summary-footer">
        <div className="totals-grid">
          <div className="total-item">
            <span className="total-label">TOTAL PACKAGES</span>
            <span className="total-value">{totalPackages}</span>
          </div>
          <div className="total-item">
            <span className="total-label">TOTAL WEIGHTS</span>
            <span className="total-value">{totalWeight > 0 ? `${totalWeight} kg` : "-"}</span>
          </div>
          <div className="total-item">
            <span className="total-label">TOTAL VALUE</span>
            <span className="total-value">₹ {totalValue}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="estimated-delivery">
            <span className="total-label">ESTIMATED DELIVERY</span>
            {/* You can add a calculated date here later */}
            <span className="total-value">-</span> 
          </div>
          <button className="confirm-btn">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentSummary;