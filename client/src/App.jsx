import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchAllSop from "./features/FetchAllSop";
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

const App = () => {
  const [sop, setSop] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("%c Line:20 🥓 isLoggedIn", "color:#fca650", isLoggedIn);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const isValidToken = CheckTokenValidity(storedToken);
    console.log("%c Line:26 🌮 isValidToken", "color:#f5ce50", isValidToken);

    setIsLoggedIn(isValidToken);
  }, []);

  useEffect(() => {
    const fetchSopData = async () => {
      const response = await FetchAllSop();
      setSop(response);
    };

    if (isLoggedIn) {
      fetchSopData();
    }
  }, [isLoggedIn]);

  return (
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
        {sop?.map((data) => (
          <Route
            key={data._id}
            path={`/Knowledgebase/${data._id}`}
            element={
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                element={<KnowledgebaseSOP data={data} />}
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
        <Route path="*" element={isLoggedIn ? <Notfound /> : <Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
