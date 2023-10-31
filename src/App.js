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
import StorePage from "./pages/StorePage";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<AboutPage />} />
//     <Route path="/about" element={<AboutPage />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefination);

const router = createBrowserRouter([
  // {path: '/', element: ''},
  {path: '/home', element: <Home/>},
  {path: '/about', element: <AboutPage /> },
  {path: '/store', element: <StorePage />}
  
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
