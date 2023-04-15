import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const markerContainer = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    zIndex: 2,
  },
});

export const MapPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
});

export const mapPointer = styled("img")({
  cursor: "pointer",
});
export const MapContainer = styled("div")({
  height: "85vh",
  width: "100%",
  overflow: "auto",
});
