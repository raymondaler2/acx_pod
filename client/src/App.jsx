import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchAllSopIDs from "./features/FetchAllSopIDs/index.jsx";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import HelpAndSupport from "./pages/HelpAndSupport";
import Knowledgebase from "./pages/Knowledgebase";
import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import KnowledgebaseSOP from "./pages/KnowledgebaseSOP";
import PrivateRoute from "./features/PrivateRoute";
import CheckTokenValidity from "./features/CheckTokenValidity";
import { Grid, CircularProgress } from "@mui/material";

const App = () => {
  const [sopIDs, setSopIDs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const storedToken = localStorage.getItem("token");

  useEffect(() => {
    const isValidToken = CheckTokenValidity(storedToken);
    setTimeout(async () => {
      await setIsLoggedIn(isValidToken);
      await setIsLoading(false);
    }, 1000);
  }, [storedToken]);

  useEffect(() => {
    const fetchSopIDs = async () => {
      const response = await FetchAllSopIDs();
      setSopIDs(response);
    };

    if (isLoggedIn) {
      fetchSopIDs();
    }
  }, [isLoggedIn]);

  return isLoading ? (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "90vh",
      }}
    >
      <CircularProgress />
    </Grid>
  ) : (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Clients"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={<Clients />} />
          }
        />
        <Route
          path="/HelpAndSupport"
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              element={<HelpAndSupport />}
            />
          }
        />
        <Route
          path="/Knowledgebase"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={<Knowledgebase />} />
          }
        />
        {sopIDs?.map((data) => (
          <Route
            key={data._id}
            path={`/Knowledgebase/${data._id}`}
            element={
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                element={<KnowledgebaseSOP id={data._id} />}
              />
            }
          />
        ))}
        <Route
          path="/Portfolio"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={<Portfolio />} />
          }
        />
        <Route
          path="/Reports"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={<Reports />} />
          }
        />
        <Route
          path="/Settings"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={<Settings />} />
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
