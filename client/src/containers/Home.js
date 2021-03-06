import React from "react";
// Link takaa sen, että päästään oikealle sivulle ja pysytään siellä 
// muuten palaa etusivulle 
// viittaus react routeriin
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Code Academy Joensuu 2020</h1>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/styling">Styling</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
