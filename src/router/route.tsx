import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Layout from "@/pages/index";
import NotFound from "@/pages/NotFound";
import Recommend from "@/pages/Recommend";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="recommend" />,
      },
      {
        path: "recommend",
        element: (
          <React.Suspense fallback={<>...</>}>
            <Recommend />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
