import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
/**
 * Simple Error page with useRouteError which give simple info about the errors such as "404", "",
 * @returns
 */
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Navigate Back Home</Link>
    </div>
  );
};

export default Error;
