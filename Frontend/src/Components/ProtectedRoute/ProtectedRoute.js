import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TravelContext } from "../../Context/TravelContext";
import { useEffect } from "react";
import "../Register/Register.css";
import Unauthorized from "../Unauthorized/Unauthorized";

const ProtectedRoute = ({ children, ...props }) => {
  const { isAuthenticated } = useContext(TravelContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      navigate("/unauthorized");
    }
  }, [token, navigate]);

  if (!isAuthenticated) {
    navigate("/login");
    return <Unauthorized />;
  }

  return children;
};

export default ProtectedRoute;
