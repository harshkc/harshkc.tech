import React from 'react';
import moment from 'moment';
import Image from 'next/image';
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
      <div className="absolute flex items-center justify-center w-full bottom-5">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full drop-shadow-lg"
          src={post.author.photo.url}
        />
        <p className="inline ml-2 font-medium text-white align-middle text-shadow">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/blog/${post.slug}`}>
      <a>
        <span className="absolute w-full h-full cursor-pointer" />
      </a>
    </Link>
  </div>
);

export default FeaturedPostCard;
