import { useEffect, useState } from "react";
import KnowledgebaseLayout from "../../layouts/KnowledgebaseLayout";
import FetchAllSop from "./../../features/FetchAllSop";
import knowledgebaseContext from "./../../context/knowledgebaseContext";

const Knowledgebase = () => {
  const [sop, setSop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchAllSop();
      setSop(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!!sop) {
      setTimeout(async () => {
        await setIsLoading(false);
      }, 1000);
    }
  }, [sop]);

  return (
    <knowledgebaseContext.Provider value={{ isLoading, sop }}>
      <KnowledgebaseLayout />
    </knowledgebaseContext.Provider>
  );
};

export default Knowledgebase;
