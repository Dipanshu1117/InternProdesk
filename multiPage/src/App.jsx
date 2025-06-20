import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Register from "./component/Register"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
        <Navbar/>
        <Home/>
    </div>
  },
  {
    path: "/login",
    element:
    <div>
        <Navbar/>
        <Login/>
    </div>
  },
  {
    path: "/register",
    element:
    <div>
        <Navbar/>
        <Register/>
    </div>
  },
]);
const App = () => {

  return (
    <div>
     
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
