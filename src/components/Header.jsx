import React from "react"
import { NavLink } from "react-router-dom"
import { logo } from "../FIle/Exporter.js"

const Header = () => {
  return (
    <nav className="max-w-7xl mx-auto w-full sm:px-8 xl:px-0 px-4 h-[76px] flex justify-center items-center ">
      <div className="w-full flex justify-between ">
        <span className="flex justify-center items-center">
          <NavLink
            to="/"
            className="first-letter:text-red-600 first-letter:text-xl text-xl"
          >
            <img src={logo} className="w-9 h-9" alt="" />
          </NavLink>
        </span>

        <li className="flex flex-row gap-4 justify-center items-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>About</NavLink>
          <a href={"#features"}>Features</a>
        </li>
      </div>
    </nav>
  )
}

export default Header
Header
