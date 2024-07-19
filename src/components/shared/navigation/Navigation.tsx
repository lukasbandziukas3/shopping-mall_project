import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ProductIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Redeem";
import OrdersIcon from "@mui/icons-material/Store";
import MainPageIcon from "@mui/icons-material/AccountBalance";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Person4Icon from '@mui/icons-material/Person4';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { BadgeBottomNavigationAction } from "./BadgeBottomNavigationAction";
import {useAppSelector} from "../../../hooks/reduxHooksTS";

export function NavigationPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState<string>('');
  const roles = useAppSelector(state => state.auth.roles )
  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue:string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (

  <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction
        to="/"
        value="/"
        component={Link}
        label="main"
        icon={<MainPageIcon />}
      />
      <BottomNavigationAction
        to="/products"
        value="/products"
        component={Link}
        label="product"
        icon={<ProductIcon />}
      />
      <BottomNavigationAction
        to="/categories"
        value="/categories"
        component={Link}
        label="categories"
        icon={<CategoryIcon />}
      />
      {
          roles.includes('manager')  && (
          <BottomNavigationAction
            to="/orders"
            value="/orders"
            component={Link}
            label="orders"
            icon={<OrdersIcon />}
          />
          )
      }
      {
          roles.includes('admin')  && (
          <BottomNavigationAction
              to="/users"
              value="/users"
              component={Link}
              label="users"
              icon={<Person4Icon />}
          />
          )
      }
      <BottomNavigationAction
      to="/logout"
      value="/logout"
      component={Link}
      label="logout"
      icon={<LogoutIcon />}
  />
      <BadgeBottomNavigationAction
        to="/cart"
        value="/cart"
        component={Link}
        label="cart"
        icon={<AddShoppingCartIcon />}
      />
    </BottomNavigation>
  );
}
