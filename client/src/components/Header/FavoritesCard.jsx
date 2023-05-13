import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Chip } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";

const FavoritesCard = ({ favoritePlace }) => {
  return (
    <Card sx={{ display: "flex", py: 2, px: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {favoritePlace.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {favoritePlace.is_closed ? "CLOSED" : "OPEN"}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex" }}>
          <Chip
            color={favoritePlace.rating === "5.0" ? "default" : "default"}
            icon={<StarsIcon />}
            label={favoritePlace.ranking ? favoritePlace.ranking : "N/A"}
          />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={
          favoritePlace.photo?.images?.small?.url
            ? favoritePlace.photo.images.small.url
            : "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg"
        }
        alt={favoritePlace.name}
      />
    </Card>
  );
};
export default FavoritesCard;
