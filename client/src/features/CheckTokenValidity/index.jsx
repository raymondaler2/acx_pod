import { jwtDecode } from "jwt-decode";

const CheckTokenValidity = (token) => {
  try {
    const decodedToken = jwtDecode(token);

    if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default CheckTokenValidity;
