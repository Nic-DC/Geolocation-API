import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Box, Chip, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ScheduleIcon from "@mui/icons-material/Schedule";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StarsIcon from "@mui/icons-material/Stars";
import PlacesWorkingHours from "./PlacesWorkingHours";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PlacesCard = ({ place }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 400, marginBottom: 2 }}>
      <CardHeader
        avatar={
          place.photo?.images?.small?.url ? (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={place.photo.images.small.url} alt={place.name} />
            </Avatar>
          ) : (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {/* {place.name.slice(0, 1)} */}D
            </Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={place?.name}
        subheader={
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", py: 1 }}>
            <Tooltip title="ranking" arrow placement="right" sx={{ marginBottom: 1 }}>
              <Chip
                color={place?.rating && place.rating === "5.0" ? "success" : "default"}
                icon={<StarsIcon />}
                label={
                  place?.ranking
                    ? place.ranking.length > 35
                      ? place.ranking.slice(0, 32) + "..."
                      : place.ranking
                    : "N/A"
                }
              />
            </Tooltip>
            <Tooltip title="cuisine" arrow placement="right">
              <Chip
                color={place?.cuisine && place?.cuisine[0]?.name ? "secondary" : "primary"}
                deleteIcon={<CheckIcon />}
                onDelete={() => console.log("clicked")}
                icon={<AdminPanelSettingsIcon />}
                label={place?.cuisine && place.cuisine[0]?.name ? place.cuisine[0].name : "Generic"}
              />
            </Tooltip>
            {/* <MoreVertIcon /> */}
          </Box>
        }
      />

      {place.photo?.images?.medium?.url ? (
        <CardMedia component="img" height="194" image={place.photo?.images.medium.url} alt="place" />
      ) : (
        <CardMedia
          component="img"
          height="194"
          image="https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg"
          alt="place"
        />
      )}

      <CardContent></CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ScheduleIcon /> <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4">Schedule</Typography>{" "}
          {place.hours ? <PlacesWorkingHours place={place} /> : <h4>No hours</h4>}
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default PlacesCard;
