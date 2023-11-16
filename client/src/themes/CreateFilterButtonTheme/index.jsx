import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const CreateFilterButtonTheme = createTheme({
  palette: {
    white_blue: createColor("#17A1FA"),
    black: createColor("#000000"),
  },
});

export default CreateFilterButtonTheme;
