import React from "react";
import Link from "next/link";
import { getAssetPath } from "./Utils/Process";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl h-16 flex justify-between items-center px-4 mx-auto">
        <Link href={getAssetPath("/")}>
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
              <Link
                href={getAssetPath("/#projects")}
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={getAssetPath("/#skills")}
                className="transition-all text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
              >
                Skills
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
