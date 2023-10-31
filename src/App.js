import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import "./App.css";
import CartProvider from "./store/CartProvider";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<AboutPage />} />
//     <Route path="/about" element={<AboutPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefination);

const router = createBrowserRouter([
  // {path: '/', element: ''},
  { path: "/about", element: <AboutPage /> },
  {path: '/home', element: <Home/>}
]);

const App = () => {

  return (
    <div className="App">
      
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
};

export default App;
