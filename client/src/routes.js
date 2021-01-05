// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import WeekStats from "views/WeekStats/WeekStats.js";
import TeamStats from "views/TeamStats/TeamStats.js";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  {
    path: "/week",
    name: "Week Stats",
    icon: "content_paste",
    component: WeekStats,
    layout: "/admin" 
  },
  {
    path: "/team",
    name: "Team Stats",
    icon: "content_paste",
    component: TeamStats,
    layout: "/admin" 
  }
];

export default dashboardRoutes;
