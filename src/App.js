import React, { Suspense, lazy } from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Account from "./components/dashboard/dashboard pages/Account/Account";
import Profile from "./components/dashboard/dashboard pages/profile/Profile";
import Settings from "./components/dashboard/dashboard pages/Settings/Settings";
import Transactions from "./components/dashboard/dashboard pages/transactions/Transactions";
import Loader from "./components/loader/Loader";
import Dashboard from "./components/dashboard/dashboard";
import Overview from "./components/dashboard/dashboard pages/Overview/Overview";
import AllTransactions from "./components/dashboard/dashboard pages/transactions/all transactions/AllTransactions.jsx";
import Deposits from "./components/dashboard/dashboard pages/transactions/deposits/Deposits.jsx";
import Withdrawals from "./components/dashboard/dashboard pages/transactions/withdrawals/Withdrawals.jsx";

const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Account" element={<Account />}></Route>
            <Route path="transactions" element={<Transactions />}>
              <Route path="*" index element={<AllTransactions />} />
              <Route path="deposits" element={<Deposits />} />
              <Route path="withdrawals" element={<Withdrawals />} />
            </Route>
            <Route path="Settings" element={<Settings />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Overview" element={<Overview />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
