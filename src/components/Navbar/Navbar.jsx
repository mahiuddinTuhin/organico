import React, { useState } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/Fa";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import logo from "./../../assets/ORGANICO-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItem = (
    <>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Subscribe & Save</a>
      </li>
      <li>
        <a>Bundle</a>
      </li>
      <li>
        <a>Recipes</a>
      </li>
      <li>
        <a>Find</a>
      </li>
      <li>
        <a>More</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              {isOpen === false ? <HiMenuAlt1 className="text-2xl" /> : <HiX />}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <img
            src={logo}
            className="rounded-xl object-contain w-2/3"
            alt="logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FaShoppingCart
                    className="text-2xl"
                    style={{ color: "ABC480" }}
                  />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="">
                  <FaUserAlt className="text-2xl" style={{ color: "ABC480" }} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
