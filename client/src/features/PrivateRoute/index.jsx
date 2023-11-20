import { Navigate } from "react-router-dom";

const PrivateRoute = (isLoggedIn, { element }) => {
  return isLoggedIn ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;
