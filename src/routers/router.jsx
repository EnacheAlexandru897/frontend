import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Help from "../pages/help/Help";
import New from "../pages/new/New";
import Men from "../pages/men/Men";
import Women from "../pages/women/Women";
import Kids from "../pages/kids/Kids";
import Jordan from "../pages/jordan/Jordan";
import Membership from "../pages/membership/Membership";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/frontend",
    element: <App />,
    children: [
      {
        path: '/frontend',
        element: <Home />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/new',
        element: <New />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
        path: '/kids',
        element: <Kids />
      },
      {
        path: '/jordan',
        element: <Jordan />
      },
      {
        path: '/membership',
        element: <Membership />
      }
    ]
  },
  {
    path: "/signIn",
    element: <SignIn />
  }
]);


export default router;