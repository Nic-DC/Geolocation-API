import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const StyledIconButton = styled(IconButton)(({ theme, isFavorite }) => ({
  transition: "transform 0.3s, color 0.3s",
  color: isFavorite ? theme.palette.primary.main : "inherit",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
