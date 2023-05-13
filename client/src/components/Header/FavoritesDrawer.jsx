import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, Box, Typography } from "@mui/material";
import FavoritesBadge from "./FavoritesBadge";

const drawerBleeding = 56;

function FavoritesDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <Button onClick={toggleDrawer}>Open</Button> */}
      <FavoritesBadge onClick={toggleDrawer} />
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
          {/* Render your list of favorite places here */}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
export default FavoritesDrawer;
