import { Grid } from "@mui/material";
import Navigation from "../../components/NavigationBox";
import CreateFilterButton from "../../components/CreateFilterButton";
import SearchbarWide from "../../components/SearchbarWide";
import BreakNotifUser from "./../../components/BreakNotifUser";
import KnowledgebaseMain from "./../../components/KnowledgebaseMain";

const Knowledgebase = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1.9}>
        <Navigation />
      </Grid>
      <Grid item xs={10.1}>
        <div className="mt-[50px]">
          <Grid container spacing={2}>
            <Grid item xs={1.5}>
              <CreateFilterButton />
            </Grid>
            <Grid item xs={7.5}>
              <SearchbarWide />
            </Grid>
            <Grid item xs={3} container justifyContent="flex-end">
              <BreakNotifUser />
            </Grid>
          </Grid>
        </div>
        <div>
          <KnowledgebaseMain />
        </div>
        <div className="text-center">FOOTER</div>
      </Grid>
    </Grid>
  );
};

export default Knowledgebase;
