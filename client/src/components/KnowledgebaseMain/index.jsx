import { Box } from "@mui/material";
import SopGridLayout from "./../../layouts/SopGridLayout";

const KnowledgebaseMain = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        overflowY: "scroll",
        minHeight: "47rem",
        paddingLeft: "20px",
      }}
    >
      <p className="font-bold text-[20px] mb-[20px]">Featured SOP</p>
      <SopGridLayout />
    </Box>
  );
};

export default KnowledgebaseMain;
