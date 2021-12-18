import React from 'react';
import Link from 'next/link';
import {FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {contactLinks, navItems} from '../utils/util';

export const socialIcons = [
  {
    name: 'twitter',
    to: 'https://twitter.com/harshkc99',
    icon: <FaTwitter />,
    color: 'text-blue-400',
  },
  {
    name: 'github',
    to: 'https://github.com/harshkc',
    icon: <FaGithub />,
    color: 'text-gray-800',
  },
  {
    name: 'linkedin',
    to: 'https://www.linkedin.com/in/harshkc99',
    icon: <FaLinkedinIn />,
    color: 'text-blue-700',
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative pt-20 mt-0 bg-gray-100 dark:bg-secondary "
    >
      <div className="container px-4 mx-0 sm:mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <p className="pb-4 text-3xl font-semibold text-gray-700 dark:text-white">
              Let's keep in touch!
            </p>
            <h5 className="mt-0 mb-2 text-lg text-gray-600 dark:text-gray-200">
              Find Harsh on any of these platforms.
            </h5>
            <div className="flex my-6 row lg:mb-0">
              {socialIcons.map(icon => (
                <Link key={icon.name} href={icon.to}>
                  <a>
                    <button
                      className={`transition duration-500 ease transform hover:-translate-y-1 bg-white dark:bg-primary cursor-pointer ${icon.color} dark:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2`}
                      type="button"
                    >
                      {icon.icon}
                    </button>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full px-4 my-2 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                  Contact
                </span>
                <ul className="list-unstyled">
                  {contactLinks.map(contact => (
                    <li
                      key={contact.name}
                      className="block pb-2 text-sm font-semibold text-gray-600 dark:text-gray-300 dark:hover:text-white hover:text-gray-800"
                    >
                      <Link href={contact.to}>
                        <a>{contact.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full px-4 mt-2 sm:mt-0 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                  Site Map
                </span>
                <ul className="list-unstyled">
                  {navItems.map(link => (
                    <li
                      key={link.name}
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                      <Link href={link.to}>
                        <a>{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center pb-6 mt-4 md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-medium text-gray-600 dark:text-white">
              All rights reserved © Harsh Choudhary{' '}
              <span id="get-current-year">{new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
