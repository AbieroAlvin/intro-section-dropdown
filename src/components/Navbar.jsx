import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(false);

  const handleChange = () => setChange(!change);

  const handleClick = () => setClick(!click);
  return (
    <div className="font-epilogue md:px-10 px-4 w-full flex items-center mt-4 navbar z-10">
      <div className="logo text-3xl mr-20 md:text-4xl font-bold ">snap</div>

      <div className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="flex first-ul">
          <li className="p-4 text-sm text-[var(--m-gray)]">
            <Menu as="div" className="relative text-left inline-block">
              <Menu.Button
                onClick={handleChange}
                className={"flex items-center gap-[10px] hover:text-black"}
              >
                Features
                {change ? (
                  <FaChevronDown size={10} />
                ) : (
                  <FaChevronUp size={10} />
                )}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-left h-auto divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none px-4 py-2">
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4">
                      <img
                        src="src\images\icon-todo.svg"
                        alt="/"
                        className="h-[16px] w-[16px]"
                      />
                      Todo list
                    </span>
                  </Menu.Item>
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4">
                      <img
                        src="src\images\icon-calendar.svg"
                        alt="/"
                        className="h-[16px] w-[16px]"
                      />
                      Calendar
                    </span>
                  </Menu.Item>
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4">
                      <img
                        src="src\images\icon-reminders.svg"
                        alt="/"
                        className="h-[16px] w-[16px]"
                      />
                      Reminders
                    </span>
                  </Menu.Item>
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4">
                      <img
                        src="src\images\icon-planning.svg"
                        alt="/"
                        className="h-[16px] w-[16px]"
                      />
                      Planning
                    </span>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-4 text-sm text-[var(--m-gray)]">
            <Menu as="div" className="relative text-center inline-block">
              <Menu.Button
                onClick={handleChange}
                className={"flex items-center gap-[10px] hover:text-black"}
              >
                Company
                {change ? (
                  <FaChevronDown size={10} />
                ) : (
                  <FaChevronUp size={10} />
                )}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none px-4 py-2 flex flex-col items-center ">
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4 text-[14px]">
                      History
                    </span>
                  </Menu.Item>
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4 text-[14px]">
                      Our Team
                    </span>
                  </Menu.Item>
                  <Menu.Item className="py-1 px-1 cursor-pointer">
                    <span className="flex items-center gap-4 text-[14px]">
                      Blog
                    </span>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-4 text-sm text-[var(--m-gray)] flex items-center gap-[10px] hover:text-black cursor-pointer">
            <span>Careers</span>
          </li>
          <li className="p-4 text-sm text-[var(--m-gray)] flex items-center gap-[10px] hover:text-black cursor-pointer">
            <span>About</span>
          </li>
        </ul>
        <div className="flex items-center text-sm">
          <ul className="flex items-center text-[var(--m-gray)] gap-6">
            <li className="hover:text-black duration-300">
              <a href="#">Login</a>
            </li>
            <li className="border-2 border-[var(--m-gray)] px-4 rounded-xl py-1 hover:text-black hover:border-black transition-all duration-300 cursor-pointer register">
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {click ? (
        <div className="bg-black/60 fixed w-full h-screen z-5 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} className="cursor-pointer" />
        ) : (
          <FaBars size={25} className="cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
