import React from "react";
import './app.css';
import Dashboard from './pages/dashboard/dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*AppRoutes Component is the Main Functional component which is
reponsible for all the private and public Route, 
add path for route and element for the component 
*/
function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },

  ]);
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutes;
