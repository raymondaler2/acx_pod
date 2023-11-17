const CheckTokenValidity = (token) => {
  const jwtSecret = import.meta.env.REACT_APP_JWT_SECRET;

  try {
    const decodedToken = jwt.decode(token, { complete: true });
    jwt.verify(token, jwtSecret);

    if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
      return true; // Token is valid
    } else {
      return false; // Token is expired
    }
  } catch (error) {
    return false; // Token is invalid
  }
};

export default CheckTokenValidity;
