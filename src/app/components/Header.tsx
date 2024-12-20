import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl h-16 flex justify-between items-center px-4 mx-auto">
        <Link href="/">
          <span className="font-semibold text-lg">Miura</span>
        </Link>
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
                href={`${
                  process.env.NODE_ENV === "production"
                    ? "/portfolio-site/#projects"
                    : "/#projects"
                }`}
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href={`${
                  process.env.NODE_ENV === "production"
                    ? "/portfolio-site/#skills"
                    : "/#skills"
                }`}
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
}
