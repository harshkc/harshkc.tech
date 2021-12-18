import React from 'react';
import Image from 'next/image';

import {graphCMSImageLoader} from '../utils/util';

const Author = ({author}) => (
  <div className="relative p-12 mt-20 mb-8 text-center bg-red-200 rounded-lg dark:bg-gray-800 bg-opacity-30">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="mt-4 mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
      {author.name}
    </h3>
    <p className="text-gray-800 dark:text-gray-100 text-ls">{author.bio}</p>
  </div>
);

export default Author;
