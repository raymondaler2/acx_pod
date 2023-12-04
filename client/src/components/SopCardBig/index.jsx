import {
  Card,
  Button,
  ThemeProvider,
  Grid,
  Box,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  Chip,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";
import SopCardBigTheme from "./../../themes/SopCardBigTheme";
import { Str } from "@supercharge/strings";
import MilestoneDetails from "./../MilestoneDetails/index.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import FetchUserByID from "./../../features/FetchUserByID/index.jsx";
import { useEffect, useState } from "react";

const SopCardBig = (props) => {
  const { data } = props;
  console.log("%c Line:14 🍭 data", "color:#ffdd4d", data);
  const { milestones } = data;
  const [publisher, SetPublisher] = useState("");
  const dateObjectPublished = new Date(data?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDatePublished = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(dateObjectPublished);
  const formattedTimePublished = dateObjectPublished.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const dateObjectEdited = new Date(data?.updatedAt);
  const formattedDateEdited = new Intl.DateTimeFormat("en-US", options).format(
    dateObjectEdited
  );
  const formattedTimeEdited = dateObjectEdited.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const publisherName = async () => {
    const user = await FetchUserByID(data?.user_id);
    SetPublisher(`${user?.first_name} ${user?.last_name}`);
  };

  useEffect(() => {
    publisherName();
  }, []);

  return (
    <ThemeProvider theme={SopCardBigTheme}>
      <Card
        sx={{
          margin: "25px",
          borderRadius: "40px",
          minHeight: "95vh",
        }}
      >
        <Box
          sx={{
            margin: "45px",
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          <Button
            color="black"
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            variant="text"
            sx={{
              textTransform: "none",
            }}
          >
            <Link to={`/Knowledgebase`}>Back to Knowledgebase</Link>
          </Button>
          <PerfectScrollbar
            style={{
              maxHeight: "82vh",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "10px",
              }}
            >
              <Grid item xs={8}>
                <h1 className="font-black text-[30px]">
                  {Str(data?.sop_title).limit(75, " ...").get()}
                </h1>
                <Grid
                  sx={{
                    backgroundColor: "#FAC710",
                    marginTop: "10px",
                    marginRight: "85%",
                    padding: "5px 10px",
                    borderRadius: "20px",
                  }}
                >
                  <p className="text-center text-[14px] font-medium">
                    {Str(data?.service_tag).limit(8, " ...").get()}
                  </p>
                </Grid>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <h2 className="text-[24px] font-bold">Introduction</h2>
                </Box>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <p className="text-[14px]">{data?.sop_description}</p>
                </Box>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  {milestones?.map((data) => {
                    const number = milestones.indexOf(data);
                    return <MilestoneDetails data={data} number={number} />;
                  })}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    paddingLeft: "50px",
                    paddingRight: "0px",
                  }}
                >
                  <h2 className="text-[18px] font-bold mb-[2vh]">
                    Document Info
                  </h2>
                  <Grid container>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] font-bold">Publisher:</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px]">{publisher}</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] font-bold mt-[10px]">
                        Published Date:
                      </h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] mt-[10px]">
                        {formattedDatePublished}
                      </h2>
                      <h2 className="text-[14px]">{formattedTimePublished}</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] font-bold mt-[10px]">
                        Last Edited:
                      </h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] mt-[10px]">
                        {formattedDateEdited}
                      </h2>
                      <h2 className="text-[14px] ">{formattedTimeEdited}</h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] font-bold mt-[10px]">
                        Edited by:
                      </h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] mt-[10px]">
                        {data?.edited_by}
                      </h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] font-bold mt-[10px]">
                        File Version:
                      </h2>
                    </Grid>
                    <Grid item xs={6}>
                      <h2 className="text-[14px] mt-[10px]">{`Version ${
                        data?.__v + 1
                      }`}</h2>
                    </Grid>
                  </Grid>
                  <h2 className="text-[18px] font-bold mt-[10vh] mb-2">
                    Related SOP
                  </h2>
                  <List className="mb-5">
                    <ListItem disablePadding>
                      <ListItemButton selected={true}>
                        <ListItemText primary="SOP Title 1" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <h2 className="text-[18px] font-bold mb-2">Tags</h2>
                  <Chip label="Service Tag" />
                </Box>
              </Grid>
            </Grid>
          </PerfectScrollbar>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default SopCardBig;
