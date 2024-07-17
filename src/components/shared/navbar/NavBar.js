import Image from "next/image";
import React from "react";
import logo from "../../../app/assets/mozum2.PNG";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Members",
      pathname: "/all",
    },
    {
      route: "Gallery",
      pathname: "/gallery",
    },
    {
      route: "Sports",
      pathname: "/sports",
    },
    {
      route: "About",
      pathname: "/about",
    },
  ];
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black mb-4  text-white uppercase">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <button
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-orange-500 rounded-box z-[1] mt-3 w-52 p-2 shadow "
                >
                  {item.route}
                </button>
              </Link>
            ))}

            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-orange-300 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>All Members</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Sports</a>
              </li>
              <li>
                <a>Find In Map</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul> */}
          </div>
          <div className="felx">
            {/* <a className="btn btn-ghost text-xl ">𝓜𝓸𝔃𝓾𝓶𝓭𝓪𝓻 𝓑𝓪𝓻𝓲</a> */}
            {/* <a className="btn btn-ghost text-xl ">Mozumdar Bari</a> */}
            <Image width={200} height={0} src={logo} alt="logo" />
            {/* <h2 className="text-xm">South Ashrafpur</h2> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <ul className="menu menu-horizontal px-2  text-white font-semibold">
                {item.route}
              </ul>
            </Link>
          ))}
          {/* <ul className="menu menu-horizontal px-1  text-white font-semibold">
            <li>
              <a>All Members</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Sports</a>
            </li>
            <li>
              <a>Find In Map</a>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
