import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Schedule from "./components/Schedule";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <UserProfile />
          </div>
          <div className="row">
            <div className="col-md-7">
              <Dashboard />
            </div>
            <div className="col-md-5">
              <Calendar />
              <Schedule />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; 