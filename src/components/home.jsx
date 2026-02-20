import React from 'react';
import { useState } from 'react';
import './Home.css'; 
import ShipmentInfo from './LeftPanel/ShipmentInfo';
import RouteInformation from './LeftPanel/RouteInformation';
import Packages from './LeftPanel/Packages';
import AdditionalOptions from './LeftPanel/AdditionalOptions';
import ShipmentSummary from './RightPanel/ShipmentSummary';
import TopBar from './TopBar';

const Home = () => {
  // --- CENTRALIZED STATE ---
  const [shipmentInfo, setShipmentInfo] = useState({ orderId: '', shipmentDate: '2026-02-20', deliveryType: 'Express' });
  const [consigner, setConsigner] = useState({ fullName: '', mobileNumber: '', address: '', city: '', state: '', country: '', pincode: '' });
  const [consignee, setConsignee] = useState({ fullName: '', mobileNumber: '', address: '', city: '', state: '', country: '', pincode: '' });
  const [packages, setPackages] = useState([
    { id: Date.now(), label: "", weight: "", weightUnit: "kg", length: "", width: "", height: "", dimUnit: "cm", declaredValue: "" }
  ]);
  const [options, setOptions] = useState({ fragile: false, insurance: false });

  return (
    <div>
        <TopBar></TopBar>
        <div className="home-container">
      {/* Left Panel - Inputs */}
      <div className="left-section">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <ShipmentInfo data={shipmentInfo} setData={setShipmentInfo} />
          
          <RouteInformation 
            consigner={consigner} setConsigner={setConsigner}
            consignee={consignee} setConsignee={setConsignee}
          />
          
          <Packages packages={packages} setPackages={setPackages} />
          
          {/* Assuming you updated this one to accept props too */}
          <AdditionalOptions options={options} setOptions={setOptions} />
        </div>
      </div>

      {/* Right Panel - Summary */}
      <div className="right-section">
        <div style={{  top: '90px' }}> {/* Keeps summary visible when scrolling */}
          <ShipmentSummary 
            shipmentInfo={shipmentInfo}
            consigner={consigner}
            consignee={consignee}
            packages={packages}
            options={options} 
          />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Home;