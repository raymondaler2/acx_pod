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
import LoginUser from "./../../features/LoginUser/index.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (!username) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (username && password) {
      return LoginUser(username, password);
    }
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
        <div className="flex flex-col items-center mb-4">
          <img src={acx_icon_nav} alt="Logo" className="mb-6" />
          <p variant="h4" className="font-black text-[30px]">
            Welcome Back!
          </p>
        </div>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError(false);
          }}
          className="w-full"
          error={usernameError}
          helperText={usernameError ? "Username cannot be empty" : ""}
          sx={{
            width: "350px",
            marginBottom: "1rem",
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          error={passwordError}
          helperText={passwordError ? "Password cannot be empty" : ""}
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
            width: "350px",
            marginBottom: "1rem",
          }}
        />
        <Grid container spacing={2} className="mt-2 pb-3">
          <Grid item xs={6}>
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
            <Typography variant="body2" className="pt-[10px]">
              <Link href="#" color="primary">
                Forgot Password?
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={async () => {
            const result = await handleLogin();
            if (result) {
              navigate("/");
            }
          }}
          className="mt-4"
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
