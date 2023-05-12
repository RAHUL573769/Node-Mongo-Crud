import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Add from "../AddUser/Add";
import See from "./../SeeUser/See";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/adduser",
    element: <Add></Add>
  },
  {
    path: "/seeuser",
    element: <See></See>
  }
]);
export default router;
