import React from 'react';
import moment from 'moment';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {useTheme} from 'next-themes';
import Head from 'next/head';

const PostDetail = ({post}) => {
  const theme = useTheme();

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <strong className="text-gray-700 dark:text-gray-100" key={index}>
            {text}
          </strong>
        );
      }

      if (obj.italic) {
        modifiedText = (
          <em className="font-medium text-pink-600" key={index}>
            {text}
          </em>
        );
      }

      if (obj.underline) {
        modifiedText = (
          <u className="shadow-link" key={index}>
            {text}
          </u>
        );
      }

      if (obj.href) {
        modifiedText = (
          <a
            target="_blank"
            className="font-medium text-black dark:text-white shadow-link hover:shadow-hover"
            href={obj.href}
            key={index}
          >
            {obj.children[0].text}
          </a>
        );
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-2xl font-semibold leading-10">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p
            key={index}
            className="mb-8 text-lg text-gray-800 dark:text-gray-100"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="mb-4 font-semibold leading-8 text-md">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'code-block':
        return (
          <div
            key={index}
            className="p-6 mb-8 bg-gray-100 rounded-md text-md md:text-lg dark:bg-primary"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>
                <SyntaxHighlighter
                  customStyle={{
                    backgroundColor: 'transparent',
                    color: theme.theme === 'dark' ? '#fff' : '#000',
                  }}
                  language="jsx"
                  showLineNumbers={true}
                >
                  {item}
                </SyntaxHighlighter>
              </React.Fragment>
            ))}
          </div>
        );
      case 'block-quote':
        return (
          <blockquote
            key={index}
            className="p-4 my-8 text-2xl text-center text-gray-600 dark:text-gray-300"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </blockquote>
        );
      case 'image':
        return (
          <div
            key={index}
            className="flex justify-center max-w-full max-h-full rounded-md my-14"
          >
            <img
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
            />
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content="Learn React,React blogs, Testing in JavaScript, Testing in React, Learn JavaScript, Learn TypeScript, harsh choudhary, kent c dodds, dan abramov, ."
        />
        <meta name="image" content={post.featuredImage.url} />

        <meta
          property="og:url"
          content={`https://harshkc.tech/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:creator" content="@harshkc99" />
        <meta name="twitter:site" content="@harshkc99" />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage.url} />
        <meta name="twitter:alt" content={post.title}></meta>

        <link
          rel="canonical"
          href={`https://harshkc.tech/blog/${post.slug}`}
        ></link>
      </Head>

      <div className="pb-12 mb-8 bg-white rounded-lg shadow-lg dark:bg-secondary lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-cover object-top w-full h-full rounded-t-lg shadow-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center w-full mb-8">
            <div className="items-center justify-center hidden mt-1 mr-8 md:flex lg:mb-0 lg:w-auto">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline ml-2 text-lg font-medium text-gray-700 align-middle dark:text-gray-200">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-6 h-6 mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-bold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item),
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
