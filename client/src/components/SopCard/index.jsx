import { Box, Grid, Card } from "@mui/material";
import { Str } from "@supercharge/strings";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

const SopCard = (props) => {
  const { sop } = props;
  const { _id } = sop;

  return (
    <Grid item xs={2.4}>
      <ButtonBase>
        <Link to={`/Knowledgebase/${_id}`}>
          <Card
            sx={{
              height: "350px",
              width: "90%",
              borderRadius: "20px",
              padding: "40px",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              ":hover": {
                boxShadow: 20,
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                height: "60px",
              }}
            >
              <h1 className="text-left text-[16px] font-bold">
                {Str(sop?.sop_title).limit(35, " ...").get()}
              </h1>
            </Box>
            <Box
              sx={{
                height: "50px",
              }}
            >
              <Grid
                sx={{
                  backgroundColor: "#FAC710",
                  marginRight: "65%",
                  marginLeft: "-5px",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                <p className="text-center text-[10px] font-medium">
                  {Str(sop?.service_tag).limit(8, " ...").get()}
                </p>
              </Grid>
            </Box>
            <Box
              sx={{
                height: "100px",
              }}
            >
              <p className="text-left text-[14px]">
                {Str(sop?.sop_description).limit(180, " ...").get()}
              </p>
            </Box>
          </Card>
        </Link>
      </ButtonBase>
    </Grid>
  );
};

export default SopCard;
