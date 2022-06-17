import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Homepage from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import Feemanagement from './pages/FeeManagament/FeeManagement';
import Limitmanagement from './pages/LimitManagement/LimitManagement';
import Transaction from './pages/Transaction/Transaction';
import System from './pages/System/System';
import Report from './pages/Report/Report';
import Payroll from './pages/Transaction/Payroll.tsx/Payroll';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/feemanagement/:id" element={<Feemanagement />} />
          <Route path="/limitmanagement/:id" element={<Limitmanagement />} />
          <Route path="/transaction/:id" element={<Transaction />} />
          <Route path="/transaction/payroll" element={<Payroll />} />
          <Route path="/system/:id" element={<System />} />
          <Route path="/report/:id" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
