import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import User from "./components/users/User.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="users/" element={<User />}>
        <Route path=":userId" element={<User />} />
      </Route>
      <Route  
      loader={githubInfoLoader}
      path="/github" element={<Github />}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
