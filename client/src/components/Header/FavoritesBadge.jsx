import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

const FavoritesBadge = () => {
  // FAVORITES
  const favoritePlacesCount = useSelector((state) => state.places.favorites.favoritePlacesCount);
  console.log({ favoritePlacesCount });
  return (
    <Tooltip title="Favorite places" arrow>
      <Stack spacing={15} direction="row" sx={{ color: "action.active", fontSize: "2.5rem", marginRight: 3 }}>
        {favoritePlacesCount > 0 ? (
          <Badge
            color="secondary"
            badgeContent={favoritePlacesCount}
            max={99}
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s, color 0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "primary.main", // Change this to the desired color
              },
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // invisible={true}
          >
            <FavoriteIcon />
          </Badge>
        ) : (
          <Badge
            color="secondary"
            badgeContent={0}
            max={99}
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s, color 0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "primary.main", // Change this to the desired color
              },
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // invisible={true}
          >
            <FavoriteIcon />
          </Badge>
        )}
      </Stack>
    </Tooltip>
  );
};

export default FavoritesBadge;
