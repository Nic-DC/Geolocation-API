import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

import { Autocomplete } from "@react-google-maps/api";

import NavMode from "./NavMode";

const Header = ({ setThemeMode }) => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <NavMode setThemeMode={setThemeMode} />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
