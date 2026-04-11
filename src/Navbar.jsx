import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/products" },     
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "Cart", to: "/Cart" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Disclosure as="nav" className="bg-gray-900 shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <div className="flex items-center text-white text-2xl font-bold uppercase tracking-widest">
                ☕ Chinova
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6">
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

                {/* Auth Buttons */}
                {user ? (
                  <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
                    <span className="text-gray-300 text-sm">Hi, {user.username}</span>
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:text-white text-sm font-medium transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
                    <NavLink to="/login" className="text-gray-300 hover:text-white text-sm font-medium">Login</NavLink>
                    <NavLink to="/signup" className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">Sign Up</NavLink>
                  </div>
                )}
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
              <hr className="border-gray-700 my-2" />
              {user ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-300 hover:text-white px-4 py-2 text-base font-medium"
                >
                  Logout ({user.username})
                </button>
              ) : (
                <>
                  <NavLink to="/login" className="block text-gray-300 hover:text-white px-4 py-2 text-base font-medium">Login</NavLink>
                  <NavLink to="/signup" className="block text-gray-300 hover:text-white px-4 py-2 text-base font-medium">Sign Up</NavLink>
                </>
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
