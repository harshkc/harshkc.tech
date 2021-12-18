import React from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import {FaSun, FaMoon, FaBars} from 'react-icons/fa';
import {navItems} from '../utils/util';
import {useTheme} from 'next-themes';

const Header = () => {
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      id="header"
      className="relative flex flex-wrap items-center justify-center px-2 py-3 mx-6 bg-white md:mb-3 dark:bg-primary"
    >
      <div className="container flex flex-wrap items-center justify-between py-8">
        <div
          className={`w-full relative whitespace-nowrap flex justify-between items-center md:w-auto md:static md:block md:justify-start font-medium text-2xl`}
        >
          <Link href="/">
            <a>Harsh Choudhary</a>
          </Link>
          <div className="flex justify-end">
            <button
              className="block p-3 text-xl leading-none border border-solid rounded-full outline-none cursor-pointer border-gray md:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
            <button
              aria-label="Toggle theme"
              onClick={() => toggleTheme()}
              className="inline-flex items-center justify-center pl-3 md:hidden"
            >
              {process.browser ? (
                theme === 'dark' ? (
                  <FaMoon size="1.15em" />
                ) : (
                  <FaSun size="1.15em" />
                )
              ) : null}
            </button>
          </div>
        </div>
        <div
          className={`md:flex flex-grow  items-center ${
            navbarOpen ? ' flex flex-start py-4 ' : ' hidden justify-center'
          }`}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col list-none md:flex-row">
            {navItems.map(link => (
              <li
                key={link.name}
                className={`nav-item ${navbarOpen ? 'py-3' : ''}`}
                onClick={navbarOpen ? () => setNavbarOpen(false) : null}
              >
                <Link href={link.to}>
                  <a>
                    <span
                      className={`${!navbarOpen ? 'mx-6' : ''} ${
                        router.pathname === link.to
                          ? 'text-pink-600'
                          : 'text-gray-600 dark:text-gray-200 dark:hover:text-pink-600'
                      } font-medium cursor-pointer hover:text-pink-600 `}
                    >
                      {link.name}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          aria-label="Toggle theme"
          onClick={() => toggleTheme()}
          className="hidden cursor-pointer md:block"
        >
          {process.browser ? (
            theme === 'dark' ? (
              <FaMoon size="1.35em" />
            ) : (
              <FaSun size="1.35em" />
            )
          ) : null}
        </button>
      </div>
    </nav>
  );
};

export default Header;
