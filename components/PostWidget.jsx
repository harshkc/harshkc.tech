import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import {graphCMSImageLoader} from '../utils/util';
import {getSimilarPosts, getRecentPosts} from '../services';

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then(result => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then(result => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg dark:bg-secondary">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="flex-none w-16">
              <Image
                loader={graphCMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                unoptimized
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 dark:text-gray-200 font-xs">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={index}>
                <a className="hover:underline">{post.title}</a>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-200 font-xs">
          No posts right now.
        </p>
      )}
    </div>
  );
};

export default PostWidget;
