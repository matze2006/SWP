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
import ÜbungsContainer from "./components/0_sites/ÜbungsContainer";


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
  {
    path: "/Übung",
    element: <ÜbungsContainer/>
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

