import { useEffect, useState } from "react";
import KnowledgebaseLayout from "../../layouts/KnowledgebaseLayout";
import FetchAllSop from "./../../features/FetchAllSop";
import knowledgebaseContext from "./../../context/knowledgebaseContext";

const Knowledgebase = () => {
  const [sop, setSop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await FetchAllSop();
    setSop(response);
  };

  useEffect(() => {
    fetchData().then(async () => {
      await setIsLoading(false);
    });
  }, []);

  return (
    <knowledgebaseContext.Provider value={{ isLoading, sop }}>
      <KnowledgebaseLayout />
    </knowledgebaseContext.Provider>
  );
};

export default Knowledgebase;
