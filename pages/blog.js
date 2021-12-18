import {FeaturedPosts} from '../sections/index';
import {PostCard, Categories, PostWidget} from '../components';
import {getPosts} from '../services';
import Head from 'next/head';

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>The Harsh Choudhary blog</title>
        <meta
          name="description"
          content="Join skilled and smart people who have read Harsh's articles on JavaScript, TypeScript, React, Testing, Career, and more."
        />
        <meta
          name="keywords"
          content="Learn React,React blogs, Testing in JavaScript, Testing in React, Learn JavaScript, Learn TypeScript,Learn Tailwindcss, kent c dodds, dan abramov, harsh choudhary."
        />
        <meta name="image" content="https://i.imgur.com/yQD64J6.png"></meta>

        <meta property="og:url" content="https://harshkc.tech/blog" />
        <meta property="og:title" content="The Harsh Choudhary blog" />
        <meta
          property="og:description"
          content="Join skilled and smart people who have read Harsh's articles on JavaScript, TypeScript, React, Testing, Career, and more."
        />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="The Harsh Choudhary blog" />
        <meta name="twitter:site" content="@harshkc99" />
        <meta
          name="twitter:description"
          content="Join skilled and smart people who have read Harsh's articles on JavaScript, TypeScript, React, Testing, Career, and more."
        />
        <meta name="twitter:alt" content="The Harsh Choudhary blog"></meta>
        <meta
          name="twitter:image"
          content="https://i.imgur.com/yQD64J6.png"
        ></meta>

        <link rel="canonical" href="https://harshkc.tech"></link>
      </Head>

      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {posts},
  };
}
