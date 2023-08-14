import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Account from "./components/dashboard/dashboard pages/Account/Account";
import Profile from "./components/dashboard/dashboard pages/profile/Profile";
import Settings from "./components/dashboard/dashboard pages/Settings/Settings";
import Transactions from "./components/dashboard/dashboard pages/transactions/Transactions";
import Loader from "./components/loader/Loader";
import Dashboard from "./components/dashboard/dashboard";

const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Account" element={<Account />}></Route>
            <Route path="Transactions" element={<Transactions />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
