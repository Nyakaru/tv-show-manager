import Shows from "../views/shows";
import Watched from "../views/watched";
import Schedule from "../views/schedule";
import Favorite from "../views/favorite";
import Login from "../views/login";
import SignUp from "../views/signUp";

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
    path: "/login",
    name: "Login",
    icon: "mdi mdi-credit-card-multiple",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    icon: "mdi mdi-credit-card-multiple",
    component: SignUp,
  },
  {
    path: "/",
    pathTo: "/shows",
    name: "Dashboard",
    redirect: true,
  },
];
export default ThemeRoutes;
