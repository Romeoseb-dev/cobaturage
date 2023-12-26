import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";

import App from "./App";
import Fishs from "./pages/Fishs";
import OneFish from "./pages/OneFish";
import AdminFishs from "./pages/Admin/AdminFishs";
import Administration from "./pages/Admin/Administration";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Fishs />,
        loader: async () => {
          return connexion
            .get(`/fishs`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/fishs/:id",
        element: <OneFish />,
        loader: async ({ params }) => {
          return connexion
            .get(`/fishs/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
  {
    path: "/admin",
    element: <Administration />,
    children: [
      {
        path: "prises",
        element: <AdminFishs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
