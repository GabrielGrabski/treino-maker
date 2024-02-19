import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import { Private } from "../components/private";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Account } from "../pages/account";
import { Workout } from "../pages/workout";
import { Category } from "../pages/category";
import { Settings } from "../pages/settings";
import { SideBarLayout } from "../components/sidebarLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Private>
            <SideBarLayout>
              <Home />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/home",
        element: (
          <Private>
            <SideBarLayout>
              <Home />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/account",
        element: (
          <Private>
            <SideBarLayout>
              <Account />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/workout",
        element: (
          <Private>
            <SideBarLayout>
              <Workout />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/categories",
        element: (
          <Private>
            <SideBarLayout>
              <Category />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/settings",
        element: (
          <Private>
            <SideBarLayout>
              <Settings />
            </SideBarLayout>
          </Private>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
