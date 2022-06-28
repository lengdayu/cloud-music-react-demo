import { Navigate } from "react-router-dom";

import Discover from "@/pages/discover";
import Recommend from "@/pages/discover/c-pages/recommend";
import Ranking from "@/pages/discover/c-pages/ranking";
import Songs from "@/pages/discover/c-pages/songs";
import DjRadio from "@/pages/discover/c-pages/djradio";
import Artist from "@/pages/discover/c-pages/artist";
import Album from "@/pages/discover/c-pages/album";

import Friend from "@/pages/friend";
import Mine from "@/pages/mine";

// 路由表
const routes = [
  {
    path: "/",
    element: <Navigate to={"/discover"}></Navigate>,
  },
  {
    path: "/discover",
    element: <Discover></Discover>,
    children: [
      {
        path: "",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "recommend",
        element: <Recommend></Recommend>,
      },
      {
        path: "ranking",
        element: <Ranking></Ranking>,
      },
      {
        path: "songs",
        element: <Songs></Songs>,
      },
      {
        path: "djradio",
        element: <DjRadio></DjRadio>,
      },
      {
        path: "artist",
        element: <Artist></Artist>,
      },
      {
        path: "album",
        element: <Album></Album>,
      },
    ],
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
