// frontend/src/components/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Vérifie si le token existe

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />; // Redirige si non authentifié
};

export default PrivateRoute;
