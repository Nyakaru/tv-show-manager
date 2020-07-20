import Shows from "../views/shows";
import Watched from "../views/watched";
import Schedule from "../views/schedule";
import Favorite from "../views/favorite";

var ThemeRoutes = [
  {
    path: "/shows",
    name: "Dashboard",
    icon: "mdi mdi-adjust",
    component: Shows,
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "mdi mdi-toggle-switch",
    component: Schedule,
  },
  {
    path: "/watched",
    name: "Watched",
    icon: "mdi mdi-comment-processing-outline",
    component: Watched,
  },
  {
    path: "/favorite",
    name: "Favorites",
    icon: "mdi mdi-credit-card-multiple",
    component: Favorite,
  },
  {
    path: "/shows",
    pathTo: "/shows",
    name: "Dashboard",
    redirect: true,
  },
];

export default ThemeRoutes;
