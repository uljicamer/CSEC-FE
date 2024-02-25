import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LogIn from "./LogIn";
import DoctorDashboard from "./DoctorDashboard";
//import LabTechDashboard from "./LabTechDashboard";

// Definišemo interfejs propertija za LogIn komponentu
interface LogInProps {
  handleLogin: (userRole: "doctor" | "labTech") => void;
}

const App: React.FC = () => {
  // Stanje za upravljanje statusom autentifikacije
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Funkcija za prijavljivanje
  const handleLogin: LogInProps["handleLogin"] = (userRole) => {
    // Postavljamo stanje autentifikacije na true
    setIsAuthenticated(true);

    // Na osnovu korisničke uloge, određujemo koju tablu treba otvoriti
    if (userRole === "doctor") {
      window.location.href = "/DoctorDashboard"; // Preusmeravamo na DoctorDashboard
    } else if (userRole === "labTech") {
      window.location.href = "/LabTechDashboard"; // Preusmeravamo na LabTechDashboard
    }
  };

  return (
    <Router>
      <div>
        <h1>Tux HMS</h1>
        <Routes>
          <Route path="/" element={<LogIn />}>
            {/* Prenosimo handleLogin funkciju kao properti u LogIn komponentu */}
          </Route>
          {/* 
            Dodajemo opštu rutu za nepoznate putanje ili kada korisnik nije autentifikovan.
            Možete renderovati 404 stranicu ili login stranicu ovde, zavisno od vaših zahteva.
          */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
