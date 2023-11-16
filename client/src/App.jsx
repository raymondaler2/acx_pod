import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import HelpAndSupport from "./pages/HelpAndSupport";
import Knowledgebase from "./pages/Knowledgebase";
import Portfolio from "./pages/Portfolio";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Notfound from "./pages/Notfound";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect, useState } from "react";
import FetchAllSop from "./features/FetchAllSop";
import KnowledgebaseSOP from "./pages/KnowledgebaseSOP";

const App = () => {
  const [sop, setSop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchAllSop();
      setSop(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Clients" element={<Clients />}></Route>
        <Route path="/HelpAndSupport" element={<HelpAndSupport />}></Route>
        // * /Knowledgebase
        <Route path="/Knowledgebase" element={<Knowledgebase />}></Route>
        {sop.map((data) => {
          const { _id } = data;
          return (
            <Route
              path={`/Knowledgebase/${_id}`}
              element={<KnowledgebaseSOP data={data} />}
            ></Route>
          );
        })}
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/Settings" element={<Settings />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
