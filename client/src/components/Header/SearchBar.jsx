import * as React from "react";

import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const SearchBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
      </Search>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};
export default SearchBar;
