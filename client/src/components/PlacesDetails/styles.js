import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";

export const StyledIconButton = styled(IconButton)(({ theme, isFavorite }) => ({
  transition: "transform 0.3s, color 0.3s",
  color: isFavorite ? "inherit" : theme.palette.primary.main,
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
