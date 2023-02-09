import React from "react";
import { FaFacebookF, FaPinterest, FaYoutube } from "react-icons/Fa";
import { FiInstagram } from "react-icons/Fi";
import { IoPeople } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "#ABC480" }}
        className="footer footer-center lg:footer p-10 text-zinc-600 justify-items-center justify-evenly no-underline text-xl lg:text-lg"
      >
        <div>
          <span className="border-b-2 border-slate-800 font-black">
            ONLINE SHOP
          </span>
          <a href="/" className="link no-underline hover:text-slate-200">
            Online Store
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Shipping
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Returns
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Breadscription
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Wholesale
          </a>
        </div>
        <div>
          <span className="border-b-2 border-slate-800 font-black">
            HELPFUL STUFF
          </span>
          <a href="/" className="link no-underline hover:text-slate-200">
            Recipes
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Easy Peasy Flour Mix Recipes
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Recyling Info
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Food Safety Standards
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Ebook
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Blog
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Sustainability
          </a>
        </div>
        <div>
          <span className="border-b-2 border-slate-800 font-black">
            QUESTIONS?
          </span>
          <a href="/" className="link no-underline hover:text-slate-200">
            Contact
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            FAQ
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Find a Store
          </a>
          <a href="/" className="link no-underline hover:text-slate-200">
            Store Request Form
          </a>
        </div>
        <div>
          <span className="border-b-2 border-slate-800 font-black">
            GET E-NEWS
          </span>
          <p>They're helpful and funny (sometimes, we try)!</p>
          <div className="form-control w-80 my-8 pl-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter email id"
                className="input border-l-neutral-700 input-bordered rounded-none w-full pr-16"
              />
              <button className="btn absolute top-0 right-0 rounded-none">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <span className="border-b-2 border-slate-800 font-black">
              FOLLOW US ON SOICAL MEDIA
            </span>
            <div className="flex text-xl mt-4 justify-center lg:justify-start">
              <a
                href="/"
                className="rounded-full hover:text-amber-600 p-2 border border-slate-800 mr-2 hover:border-amber-700 hover:shadow-xl"
              >
                <FiInstagram />
              </a>
              <a
                href="/"
                className="rounded-full hover:text-amber-600 p-2 border border-slate-800 mr-2 hover:border-amber-700 hover:shadow-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="/"
                className="rounded-full hover:text-amber-600 p-2 border border-slate-800 mr-2 hover:border-amber-700 hover:shadow-xl"
              >
                <IoPeople />
              </a>
              <a
                href="/"
                className="rounded-full hover:text-amber-600 p-2 border border-slate-800 mr-2 hover:border-amber-700 hover:shadow-xl"
              >
                <FaYoutube />
              </a>
              <a
                href="/"
                className="rounded-full hover:text-amber-600 p-2 border border-slate-800 mr-2 hover:border-amber-700 hover:shadow-xl"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
