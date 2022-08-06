import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ArticleIcon from "@mui/icons-material/Article";
import MovieIcon from "@mui/icons-material/Movie";
import AppsIcon from "@mui/icons-material/Apps";
export const mainNavBarItems = [
  {
    id: 0,
    icon: <MovieIcon />,
    label: "Lịch chiếu",
    to: "movie-showing",
  },
  { id: 1, icon: <ConfirmationNumberIcon />, label: "Cụm rạp", to: "cinema-showing" },
  { id: 2, icon: <ArticleIcon />, label: "Tin tức", to: "news-showing" },
  { id: 3, icon: <AppsIcon />, label: "Ứng dụng", to: "application-showing" },
];
