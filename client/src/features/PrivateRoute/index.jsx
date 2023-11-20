import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isLoggedIn, element } = props;
  return isLoggedIn ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;
