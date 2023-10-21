import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';

//Route function (provided by react) contains routs as objects in an array
//which displays what is shown in the url of the page ("/" is a home page)
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>about</h1>
      </div>
    ),
  },
]);

const App = () => {
  //using RouterProvided and creating instance of router from above
  return <RouterProvider router={router} />;
};

export default App;
