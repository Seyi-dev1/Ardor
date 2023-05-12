import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Account from "./components/dashboard/dashboard pages/Account/Account";
import Profile from "./components/dashboard/dashboard pages/profile/Profile";
import Settings from "./components/dashboard/dashboard pages/Settings/Settings";
import Transactions from "./components/dashboard/dashboard pages/transactions/Transactions";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="Account" element={<Account />}></Route>
          <Route path="Transactions" element={<Transactions />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
