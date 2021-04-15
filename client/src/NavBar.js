import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/styling">Styling</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
    </div>
  );
}