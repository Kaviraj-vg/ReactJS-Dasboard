import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="kavi-navigation">
      
      <ul>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
