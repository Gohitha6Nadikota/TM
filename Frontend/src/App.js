import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import TravelQuiz from "./Components/Travel/Quiz.js";
import Destinations from "./Components/Destinations/Destinations";
import DestinationDetail from "./Components/DestinationDetail/DestinationDetail";
import { TravelContext } from "./Context/TravelContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Unauthorized from "./Components/Unauthorized/Unauthorized";

const App = () => {
  const [travel, setTravel] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const logout = () => {
    localStorage.removeItem('token');
    alert("logged out")
    window.location.href= "/login"
  };
  return (
    <TravelContext.Provider
      value={{ travel, setTravel, isAuthenticated, setIsAuthenticated ,logout }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/travel"
            element={
              <ProtectedRoute>
                <TravelQuiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/destination"
            element={
              <ProtectedRoute>
                <Destinations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/destination/:id"
            element={
              <ProtectedRoute>
                <DestinationDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </TravelContext.Provider>
  );
};

export default App;

