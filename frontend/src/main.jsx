import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import { AuthProvider } from "./contexts/Auth";

import OneFish from "./pages/Admin/OneFish";
import AdminFishs from "./pages/Admin/AdminFishs";
import Administration from "./pages/Admin/Administration";
import Home from "./pages/Home";
import Fishs from "./pages/Fishs";
import Peche from "./pages/Peche";
import Boat from "./pages/Boat";
import Comments from "./pages/Comments";
import Contact from "./pages/Contact";
import EditFishs from "./pages/Admin/EditFishs";
import Reservation from "./pages/Reservation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return connexion
        .get(`/fishs`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/galerie",
    element: <Fishs />,
    loader: async () => {
      return connexion
        .get(`/fishs`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/avis",
    element: <Comments />,
    loader: async () => {
      return connexion
        .get(`/comments`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/fish/:id",
    element: <OneFish />,
    loader: async ({ params }) => {
      return connexion
        .get(`/fishs/${params.id}`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/admin/prises/modifier/:id",
    element: <EditFishs />,
  },
  {
    path: "/peche-en-mer",
    element: <Peche />,
  },
  {
    path: "/bateau",
    element: <Boat />,
  },
  {
    path: "/réservation",
    element: <Reservation />,
  },
  {
    path: "/avis",
    element: <Comments />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Administration />,
  },
  {
    path: "/admin/prises",
    element: <AdminFishs />,
    loader: async () => {
      return connexion
        .get(`/fishs`)
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
  {
    path: "/admin/prises",
    element: <AdminFishs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
