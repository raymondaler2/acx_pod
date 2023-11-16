import { Button, Container, ThemeProvider } from "@mui/material";
import acx_icon_nav from "./../../assets/acx_icon_nav.png";
import StyledNavigationText from "../NavigationText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavButtonTheme from "./../../themes/NavButtonTheme";

const Navigation = () => {
  return (
    <ThemeProvider theme={NavButtonTheme}>
      <Container>
        <div className="bg-white rounded-[3.5rem] ml-2 mr-5 my-5 w-full h-[70rem]">
          <div class="flex w-full justify-center items-center pt-24 pb-20">
            <img src={acx_icon_nav} alt="acx_icon_nav" />
          </div>
          <div className="flex w-full items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <HomeOutlinedIcon />
              <StyledNavigationText href="/">Home</StyledNavigationText>
            </Button>
          </div>
          <div className="flex w-full my-5 items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <FolderOpenOutlinedIcon />
              <StyledNavigationText href="/Portfolio">
                Portfolio
              </StyledNavigationText>
            </Button>
          </div>
          <div className="flex w-full my-5 items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <AutoStoriesOutlinedIcon />
              <StyledNavigationText href="/Knowledgebase">
                Knowledgebase
              </StyledNavigationText>
            </Button>
          </div>
          <div className="flex w-full my-5 items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <PeopleAltOutlinedIcon />
              <StyledNavigationText href="/Clients">
                Clients
              </StyledNavigationText>
            </Button>
          </div>
          <div className="flex w-full my-5 items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <FlagOutlinedIcon />
              <StyledNavigationText href="/Reports">
                Reports
              </StyledNavigationText>
            </Button>
          </div>
          <div className="spacer mt-[100%]">&nbsp;</div>
          <div className="flex w-full my-5 items-center ml-[15%]">
            <Button sx={{ textTransform: "none" }} color="black">
              <SupportOutlinedIcon />
              <StyledNavigationText href="/HelpAndSupport">
                Help & Support
              </StyledNavigationText>
            </Button>
          </div>
          <div className="flex w-full mt-5 items-center ml-[15%] pb-[100px]">
            <Button sx={{ textTransform: "none" }} color="black">
              <SettingsOutlinedIcon />
              <StyledNavigationText href="/Settings">
                Settings
              </StyledNavigationText>
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Navigation;
