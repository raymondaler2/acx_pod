import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  return isLoggedIn ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;
