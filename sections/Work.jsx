import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {CircleButton} from '../components';
import WorkPng from '../public/images/work.png';

const Work = () => {
  return (
    <div className="bg-white dark:bg-primary">
      <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
        <div className="sticky flex flex-col w-full pl-4 pr-8 mt-2 md:top-36 lg:w-1/3 md:mt-12">
          <p className="font-medium text-green-600 uppercase tracking-loose">
            Professional & Volunteer
          </p>
          <p className="mb-2 text-3xl font-medium leading-normal md:text-4xl md:leading-relaxed">
            Work Experience
          </p>
          <p className="mb-4 text-sm font-semibold text-gray-600 dark:text-gray-300 md:text-base">
            He is currently looking for challenging Front-End intern roles.
          </p>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 md:text-base">
            Till now he has developed and launched 3 mobile-apps for a startup -{' '}
            <strong>Sweet2th</strong>, a platform for people to connect with
            bakeries and restaurants which has{' '}
            <strong>active users in thousands</strong>.
          </p>
          <button className="my-8 text-left">
            <Link href="/blog">
              <a>
                <span className="inline-block px-8 py-3 font-medium text-white transition duration-500 transform bg-pink-600 rounded-full cursor-pointer ease hover:-translate-y-1">
                  Read the blogs
                </span>
              </a>
            </Link>
          </button>
          <CircleButton to="#contact" text="Contact Harsh" />
        </div>
        <div className="sticky ml-0 md:ml-12 lg:w-2/3">
          <div className="container h-full mx-auto w-80 sm:w-full">
            <div className="relative h-full px-3 py-10 overflow-hidden sm:px-10 wrap">
              <div className="absolute h-full border border-green-600 border-solid rounded-sm sm:border-2 right-1/2"></div>
              <div className="absolute h-full border border-green-600 border-solid rounded-sm sm:border-2 left-1/2"></div>
              <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-green-600">Jul, 2021</p>
                  <div className="mb-3 text-lg font-bold md:text-2xl">
                    Freelance Web developer
                  </div>
                  <p className="text-sm leading-snug text-gray-600 text-opacity-100 dark:text-gray-300 md:text-base">
                    Made business website for a startup -{' '}
                    <strong> Aspire Minds</strong>. Designed, coded and deployed
                    the website and helped them create their online presence.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mb-8 right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-left">
                  <p className="mb-3 text-base text-green-600">Aug-Nov, 2020</p>
                  <div className="mb-3 text-lg font-bold md:text-2xl">
                    Flutter Research Developer
                  </div>
                  <p className="text-sm leading-snug text-gray-600 dark:text-gray-300 md:text-base ">
                    <strong>Developed & deployed</strong> cross-platform Flutter
                    app from scratch for a Food-tech startup - Sweet2th. Reduced{' '}
                    <strong>app size by 20%</strong> by spilting. Minimized
                    network calls by optimising navigation stack and caching.
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p className="mb-3 text-base text-green-600">Aug-Nov, 2020</p>
                  <div className="mb-3 text-lg font-bold md:text-2xl">
                    Flutter Research Developer
                  </div>
                  <p className="text-sm leading-snug text-gray-600 text-opacity-100 dark:text-gray-300 md:text-base">
                    contd...
                    <br />
                    Acquired hands-on industrial experience in production level
                    mobile app development, app deployment, integration of cloud
                    services and payments SDK. Increased{' '}
                    <strong>code coverage by 45%</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full mb-8 right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4">
                  <p className="mb-3 text-base text-green-600">
                    {' '}
                    Jul-Current, 2019
                  </p>
                  <div className="mb-3 text-lg font-bold md:text-2xl">
                    Founder CodeTronics (Volunteer)
                  </div>
                  <p className="text-sm leading-snug text-gray-600 text-opacity-100 dark:text-gray-300 md:text-base">
                    CodeTronics main aim is to provide quality training and
                    conduct competitions to develop coding skills in the
                    students. Lead a team of <strong>30 people</strong>{' '}
                    conducting 9 events in the year 2019-2020.
                  </p>
                </div>
              </div>
            </div>
            <div className="container relative w-64 h-64 mx-auto sm:w-96 sm:h-80">
              <Image
                placeholder="blur"
                layout="fill"
                alt="working developer"
                src={WorkPng}
                blurDataURL=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
