import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <>
      <p>
        404
        <br />
        the page not found
      </p>
      <Link to="/">go to contacts page</Link>
    </>
  );
}

export default NotFound;
