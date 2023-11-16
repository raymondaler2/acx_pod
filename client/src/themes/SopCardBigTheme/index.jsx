import { createTheme } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const SopCardBigTheme = createTheme({
  palette: {
    black: createColor("#000000"),
  },
});

export default SopCardBigTheme;
