import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRouter = (route) => {
    if (route === location.pathname) {
      return true;
    }
    return false;
  };

  return (
    <div className="shadow-sm border-b sticky top-0 z-50 bg-white">
      <header className="px-5 flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="realtor logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="flex items-center space-x-10">
          <li
            className={`text-sm border-b-transparent border-b-4 cursor-pointer py-3 ${
              pathMatchRouter("/")
                ? "text-black font-semibold border-b-red-500"
                : "text-gray-500"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`text-sm border-b-transparent border-b-4 cursor-pointer py-3
        ${
          pathMatchRouter("/offers")
            ? "text-black font-semibold border-b-red-500"
            : "text-gray-500"
        }`}
            onClick={() => navigate("/offers")}
          >
            Offers
          </li>
          <li
            className={`text-sm border-b-transparent border-b-4 cursor-pointer py-3 ${
              pathMatchRouter("/sign-in")
                ? "text-black font-semibold border-b-red-500"
                : "text-gray-500"
            }`}
            onClick={() => navigate("/sign-in")}
          >
            sign in
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
