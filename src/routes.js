




import Developer from "layouts/developer";


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
  }
];

export default routes;
