import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import { filtered } from 'utils/Redirects';

import logo from 'assets/images/makery-logo.png';

const navItems = filtered("showNav");

export default function NavBar(props) {
  const [ responsive, setResponsive ] = useState(false);
  const navBarRef = useRef(null);

  useEffect(() => {
    const documentClickHandler = event => {
      if (responsive && navBarRef.current && event.target !== navBarRef.current) {
        setResponsive(false);
      }
    }
    document.addEventListener("click", documentClickHandler);
    return () => {
      document.removeEventListener("click", documentClickHandler);
    }
  }, [responsive]);

  return (
    <nav ref={navBarRef} className="flex items-center justify-between flex-wrap bg-black p-3 z-50">
      <Link to="/" className="flex items-center flex-shrink-0 text-white hover:text-yellow-400 mr-6">
        <img src={logo} className="fill-current h-14 mr-2" alt="Makery logo" />
        <span className="font-semibold text-2xl tracking-tight">The Makery</span>
      </Link>
      <div className="block md:hidden">
        <button onClick={() => setResponsive(!responsive)} className="flex items-center z-50 px-3 py-2 border rounded text-white border-white hover:text-yellow-400 hover:border-yellow-400 outline-none">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full ${responsive ? "block z-50" : "hidden"} flex-grow md:flex md:items-center md:w-auto absolute md:relative top-full md:top-0 bg-black -ml-3 md:ml-0 p-3 md:p-0 pt-0`}>
        <div className="text-base md:flex-grow">
          <Link to="/workshops" className="block mt-4 mb-4 md:mb-0 md:inline-block md:mt-0 text-white hover:text-yellow-400 mr-4">
            Workshops
          </Link>
          {Object.entries(navItems).map(([shortName, data]) => {
            return <Link key={shortName} to={`/${shortName}`} className="block mt-4 mb-4 md:mb-0 md:inline-block md:mt-0 text-white hover:text-yellow-400 mr-4">
              {data.longName}
            </Link>
          })}
        </div>
      </div>
    </nav>
  );
}
