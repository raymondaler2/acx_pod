import { Grid, List, ListItem, ListItemText } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const MilestoneDetails = (props) => {
  const { data, number } = props;
  const { milestone_description, checklist } = data;

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={6}
        sx={{
          marginBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={4.5}>
            <h2 className="text-[24px] font-bold">{`Milestone ${
              number + 1
            }`}</h2>
          </Grid>
          <Grid item xs={7.5}>
            <hr className="mt-[20px]" />
          </Grid>
          <Grid item xs={12}>
            <p className="text-[14px]">{milestone_description}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          marginBottom: "20px",
        }}
      >
        <h2 className="text-[24px] font-bold">{`Checklist`}</h2>
        <List>
          {checklist?.map((data) => {
            return (
              <ListItem
                sx={{
                  padding: "0px",
                }}
              >
                <TaskAltIcon
                  sx={{
                    marginRight: "10px",
                  }}
                />
                <ListItemText
                  id={`switch-list-label-${data?.checklist_title}`}
                  primary={data?.checklist_title}
                  disableTypography
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default MilestoneDetails;
