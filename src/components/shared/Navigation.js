import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ProductIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Redeem";
import OrdersIcon from "@mui/icons-material/Store";
import MainPageIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NavigationPanel() {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          to="/"
          component={Link}
          label="main"
          icon={<MainPageIcon />}
        />
        <BottomNavigationAction
          to="/products"
          component={Link}
          label="product"
          icon={<ProductIcon />}
        />
        <BottomNavigationAction
          to="/categories"
          component={Link}
          label="categories"
          icon={<CategoryIcon />}
        />
        <BottomNavigationAction
          to="/orders"
          component={Link}
          label="orders"
          icon={<OrdersIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
