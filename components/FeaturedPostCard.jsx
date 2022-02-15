import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({post}) => (
  <div className="relative h-72">
    <div
      className="absolute inline-block w-full bg-center bg-no-repeat bg-cover rounded-lg shadow-md h-72"
      style={{backgroundImage: `url('${post.featuredImage.url}')`}}
    />
    <div className="absolute w-full bg-center rounded-lg opacity-50 bg-gradient-to-b from-gray-400 via-gray-700 to-black h-72" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 rounded-lg">
      <p className="mb-4 text-xs font-semibold text-white text-shadow">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="mb-4 text-2xl font-semibold text-center text-white text-shadow">
        {post.title}
      </p>
    </div>
    <Link href={`/blog/${post.slug}`}>
      <a>
        <span className="absolute w-full h-full cursor-pointer" />
      </a>
    </Link>
  </div>
);

export default FeaturedPostCard;
