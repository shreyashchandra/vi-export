import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";




import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import Bid from "./pages/Bid.jsx";
import User from "./pages/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

    <Route path="" element={<User/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/bid" element={<Bid/>}/>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  
  </React.StrictMode>
);
