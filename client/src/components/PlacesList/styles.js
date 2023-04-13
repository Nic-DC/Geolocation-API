import { styled } from "@mui/system";

export const PlacesContainer = styled("div")({
  padding: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PlacesSelectEmpty = styled("div")({
  marginTop: 2,
});

export const loading = styled("div")({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PlacesMarginBottom = styled("div")({
  marginBottom: "30px",
});

export const PlacesDivList = styled("div")({
  height: "75vh",
  overflow: "auto",
});
