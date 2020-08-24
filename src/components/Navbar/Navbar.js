import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}
