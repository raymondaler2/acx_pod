import {
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBarTheme from "./../../themes/SearchBarTheme";

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#17A1FA",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#17A1FA",
    },
    "& .MuiOutlinedInput-root": {
      // ! add ternary condition if StyledTextField has value color is black
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#17A1FA",
      },
    },
  },
})(TextField);

const SearchbarWide = () => {
  return (
    <ThemeProvider theme={SearchBarTheme}>
      <StyledTextField
        id="outlined-basic input-with-icon-adornment"
        fullWidth
        label="Search"
        variant="outlined"
        className="bg-white rounded-full"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="black">
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
          style: {
            borderRadius: "100px",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default SearchbarWide;
