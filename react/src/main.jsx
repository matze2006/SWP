import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import PeopleContainer from "./components/0_sites/PeopleContainer";
import Sample from "./components/0_sites/Sample";

import UseState from "./components/0_sites/UseState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sample/>,
  },
  {
    path: "/peopleContainer",
    element: <PeopleContainer/>,
  },
  {
    path: "/useState",
    element: <UseState/>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

