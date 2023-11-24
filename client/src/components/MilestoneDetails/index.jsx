import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";

const MilestoneDetails = (props) => {
  const { data, number } = props;
  const { milestone_description, checklist } = data;
  const [checked, setChecked] = useState([]);
  console.log("%c Line:15 🍬 checked", "color:#33a5ff", checked);

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
          <Grid item xs={3.5}>
            <h2 className="text-[16px] font-bold">{`Milestone ${
              number + 1
            }`}</h2>
          </Grid>
          <Grid item xs={8.5}>
            <hr className="mt-[10px]" />
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
        <h2 className="text-[16px] font-bold">{`Checklist`}</h2>
        {checklist?.map((data) => {
          // console.log("%c Line:57 🍏 data", "color:#93c0a4", data);
          return (
            <List
              sx={{
                paddingnBottom: "0px",
              }}
            >
              <ListItem
                sx={{
                  paddingLeft: "0px",
                  paddingBottom: "0px",
                }}
              >
                <TripOriginOutlinedIcon
                  sx={{
                    marginRight: "10px",
                  }}
                />
                <ListItemText
                  id={`switch-list-label-${data?.checklist_title}`}
                  primary={data?.checklist_title}
                />
              </ListItem>
            </List>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default MilestoneDetails;
