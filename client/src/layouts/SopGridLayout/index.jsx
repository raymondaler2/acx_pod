import { Grid, CircularProgress } from "@mui/material";
import { useContext } from "react";
import knowledgebaseContext from "./../../context/knowledgebaseContext";
import SopCard from "./../../components/SopCard";

const SopGridLayout = () => {
  const { isLoading, sop } = useContext(knowledgebaseContext);

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
    <Grid container rowSpacing={3} columnSpacing={0}>
      {sop.map((sop) => (
        <SopCard sop={sop} />
      ))}
    </Grid>
  );
};

export default SopGridLayout;
