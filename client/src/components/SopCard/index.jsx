import { Box, Grid, Card, Divider } from "@mui/material";
import { Str } from "@supercharge/strings";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

const SopCard = (props) => {
  const { sop, user, comment_count } = props;
  const { _id } = sop;
  const dateObject = new Date(sop?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

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
              flexDirection: "column",
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
                height: "165px",
              }}
            >
              <p className="text-left text-[14px]">
                {Str(sop?.sop_description).limit(180, " ...").get()}
              </p>
            </Box>
            <Grid container>
              <Grid item xs={9} sx={{ marginTop: "auto" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                  }}
                >
                  <p className="text-[9px] mr-2">{`${sop?.user?.first_name} ${sop?.user?.last_name}`}</p>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <p className="text-[9px]">|</p>
                  <p className="text-[9px] ml-2">{formattedDate}</p>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ textAlign: "right", justifyContentL: "Right" }}
              >
                <Grid container alignItems="center" justifyContent="flex-end">
                  <ChatBubbleOutlinedIcon
                    sx={{ fontSize: "9px", marginRight: "5px" }}
                  />
                  <p className="text-[9px]">{sop?.comment_count}</p>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Link>
      </ButtonBase>
    </Grid>
  );
};

export default SopCard;
