import { Avatar, Box, Button, IconButton, ThemeProvider } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Divider from "@mui/material/Divider";
import BreakNotifUserTheme from "./../../themes/BreakNotifUserTheme";
import user from "./../../assets/user.png";
const BreakNotifUser = () => {
  return (
    <ThemeProvider theme={BreakNotifUserTheme}>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ textTransform: "none" }}
            color="break"
            variant="contained"
            style={{
              borderRadius: "10px",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginRight: "30px",
            }}
          >
            On A Break
          </Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton
            color="black"
            aria-label="filter"
            style={{
              marginLeft: "10px",
            }}
            onClick={() => {}}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton
            color="black"
            aria-label="filter"
            style={{
              marginLeft: "10px",
              marginRight: "50px",
            }}
            onClick={() => {}}
          >
            <Avatar alt="User" src={user} />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BreakNotifUser;
