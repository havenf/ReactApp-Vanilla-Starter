import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav id="nav">
      <Link to={''}>
        <div>
            Home
        </div>
      </Link>
      <Link to={'stuff'}>
        <div>
            Stuff
        </div>
      </Link>
    </nav>
  )
}