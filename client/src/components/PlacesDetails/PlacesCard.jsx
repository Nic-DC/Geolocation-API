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
import { Box, Chip, Link, Table, TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import ClearIcon from "@mui/icons-material/Clear";
import HttpIcon from "@mui/icons-material/Http";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StarsIcon from "@mui/icons-material/Stars";
import PlacesWorkingHours from "./PlacesWorkingHours";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoritePlacesAction } from "../../redux/actions/placesActions";

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

const PlacesCard = ({ place, selected, refProp }) => {
  // FAVORITE
  const dispatch = useDispatch();
  const favoritePlaces = useSelector((state) => state.places.favorites.favoritePlacesList);

  // const handleFavoritePlaces = () => {
  //   dispatch(toggleFavoritePlacesAction(place));
  // };

  //const isFavorite = favoritePlaces.includes(place.location_id);
  // console.log("PlacesCard - favoritePlaces:", favoritePlaces);
  // console.log("PlacesCard - isFavorite:", isFavorite);

  const [isFavorite, setIsFavorite] = useState(favoritePlaces.includes(place.location_id));
  const handleFavoritePlaces = () => {
    dispatch(toggleFavoritePlacesAction(place));
    setIsFavorite(!isFavorite);
  };

  // THEME
  const theme = useTheme();

  // LIGHT/DARK MODE
  const isLightMode = theme.palette.mode === "light";

  // EXPAND
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // we use the props to be able to scroll to a specific place when clicked
  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

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
              D
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
                color={place?.rating && place.rating === "5.0" ? "default" : "default"}
                icon={<StarsIcon />}
                label={
                  place?.ranking
                    ? place.ranking.length > 35
                      ? place.ranking.slice(0, 35) + "..."
                      : place.ranking
                    : "N/A"
                }
              />
            </Tooltip>
            <Box sx={{ display: "flex", alignItems: "flex-start", py: 1 }}>
              <Tooltip title="cuisine" arrow placement="left-end" sx={{ marginRight: 1 }}>
                <Chip
                  color={place?.cuisine && place?.cuisine[0]?.name ? "secondary" : "primary"}
                  deleteIcon={<CheckIcon />}
                  onDelete={() => console.log("clicked")}
                  icon={<AdminPanelSettingsIcon />}
                  label={place?.cuisine && place.cuisine[0]?.name ? place.cuisine[0].name : "Generic"}
                />
              </Tooltip>

              <Tooltip title="AVAILABILITY" arrow placement="right">
                <Chip
                  color={place?.is_closed && place.is_closed ? "error" : "success"}
                  deleteIcon={place?.is_closed && place.is_closed ? <ClearIcon /> : <CheckIcon />}
                  onDelete={() => console.log("clicked")}
                  icon={place?.is_closed && place.is_closed ? <LockIcon /> : <LockOpenIcon />}
                  label={place?.is_closed && place.is_closed ? "CLOSED" : "OPEN"}
                />
              </Tooltip>
            </Box>
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
      <CardContent>
        <Table>
          <TableBody>
            <TableRow sx={{ backgroundColor: isLightMode ? "#ffff" : "rgba(0,0,0,0.4)" }}>
              <TableCell sx={{ fontWeight: "bold", display: "flex" }}>
                <PhoneIphoneIcon
                  sx={{
                    mr: 1,
                    fontSize: 25,
                    cursor: "pointer",
                    color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)",
                  }}
                  onClick={() => window.open(`tel:${place.phone}`)}
                />
                {place?.phone && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: 14,
                      cursor: "pointer",
                      color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => window.open(`tel:${place.phone}`)}
                  >
                    {place.phone}
                  </Typography>
                )}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", display: "flex" }}>
                <MarkEmailReadIcon
                  sx={{
                    mr: 1,
                    fontSize: 25,
                    cursor: "pointer",
                    color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)",
                  }}
                  onClick={() => window.open(`mailto:${place.email}`)}
                />
                {place?.email && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: 14,
                      cursor: "pointer",
                      color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => window.open(`mailto:${place.email}`)}
                  >
                    {place.email}
                  </Typography>
                )}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                <Link
                  href={place.website}
                  target="_blank"
                  underline="none"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <HttpIcon
                    sx={{ mr: 1, fontSize: 30, color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)" }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: 14, color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)" }}
                  >
                    Go to site
                  </Typography>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: isLightMode ? "#f5f5f5" : "rgba(0,0,0,0.4)" }}>
              <TableCell sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                <AttachMoneyIcon
                  sx={{ mr: 1, fontSize: 25, color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)" }}
                />
                {place?.price_level && (
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: 14, color: isLightMode ? "rgba(0,0,0,0.6)" : "rgb(144, 202, 249)" }}
                  >
                    {place.price_level}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>

      <CardActions disableSpacing>
        {/* REDUX: placesActions.js && placesReducer.js => favorites */}
        <Tooltip title="add to favorites" arrow placement="bottom">
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoritePlaces}
            className={isFavorite ? "favorite-icon active" : "favorite-icon"}
          >
            <FavoriteIcon color={isFavorite ? "primary" : "warning"} />
          </IconButton>
        </Tooltip>

        <Tooltip title="share" arrow placement="bottom">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="download as pdf" arrow placement="bottom">
          <IconButton aria-label="download as .pdf">
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="shedule" arrow placement="top">
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ScheduleIcon /> <ExpandMoreIcon />
          </ExpandMore>
        </Tooltip>
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
