import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import "./styles/App.css";
import AppRoutes from "./route/routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
