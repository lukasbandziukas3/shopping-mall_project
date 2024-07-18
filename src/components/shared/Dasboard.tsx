import React from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {NavigationPanel} from "./navigation/Navigation";

export  default function  Dashboard  (): React.ReactElement {
    return(
        <Box >
          <NavigationPanel/>
          <Outlet />
        </Box>
    )
}