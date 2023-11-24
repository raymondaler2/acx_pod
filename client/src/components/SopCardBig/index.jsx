import { Card, Button, ThemeProvider, Grid, Box } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Link } from "react-router-dom";
import SopCardBigTheme from "./../../themes/SopCardBigTheme";
import { Str } from "@supercharge/strings";
import MilestoneDetails from "./../MilestoneDetails/index.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const SopCardBig = (props) => {
  const { data } = props;
  const { milestones } = data;
  return (
    <ThemeProvider theme={SopCardBigTheme}>
      <Card
        sx={{
          margin: "25px",
          borderRadius: "40px",
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
              // marginRight: "30px",
              // marginTop: "20px",
              // marginBottom: "20px",
              padding: "0px",
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
                  <h2 className="text-[16px] font-bold">Introduction</h2>
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
                asdasa
              </Grid>
            </Grid>
          </PerfectScrollbar>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default SopCardBig;
