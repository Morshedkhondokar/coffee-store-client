import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Mainlayout from "./layout/Mainlayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/coffees"),
      },
      {
        path: "/coffeeDetails/:id",
        Component: CoffeeDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
