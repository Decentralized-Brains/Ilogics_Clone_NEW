import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      <div className="flex justify-between items-center md:w-40 border p-1 md:p-3 rounded bg-[#A5A5A5] bg-opacity-10">
        <span className="font-medium text-base text-white hidden md:flex">
          Newest
        </span>
        <button
          className="text-gray-500 hover:text-gray-700 font-medium text-2xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute -left-24 top-11 rounded-b-md w-32 md:w-64 border bg-white">
          <ul className="list-none text-sm ">
            <li className="pt-2 px-2 text-base text-gray-400">Status</li>
            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                All
              </label>
            </li>

            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Active
              </label>
            </li>
            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Upcoming
              </label>
            </li>

            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Past
              </label>
            </li>

            <hr className="my-3 mx-3" />

            <li className="px-2 text-base text-gray-400">Level</li>

            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Easy
              </label>
            </li>

            <li className="flex justify-start items-center px-2 pt-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Medium
              </label>
            </li>

            <li className="flex justify-start items-center px-2 py-3">
              <input
                type="checkbox"
                id="checkbox1"
                class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                placeholder="Checkbox 1"
              />
              <label
                for="checkbox1"
                class="ml-2 block text-sm leading-5 text-gray-500"
              >
                Hard
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
