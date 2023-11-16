import { Grid } from "@mui/material";
import SopCardBig from "./../../components/SopCardBig";
import SopCommentsActLog from "./../../components/SopCommentsActLog";

const KnowledgebaseSOP = (props) => {
  const { data } = props;
  return (
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
