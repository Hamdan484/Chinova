"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom"; // ✅ use NavLink for active styling

const navigation = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/products" },     // ✅ lowercase
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <div className="flex items-center text-white text-2xl font-bold">
                ☕ Chinova
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-white text-gray-900"
                          : "text-gray-300 hover:bg-white/10 hover:text-white",
                        "px-4 py-2 rounded-md text-sm font-medium transition"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Button */}
              <div className="md:hidden">
                <DisclosureButton className="text-gray-300 hover:text-white focus:outline-none">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden bg-gray-800">
            <div className="space-y-2 px-4 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-white text-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white",
                      "block px-4 py-2 rounded-md text-base font-medium transition"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
