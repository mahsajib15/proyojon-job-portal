import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mb-5 bg-gray-300 fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Proyo<span className="text-red-600">jon</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
            >
              <li>Home</li>
            </NavLink>
            <a href="/shop" target="_blank" rel="noopener noreferrer">
              <li className="text-gray-700">Shop</li>
            </a>
            <a href="/skills" target="_blank" rel="noopener noreferrer">
              <li className="text-gray-700">Skills</li>
            </a>
          </ul>
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
            >
              <Button variant="outline" className="mx-3">
                Login
              </Button>
            </NavLink>
            <NavLink to="/findjob">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Find Job
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-2xl font-bold">Job Portal</h1>
            <button onClick={toggleMobileMenu} className="p-2">
              <X />
            </button>
          </div>
          <ul className="flex flex-col p-4 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
              onClick={toggleMobileMenu}
            >
              <li className="py-2">Home</li>
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
              onClick={toggleMobileMenu}
            >
              <li className="py-2">Jobs</li>
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
              onClick={toggleMobileMenu}
            >
              <li className="py-2">Skills</li>
            </NavLink>
            <div className="flex flex-col mt-4">
              <NavLink to="/login">
                <Button variant="outline" className="mb-2 w-full">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Sign Up
                </Button>
              </NavLink>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
