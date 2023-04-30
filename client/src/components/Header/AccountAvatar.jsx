import * as React from "react";

// MUI elements
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";

// COMPONENTS
import Avatar from "@mui/material/Avatar";

// STYLING
import { StyledBadge } from "./styles";

// Avatar settings
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AccountAvatar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <StyledBadge overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }} variant="dot">
            <Avatar alt="Remy Sharp" src="/user.png" />
          </StyledBadge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default AccountAvatar;
