import React from 'react';


export default function AppFooter() {
    return (
      <footer className="w-full flex flex-col items-center z-0 bg-black py-3 flex-shrink-0 mt-auto print:hidden">
        <div className="container d-flex flex-column align-items-center">
          <p className="text-yellow-400 text-center block sm:hidden">GT CoC - The Makery</p>
          <p className="text-yellow-400 text-center hidden sm:block md:hidden">Georgia Tech College Of Computing - The Makery</p>
          <p className="text-yellow-400 text-center hidden md:block lg:hidden">Georgia Tech College Of Computing - The Makery - Inspiring makers, one at a time</p>
          <p className="text-yellow-400 text-center hidden lg:block">Georgia Tech College Of Computing - The Makery - Inspiring makers, one at a time. Updated Feb 23, 2021.</p>
        </div>
      </footer>
    );
}
