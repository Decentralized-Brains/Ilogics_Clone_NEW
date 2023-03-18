import React from "react";
import DropdownMenu from "../../components/DropdownMenu";
import { NavLink, Outlet } from "react-router-dom";

const BoxNavbar = () => {
  const BoxNav = [
    {
      id: 1,
      name: "Boxes",
      path: "/boxes",
    },
    {
      id: 2,
      name: "Cubes",
      path: "/cubes",
    },
    {
      id: 3,
      name: "Cloths",
      path: "/cloths",
    },
  ];

  return (
    <div className="pt-10">
      <div className="container">
        <div className="flex justify-between items-center ">
          <nav className="text-sm md:text-2xl font-extrabold gap-x-4 flex text-white">
            {BoxNav.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  className={({ isActive }) =>
                    isActive
                      ? "animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] bg-clip-text text-transparent flex flex-col "
                      : "text-white flex-col"
                  }
                  to={item.path}
                >
                  <span>{item.name}</span>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "h-2 w-10 md:w-20 mt-2 animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] mx-auto rounded"
                        : "hidden"
                    }
                    to={item.path}
                  ></NavLink>
                </NavLink>
              );
            })}
          </nav>
          <div>
            <DropdownMenu />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BoxNavbar;

// className="animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] bg-clip-text text-transparent"
