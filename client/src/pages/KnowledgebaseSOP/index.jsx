import { Grid, CircularProgress } from "@mui/material";
import SopCardBig from "./../../components/SopCardBig";
import SopCommentsActLog from "./../../components/SopCommentsActLog";
import FetchSopByID from "./../../features/FetchSopByID/index.jsx";
import { useEffect, useState } from "react";

const KnowledgebaseSOP = (props) => {
  const { id } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      await setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchSopData = async () => {
      const response = await FetchSopByID(id);
      setData(response);
    };
    if (!isLoading) {
      fetchSopData();
    }
  }, [isLoading]);

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
    <Grid container>
      <Grid item xs={8}>
        <SopCardBig data={data} />
      </Grid>
      <Grid item xs={4}>
        <SopCommentsActLog />
      </Grid>
    </Grid>
  );
};

export default KnowledgebaseSOP;
