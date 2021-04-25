import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        beranda
      </Link>
      <Link to="/list-user">List</Link>
    </div>
  );
};

export default index;
