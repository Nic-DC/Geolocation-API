import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

// GOOGLE AUTOCOMPLETE
//import { Autocomplete } from "@react-google-maps/api";

// COMPONENT
import NavMode from "./NavMode";
import SearchBar from "./SearchBar";

const Header = ({ setThemeMode }) => {
  return (
    <>
      <AppBar position="static" color="primary" sx={{ py: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>

          <NavMode setThemeMode={setThemeMode} />

          <SearchBar />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
