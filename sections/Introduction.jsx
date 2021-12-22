import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {CircleButton} from '../components';

function Introduction() {
  return (
    <div className="relative grid grid-cols-4 pt-16 pb-4 mx-auto gap-x-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 max-w-7xl">
      <div className="container relative mx-auto w-60 h-60 sm:w-96 sm:h-96 col-span-full lg:col-span-4">
        <Image
          unoptimized
          layout="fill"
          src={'https://imgur.com/WPt3gTJ.jpg'}
          alt="Author standing picture"
        />
      </div>
      <div className="mt-12 col-span-full lg:col-span-6 lg:col-start-6 lg:mt-0">
        <div className="text-xl leading-tight md:text-2xl">
          Hi there! I’m Harsh. I’m a passionate builder who loves building
          things with code.
        </div>
        <p className="mt-12 font-medium text-gray-400 text-large md:text-xl">
          {`
              I'm a Front-end and mobile developer with a passion for building scalable and maintainable applications.
              I love to code in
        `}
          <span className="text-green-600">
            JavaScript, TypeScript, React, Flutter, Dart, and C++.
          </span>
        </p>
        <p className="mt-12 font-medium text-gray-400 text-large md:text-xl">
          {`
            I'm also a big sports enthusiast. When I'm not at the computer you can find me playing cricket,
            watching football, or playing badminton. I'm also a big fan of the latest tech and gadgets.
          `}
        </p>
        <Link href="https://drive.google.com/file/d/1OnVViDEXj3mP8hrBQzlvpn5ZA0P-SAGo/view?usp=sharing">
          <a>
            <button
              type="button"
              className="flex px-4 py-3 mt-6 font-medium text-white transition-transform duration-500 transform bg-green-600 rounded-full shadow-lg outline-none ease hover:translate-y-1 cursor pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="ml-2">Resume</span>
            </button>
          </a>
        </Link>

        <CircleButton to="#projects" text="Explore Projects" styles="mt-8" />
      </div>
    </div>
  );
}

export default Introduction;
