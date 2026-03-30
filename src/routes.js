




import Developer from "layouts/developer";
import Blog from "layouts/blog";


import { IoLogoElectron } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Page Developer",
    key: "developer",
    route: "/developer",
    icon: <IoLogoElectron size="15px" color="inherit" />,
    component: Developer,
    noCollapse: true,
  },
  {
    type: "route",
    name: "Blog",
    key: "blog",
    route: "/blog",
    component: Blog,
    noCollapse: true,
  }
];

export default routes;
