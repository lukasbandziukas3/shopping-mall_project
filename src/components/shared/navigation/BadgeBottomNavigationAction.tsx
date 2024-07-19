import Badge from "@mui/material/Badge";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useAppSelector} from "../../../hooks/reduxHooksTS";

export const BadgeBottomNavigationAction = ({ ...props }) => {
  const ordersInCartLength = useAppSelector((state) => state.cart.orders.length);
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
