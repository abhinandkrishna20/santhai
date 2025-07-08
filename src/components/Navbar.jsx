import { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between w-full">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-orange-600">Santhai<span className="text-2xl font-bold text-green-800">.Com</span></span>
      </div>

      {/* Center: Menu + Search (hidden on mobile) */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Products</li>
          <li className="hover:text-orange-600 cursor-pointer">Cart</li>
        </ul>

        <div className="ml-6">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-1.5 border rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 text-gray-700">
        <FaUserCircle className="text-2xl cursor-pointer hover:text-orange-600" title="Profile" />
        <FaShoppingCart className="text-2xl cursor-pointer hover:text-orange-600" title="Cart" />
        <FaBell className="text-2xl cursor-pointer hover:text-orange-600" title="Notifications" />

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl ml-2 text-gray-700 hover:text-orange-600"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 z-50 md:hidden">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li className="hover:text-orange-600 cursor-pointer">Home</li>
            <li className="hover:text-orange-600 cursor-pointer">Products</li>
            <li className="hover:text-orange-600 cursor-pointer">Cart</li>
          </ul>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
