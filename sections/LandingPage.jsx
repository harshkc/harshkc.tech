import React from 'react';
import {PresentationCode, Avatar} from '../components/';
import Link from 'next/link';
import {CircleButton} from '../components';

const LandingPage = () => {
  return (
    <>
      <div className="container flex justify-between mb-2">
        <PresentationCode />
        <Avatar />
      </div>
      <button className="mx-8 mt-8 ">
        <Link href="/blog">
          <a>
            <span className="inline-block px-8 py-3 font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer ease hover:-translate-y-1">
              Read the blogs
            </span>
          </a>
        </Link>
      </button>
      <CircleButton
        to="#about"
        text="Know more about Harsh"
        styles="mx-8 mt-8"
      />
    </>
  );
};

export default LandingPage;
