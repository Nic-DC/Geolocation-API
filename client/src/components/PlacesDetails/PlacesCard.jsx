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
import { Box, Chip, Icon, Link, Table, TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import ClearIcon from "@mui/icons-material/Clear";
import HttpIcon from "@mui/icons-material/Http";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StarsIcon from "@mui/icons-material/Stars";
import PlacesWorkingHours from "./PlacesWorkingHours";
import { useTheme } from "@emotion/react";

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
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
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

      {/* <CardContent>
        {place?.phone && place.phone && <PhoneIphoneIcon>{place.phone}</PhoneIphoneIcon>}
        {place?.phone && place.phone && <MarkEmailReadIcon>{place.email}</MarkEmailReadIcon>}
        {place?.phone && place.phone && <AttachMoneyIcon>{place.price_level}</AttachMoneyIcon>}
        {place?.phone && place.phone && <HttpIcon>{place.website}</HttpIcon>} */}
      {/* <CardContent>
        {place?.phone && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIphoneIcon
              sx={{ mr: 1, fontSize: 25, cursor: "pointer" }}
              onClick={() => window.open(`tel:${place.phone}`)}
            />
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, cursor: "pointer" }}
              onClick={() => window.open(`tel:${place.phone}`)}
            >
              {place.phone}
            </Typography>
          </Box>
        )}
        {place?.email && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <MarkEmailReadIcon
              sx={{ mr: 1, fontSize: 25, cursor: "pointer" }}
              onClick={() => window.open(`mailto:${place.email}`)}
            />
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, cursor: "pointer" }}
              onClick={() => window.open(`mailto:${place.email}`)}
            >
              {place.email}
            </Typography>
          </Box>
        )}
        {place?.price_level && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <AttachMoneyIcon sx={{ mr: 1, fontSize: 25 }}>{place.price_level}</AttachMoneyIcon>
            <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
              {place.price_level}
            </Typography>
          </Box>
        )}
        {place?.website && (
          <Link href={place.website} target="_blank" underline="none">
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, cursor: "pointer" }}>
              <HttpIcon sx={{ mr: 1, fontSize: 25 }}>{place.website}</HttpIcon>
              <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
                {place.name}
              </Typography>
            </Box>
          </Link>
        )}
      </CardContent> */}

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
