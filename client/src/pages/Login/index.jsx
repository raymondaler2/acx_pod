import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  Grid,
  Link,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import loginBG from "./../../assets/loginBG.png";
import acx_icon_nav from "./../../assets/acx_icon_nav.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Your login logic here
    console.log("Logging in with:", { username, password });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBG})` }}
    >
      <Box className="flex flex-col gap-2 max-w-2xl pl-20 pr-20 pt-[8rem] pb-[8rem] bg-white shadow-md rounded-[10%] mx-auto mr-[10%]">
        {/* Image and Welcome Back! text at the top */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={acx_icon_nav} // Replace with your image URL
            alt="Logo"
            className="mb-6"
          />
          <p variant="h4" className="font-black text-[30px]">
            Welcome Back!
          </p>
        </div>

        {/* Username field */}
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full"
          sx={{
            width: "350px", // Changed to 100% width
            marginBottom: "1rem",
          }}
        />

        {/* Password field with eye icon */}
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            width: "350px", // Changed to 100% width
            marginBottom: "1rem",
          }}
        />

        {/* Grid for Remember Me and Forgot Password */}
        <Grid container spacing={2} className="mt-2 pb-3">
          <Grid item xs={6}>
            {/* Remember Me checkbox */}
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2.5}>
                <Checkbox />
              </Grid>
              <Grid item xs={8.5}>
                <Typography variant="body2">Remember Me</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className="text-right">
            {/* Forgot Password link */}
            <Typography variant="body2" className="pt-2">
              <Link href="#" color="primary">
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
        </Grid>
        {/* Login button */}
        <Button variant="contained" onClick={handleLogin} className="mt-4">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
