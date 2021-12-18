import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({post, position}) => (
  <>
    <div
      className="absolute inline-block w-full bg-center bg-no-repeat bg-cover rounded-lg shadow-md h-72"
      style={{backgroundImage: `url('${post.featuredImage.url}')`}}
    />
    <div className="absolute w-full bg-center rounded-lg opacity-50 bg-gradient-to-b from-gray-400 via-gray-700 to-black h-72" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 rounded-lg">
      <p className="text-xs font-semibold text-white text-shadow">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="text-2xl font-semibold text-center text-white text-shadow">
        {post.title}
      </p>
    </div>
    <Link href={`/blog/${post.slug}`}>
      <a>
        <span className="absolute z-10 w-full h-full cursor-pointer" />
      </a>
    </Link>
    {position === 'LEFT' && (
      <div className="absolute py-3 text-center bg-pink-600 rounded-full cursor-pointer arrow-btn bottom-5 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 w-full h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="absolute py-3 text-center bg-pink-600 rounded-full cursor-pointer arrow-btn bottom-5 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 w-full h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
