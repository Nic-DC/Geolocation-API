import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Typography } from "@mui/material";
import FavoritesCard from "./FavoritesCard";

const drawerBleeding = 56;

const FavoritesBadge = () => {
  // FAVORITES
  const favoritePlacesCount = useSelector((state) => state.places.favorites.favoritePlacesCount);
  const favoritePlacesList = useSelector((state) => state.places.favorites.favoritePlacesList);
  console.log({ favoritePlacesCount });
  console.log({ favoritePlacesList });

  // SWIPEABLE DRAWER
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      {favoritePlacesList && favoritePlacesCount > 0 ? (
        <>
          <Tooltip title="Favorite places" arrow>
            <Stack
              spacing={15}
              direction="row"
              sx={{ color: "action.active", fontSize: "2.5rem", marginRight: 3 }}
              onClick={toggleDrawer}
            >
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
            </Stack>
          </Tooltip>
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Favorite Places</Typography>

              {favoritePlacesList &&
                favoritePlacesList.map((favoritePlace) => (
                  <FavoritesCard key={favoritePlace.location_id} favoritePlace={favoritePlace} />
                ))}
            </Box>
          </SwipeableDrawer>
        </>
      ) : (
        <Tooltip title="Favorite places" arrow>
          <Stack spacing={15} direction="row" sx={{ color: "action.active", fontSize: "2.5rem", marginRight: 3 }}>
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
          </Stack>
        </Tooltip>
      )}
    </>
  );
};

export default FavoritesBadge;
