import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PersonIcon from "@mui/icons-material/Person";
import MovieIcon from "@mui/icons-material/Movie";
import StadiumIcon from "@mui/icons-material/Stadium";
export const mainNavBarItems = [
  {
    id: 0,
    icon: <PersonIcon />,
    label: "Thành viên",
    route: "member",
  },
  { id: 1, icon: <ConfirmationNumberIcon />, label: "Mua vé", route: "ticket" },
  { id: 2, icon: <MovieIcon />, label: "Phim", route: "movie" },
  { id: 3, icon: <StadiumIcon />, label: "Rạp", route: "cinema" },
];
