const AuthenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401);
    throw new Error("Token not provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("🚨⚠️❗🚩", error);
    res.status(403);  
    throw new Error("Invalid token");
  }
};

module.exports = AuthenticateToken;
