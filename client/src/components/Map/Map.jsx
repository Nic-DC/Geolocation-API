import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

// COMPONENTS
import Progress from "./Progress";

// STYLING
import { markerContainer, MapContainer, MapPaper, mapPointer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getBoundsAction,
  getCoordinatesAction,
  setChildClickedAction,
} from "../../redux/actions/coordsAndBoundsActions";

const Map = ({ coordinates, places }) => {
  const dispatch = useDispatch();
  console.log("places in the map component", places);
  const isMobile = useMediaQuery("(min-width:600px)");

  // const coordinates = { lat: 0, lng: 0 };

  return (
    <>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={""}
          // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
          onChange={(e) => {
            console.log(`EVENT: `, e);

            dispatch(getCoordinatesAction({ lat: e.center.lat, lng: e.center.lng }));
            dispatch(getBoundsAction({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }));
          }}
          onChildClick={(child) => dispatch(setChildClickedAction(child))}
        >
          {places &&
            places.map((place, i) => (
              <div
                className={markerContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                $hover="false"
                key={i}
              >
                {/* // <MarkerContainer key={i} lat={Number(place.latitude)} lng={Number(place.longitude)}> */}
                {!isMobile ? (
                  <LocationOnOutlinedIcon sx={{ color: "black" }} />
                ) : (
                  <MapPaper elevation={3}>
                    <Typography>{place.name}</Typography>
                    <img
                      className={mapPointer}
                      src={
                        place.photo?.images?.small?.url
                          ? place.photo.images.small.url
                          : "https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/c9/getlstd-property-photo.jpg"
                      }
                      alt={place.name}
                    />
                    <Rating size="small" value={Number(place.rating)} readOnly />
                  </MapPaper>
                )}
              </div>
            ))}
        </GoogleMapReact>
      </MapContainer>
    </>
  );
};
export default Map;
