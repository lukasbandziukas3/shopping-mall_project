import Badge from "@mui/material/Badge";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useSelector } from "react-redux";

export const BadgeBottomNavigationAction = ({ ...props }) => {
  const ordersInCartLength = useSelector((state) => state.cart.orders.length);
  return (
    <Badge
      color="secondary"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      sx={{
        ml: "auto",
        "& .MuiBadge-badge": {
          marginLeft: "2rem",
          marginBottom: "1rem",
        },
      }}
      badgeContent={ordersInCartLength}
    >
      <BottomNavigationAction {...props} />
    </Badge>
  );
};
