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

const App = () => {
  const [sop, setSop] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchSopData = async () => {
      const response = await FetchAllSop();
      setSop(response);
    };

    if (isLoggedIn) {
      fetchSopData();
    }
  }, [isLoggedIn]);

  const PrivateRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/Login" />;
  };

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Clients"
          element={<PrivateRoute element={<Clients />} />}
        />
        <Route
          path="/HelpAndSupport"
          element={<PrivateRoute element={<HelpAndSupport />} />}
        />
        <Route
          path="/Knowledgebase"
          element={<PrivateRoute element={<Knowledgebase />} />}
        />
        {sop.map((data) => (
          <Route
            key={data._id}
            path={`/Knowledgebase/${data._id}`}
            element={
              <PrivateRoute element={<KnowledgebaseSOP data={data} />} />
            }
          />
        ))}
        <Route
          path="/Portfolio"
          element={<PrivateRoute element={<Portfolio />} />}
        />
        <Route
          path="/Reports"
          element={<PrivateRoute element={<Reports />} />}
        />
        <Route
          path="/Settings"
          element={<PrivateRoute element={<Settings />} />}
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
