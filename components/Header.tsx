import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import MobileNavbar from "./MobileNavbar";

const Header = () => {
    return (
<>
<header className="relative h-14 w-full sm:px-10 px-5 flex items-center justify-between border-b border-text/40">
<IoIosSearch className="h-5 w-5 max-sm:hidden"/>
<a href="/" className="capitalize text-2xl font-clash">
  <h1>avion</h1>   
</a>

<span className="flex gap-4 items-center">
  {[IoIosSearch, IoCartOutline, FaRegUserCircle].map((Icon, ind) => (
    <a key={ind} href={ind === 1 ? "/cart" : "/"}>
      <Icon className={`${ind === 0 ? "sm:hidden" : "max-xs:hidden"} h-5 w-5`} />
    </a>
  ))}
</span>
<MobileNavbar />
</header>
<LowerHeader />
</>
    );
};

export default Header;


const LowerHeader = () => {
    return (
        <nav className="h-12 max-sm:hidden w-full flex items-center justify-center">
          <ul className="h-full flex items-center gap-8">
            {[
              "about",
              "products",
              "plan pots",
              "ceramics",
              "tables",
              "chairs",
        
              "crockery",
              "tableware",
              "cutlery",
            ].map((val, ind) => (
              <li key={ind} className="capitalize text-text cursor-pointer">
                 {val === "about" ? (
              <a href="/about">{val}</a>
            ) : val === "products" ? (
              <a href="/products">{val}</a>
            ) : (
              val
            )}
              </li>
            ))}
          </ul>
        </nav>
      );
    };
    