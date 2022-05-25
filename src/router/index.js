import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

// 路由表
const routes = [
  {
    path: "/",
    element: <Discover></Discover>,
  },
  {
    path: "/friend",
    element: <Friend></Friend>,
  },
  {
    path: "/mine",
    element: <Mine></Mine>,
  },
];

export default routes;
