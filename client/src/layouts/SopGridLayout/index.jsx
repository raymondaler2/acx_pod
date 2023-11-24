import { Grid, CircularProgress, Divider } from "@mui/material";
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
        minHeight: "50vh",
      }}
    >
      <CircularProgress />
    </Grid>
  ) : sop.length === 0 ? (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "50vh" }}
    >
      <Grid item xs={3}>
        <h1 className="text-center">No Results</h1>
      </Grid>
    </Grid>
  ) : (
    <Grid container rowSpacing={3} columnSpacing={0} sx={{ maxHeight: "50vh" }}>
      {sop.map((sop) => {
        if (sop.featured) {
          return <SopCard sop={sop} />;
        }
      })}
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      {sop.map((sop) => {
        if (!sop.featured) {
          return <SopCard sop={sop} />;
        }
      })}
    </Grid>
  );
};

export default SopGridLayout;
