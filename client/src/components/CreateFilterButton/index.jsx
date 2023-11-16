import { Box, Button, IconButton, ThemeProvider } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Divider from "@mui/material/Divider";
import CreateFilterButtonTheme from "./../../themes/CreateFilterButtonTheme/index.jsx";

const CreateFilterButton = () => {
  return (
    <ThemeProvider theme={CreateFilterButtonTheme}>
      <Box className="bg-white  max-w-[170px] py-[10px] px-[20px] rounded-[3.5rem]">
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{ textTransform: "none" }}
            color="white_blue"
            startIcon={<AddOutlinedIcon />}
          >
            Create
          </Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton
            color="black"
            aria-label="filter"
            style={{
              marginLeft: "15px",
            }}
            onClick={() => {}}
          >
            <FilterAltOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CreateFilterButton;
