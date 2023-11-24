import { Box } from "@mui/material";
import SopGridLayout from "./../../layouts/SopGridLayout";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const KnowledgebaseMain = () => {
  return (
    <PerfectScrollbar
      style={{
        marginRight: "20px",
      }}
    >
      <Box
        sx={{
          minHeight: "47rem",
          paddingLeft: "20px",
        }}
      >
        <p className="font-bold text-[20px] mb-[20px]">Featured SOP</p>
        <SopGridLayout />
      </Box>
    </PerfectScrollbar>
  );
};

export default KnowledgebaseMain;
