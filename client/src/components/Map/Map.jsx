import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

// COMPONENTS
import Progress from "./Progress";

// STYLING
import { MarkerContainer, MapContainer, MapPaper, MapPointer } from "./styles";

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };
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
            // setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            // setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          // onChildClick={(child) => setChildClicked(child)}
        ></GoogleMapReact>
      </MapContainer>
    </>
  );
};
export default Map;
