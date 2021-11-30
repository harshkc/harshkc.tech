import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {FaGithub} from 'react-icons/fa';

const ProjectCard = ({title, desc, links, imgSrc, techs}) => {
  const {website, github} = links[0];
  const scaleAnimation =
    'transition duration-500 ease transform hover:scale-105';
  return (
    <div
      className={`overflow-hidden shadow-lg w-72 sm:w-full h-full rounded-md bg-gray-100 bg-opacity-75 dark:bg-primary ${scaleAnimation}`}
    >
      <div className={`overflow-hidden relative`}>
        <div className={`w-72 h-full sm:w-full`}>
          <Image
            unoptimized
            height="300"
            width="550"
            layout="responsive"
            objectFit="cover"
            src={imgSrc}
            alt={title}
          />
        </div>
      </div>
      <div className={`flex mb-2 relative float-right right-2 -top-8`}>
        <div
          className={`text-gray-800 dark:text-gray-100 dark:hover:text-purple-600 hover:text-purple-600 text-2xl`}
        >
          <Link href={github} rel="noopener noreferrer">
            <a>
              <FaGithub />
            </a>
          </Link>
        </div>
      </div>
      <Link href={website} rel="noopener noreferrer">
        <a>
          <div
            className={`relative px-6 py-2 sm:py-4 h-full dark:bg-secondary cursor-pointer `}
          >
            <div
              className={`font-bold text-gray-800 dark:text-gray-100 text-xl leading-normal capitalize mb-1 truncate`}
            >
              {title}
            </div>
            <div
              className={`text-gray-700 dark:text-gray-300 mb-4 leading-snug`}
            >
              {desc}
            </div>

            <div>
              {techs.map(tech => {
                return (
                  <span
                    key={tech}
                    className={`inline-block bg-gray-200 dark:bg-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold capitalize text-gray-700 mr-2 mb-1`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
