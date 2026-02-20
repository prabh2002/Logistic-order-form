# 📦 Logistics Order Management Dashboard

A modern, responsive React frontend application designed to streamline the logistics and package shipping process. This dashboard features a dual-panel layout with dynamic, interconnected form inputs and a real-time, sticky order summary.

## 🚀 Overview

The Logistics Order Dashboard provides users with an intuitive interface to input shipment details, route information, and package specifications. As data is entered, a centralized state management system automatically calculates totals and updates the live order summary, providing immediate visual feedback without requiring a page reload.

## ✨ Key Features

* **Real-Time State Sync:** Utilizes React state "lifting" to instantly reflect form input changes from the left panel into the Right Panel Order Summary.
* **Dynamic Package Arrays:** Users can add, edit, or remove multiple packages. The system dynamically calculates total weight and dimensions, and auto-generates declared values based on the selected package category.
* **Custom UI Components:** Built from scratch without heavy UI libraries. Features iOS-style toggle switches, custom select dropdowns, and integrated SVG iconography.
* **Sticky Navigation & Summary:** A fixed top bar for branding and a floating right-hand panel that stays in the viewport during scrolling, ensuring users never lose sight of their order totals.
* **Auto-Generating Order IDs:** Automatically generates formatted tracking IDs (e.g., `ORD-1234-ABC`) upon component initialization.

## 🛠️ Tech Stack

* **Frontend:** React.js (Functional Components, Hooks: `useState`, `useEffect`)
* **Styling:** Pure CSS3 (Flexbox, CSS Grid, custom variables, sticky positioning)
* **Icons:** Inline SVG (Lucide/Feather style)
* **Architecture:** Component-based UI with centralized parent state

## 📁 Project Architecture

```text
src/
├── components/
│   ├── LeftPanel/
│   │   ├── ShipmentInfo.jsx      # Order ID, Date, Delivery Type (Standard/Express)
│   │   ├── RouteInformation.jsx  # Consigner (Sender) and Consignee (Receiver) data
│   │   ├── Packages.jsx          # Dynamic list of package items and properties
│   │   └── AdditionalOptions.jsx # Fragile & Insurance toggles
│   ├── RightPanel/
│   │   └── ShipmentSummary.jsx   # Real-time totals and visual route mapping
│   └── TopBar.jsx                # Fixed navigation/branding bar
├── pages/
│   └── Home.jsx                  # Main view and centralized state manager
├── App.css
├── App.jsx
└── main.jsx
