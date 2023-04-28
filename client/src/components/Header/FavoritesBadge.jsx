import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";

const FavoritesBadge = () => {
  return (
    <Tooltip title="Favorite places" arrow>
      <Stack spacing={15} direction="row" sx={{ color: "action.active", fontSize: "2.5rem", marginRight: 3 }}>
        <Badge
          color="secondary"
          badgeContent={1}
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
  );
};
// const FavoritesBadge = () => {
//   return (
//     <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
//       <Badge color="secondary" badgeContent={1000} max={999}>
//         <FavoriteIcon />
//       </Badge>
//     </Stack>
//   );
// };
export default FavoritesBadge;
