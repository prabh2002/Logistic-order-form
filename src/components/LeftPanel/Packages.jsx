import React, { useState } from "react";
import "./Packages.css";

// --- Icons ---
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
);

const Packages = ({ packages, setPackages }) => {
  const packageCategories = [
    "General Goods", "Electronics", "Medical & Healthcare", "Food & Perishables",
    "Clothing & Textiles", "Documents", "Hazardous Materials", "Industrial & Machinery",
    "Automotive", "E-commerce Parcels", "Agricultural Products", "Restricted / Special Items", "Others"
  ];

  // --- HANDLERS ---
  const handleAddPackage = () => {
    setPackages((prev) => [
      ...prev, 
      { id: Date.now(), label: "", weight: "", weightUnit: "kg", length: "", width: "", height: "", dimUnit: "cm", declaredValue: "" }
    ]);
  };

  const handleRemovePackage = (id) => {
    if (packages.length > 1) {
      setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
    } else {
      alert("You must include at least one package.");
    }
  };

  const handleChange = (id, field, value) => {
    setPackages((prev) => prev.map((pkg) => {
      if (pkg.id === id) {
        let updatedPkg = { ...pkg, [field]: value };
        
        // Auto-generate mock declared value
        if (field === "label") {
          const valueMap = {
            "Electronics": 50000,
            "Medical & Healthcare": 25000,
            "Documents": 500,
            "Industrial & Machinery": 100000
          };
          updatedPkg.declaredValue = valueMap[value] || 1000; 
        }
        return updatedPkg;
      }
      return pkg;
    }));
  };

  return (
    <div className="packages-container">
      {packages.map((pkg, index) => (
        <div key={pkg.id} className="package-card">
          
          {/* Header & Delete Button */}
          <div className="card-header space-between">
            <div className="header-left">
              <div className="red-bar"></div>
              <h3>Packages {packages.length > 1 ? `#${index + 1}` : ""}</h3>
            </div>
            <button 
              className="delete-btn" 
              onClick={() => handleRemovePackage(pkg.id)}
              title="Remove Package"
            >
              <TrashIcon />
            </button>
          </div>

          <div className="form-container">
            {/* Package Label Dropdown */}
            <div className="input-group">
              <label>Package Label</label>
              <div className="input-with-icon">
                <span className="input-icon"><PackageIcon /></span>
                <select 
                  className="input-field has-icon select-field"
                  value={pkg.label}
                  onChange={(e) => handleChange(pkg.id, "label", e.target.value)}
                >
                  <option value="" disabled>Select Label</option>
                  {packageCategories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Weight Input + Unit */}
            <div className="input-group">
              <label>Weight</label>
              <div className="split-input">
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="input-field"
                  value={pkg.weight}
                  onChange={(e) => handleChange(pkg.id, "weight", e.target.value)}
                />
                <select 
                  className="unit-select"
                  value={pkg.weightUnit}
                  onChange={(e) => handleChange(pkg.id, "weightUnit", e.target.value)}
                >
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>
              </div>
            </div>

            {/* Dimensions Grid + Unit */}
            <div className="input-group">
              <div className="dimensions-header">
                <label>Dimensions (Length x Width x Height)</label>
                <select 
                  className="unit-select small-select"
                  value={pkg.dimUnit}
                  onChange={(e) => handleChange(pkg.id, "dimUnit", e.target.value)}
                >
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                  <option value="in">in</option>
                </select>
              </div>
              <div className="dimensions-grid">
                <input type="number" placeholder="L" className="input-field center-text" value={pkg.length} onChange={(e) => handleChange(pkg.id, "length", e.target.value)} />
                <input type="number" placeholder="W" className="input-field center-text" value={pkg.width} onChange={(e) => handleChange(pkg.id, "width", e.target.value)} />
                <input type="number" placeholder="H" className="input-field center-text" value={pkg.height} onChange={(e) => handleChange(pkg.id, "height", e.target.value)} />
              </div>
            </div>

            {/* Declared Value */}
            <div className="input-group">
              <label>Declared Value</label>
              <div className="currency-input-wrapper">
                <span className="currency-symbol">₹</span>
                <input 
                  type="number" 
                  className="input-field has-currency"
                  value={pkg.declaredValue}
                  onChange={(e) => handleChange(pkg.id, "declaredValue", e.target.value)}
                />
              </div>
            </div>

            {/* Add Package Button (Inside card to match image) */}
            {index === packages.length - 1 && (
              <button className="add-package-btn" onClick={handleAddPackage}>
                + Add Package
              </button>
            )}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;