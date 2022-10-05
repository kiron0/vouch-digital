import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth/RequireAuth";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/ManageDashboard/Dashboard/Dashboard";
import WelcomeDashboard from "./Components/ManageDashboard/WelcomeDashboard/WelcomeDashboard";
import NotFound from "./Shared/NotFound/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<WelcomeDashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
