import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl h-16 flex justify-between items-center px-4 mx-auto">
        <span className="font-semibold text-lg">Miura</span>
        <nav>
          <ul className="flex space-x-8 text-sm">
            {/* <li>
              <a
                href="#about"
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                About
              </a>
            </li> */}
            <li>
              <a
                href="#projects"
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
