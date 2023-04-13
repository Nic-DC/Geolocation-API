import * as React from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { MaterialUISwitch } from "./styles";

import { useTheme } from "@emotion/react";
import { useState } from "react";

const NavMode = ({ setThemeMode }) => {
  const theme = useTheme();

  const [isChecked, setIsChecked] = useState(theme.palette.mode === "dark");

  const handleThemeChange = (event) => {
    setIsChecked(event.target.checked);
    const newThemeMode = event.target.checked ? "dark" : "light";
    setThemeMode(newThemeMode);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            currentmode={theme.palette.mode}
            sx={{ m: 1 }}
            checked={isChecked}
            onChange={handleThemeChange}
          />
        }
        label=""
      />
    </FormGroup>
  );
};
export default NavMode;
