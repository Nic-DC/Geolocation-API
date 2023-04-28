import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

// COMPONENTS
import NavMode from "./NavMode";

import SearchBar from "./SearchBar";
import FavoritesBadge from "./FavoritesBadge";
import AccountAvatar from "./AccountAvatar";

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
          <FavoritesBadge />
          <AccountAvatar />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
