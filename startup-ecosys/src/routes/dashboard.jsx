import Dashboard from "views/Dashboard/Dashboard.jsx";
import Home from "views/Home/Home";
import Startups from "views/Startups/Startups";
import StartupPage from "views/StartupPage/StartupPage";
import InvestorPage from "views/InvestorPage/InvestorPage";
import Investors from "views/Investors/Investors";
import Mentors from "views/Mentors/Mentors";
import Incubators from "views/Incubators/Incubators";
import Nodal from "views/Nodal/Nodal";
import Insights from "../views/Insights/Insights";
import Requests from "../views/Requests/Requests";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Home
  },
  {
    path: "/insights",
    name: "Insights",
    icon: "nc-icon nc-diamond",
    component: Insights
  },
  {
    path: "/startups",
    name: "startups",
    icon: "nc-icon nc-pin-3",
    component: Startups
  },
  {
    path: "/investors",
    name: "Investors",
    icon: "nc-icon nc-bell-55",
    component: Investors
  },
  {
    path: "/mentors",
    name: "Mentors",
    icon: "nc-icon nc-single-02",
    component: Mentors
  },
  {
    path: "/incubators",
    name: "Incubators",
    icon: "nc-icon nc-tile-56",
    component: Incubators
  },
  // {
  //   path: "/govt",
  //   name: "Govt. Nodal Agencies",
  //   icon: "nc-icon nc-caps-small",
  //   component: Nodal
  // },
  {
    notShow: true,
    path: "/startup/:id",
    name: "Startup",
    component: StartupPage
  },
  {
    notShow: true,
    path: "/investor/:id",
    name: "Investor",
    component: InvestorPage
  },
  {
    notShow: true,
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    notShow: true,
    path: "/requests",
    name: "Requests",
    component: Requests
  },

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
