import * as React from 'react';
import Link from 'next/link';
import {CircleButton} from '../components';

function Introduction() {
  return (
    <div className="relative grid grid-cols-4 pt-16 pb-4 mx-auto gap-x-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 max-w-7xl">
      <div className="container relative mx-auto mt-12 h-52 w-72 sm:w-96 sm:h-72 col-span-full lg:col-span-5">
        <iframe
          src="https://www.loom.com/embed/71653330e9324258b414fdca05d687dc"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
      <div className="mt-12 col-span-full lg:col-span-6 lg:col-start-6 lg:mt-0 lg:pl-10">
        <h3 className="text-xl leading-tight md:text-2xl">
          Hi there! I’m{' '}
          <span className="font-semibold text-purple-600">Harsh</span>. I’m a
          passionate builder who loves building things with code.
        </h3>
        <p className="font-medium text-gray-400 text-small mt-7 md:text-xl">
          My first experience with programming was when I was 12, but I didn’t
          last long: I was a big fan of{' '}
          <span className="text-green-600">Prince of persia and NFS games</span>
          . Overwhelmed by choices I chose C language to start my journey and it
          became boring after a while. But, I kept looking to building things, I
          made a wordpress site for my{' '}
          <span className="text-green-600">uncle's business</span>. I was elated
          that day.
        </p>
        <p className="mt-5 font-medium text-gray-400 text-small md:text-xl">
          In high school, I realized that we just have to code the algo once and
          the software could run calculations and
          <span className="text-green-600">
            {' '}
            derive answers that were previously oﬀ-limits to me. It was magic.
          </span>{' '}
          Later in college, I saw how easy it was to build beautiful UI with
          HTML and CSS and I got sold. Since then, I’ve been honing my skills
          and learning Javascript and React.
        </p>
        <a
          href="https://drive.google.com/file/d/1VoOeA1Ro-nh2RVnjwQ-EHg-AG3z3gXri/view?usp=sharing"
          target="blank"
        >
          <button
            type="button"
            className="flex px-4 py-3 mt-6 font-medium text-white transition-transform duration-500 transform bg-green-600 rounded-full shadow-lg outline-none ease hover:translate-y-1 cursor pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="ml-2">Resume</span>
          </button>
        </a>
        <CircleButton to="#projects" text="Explore Projects" styles="mt-8" />
      </div>
    </div>
  );
}

export default Introduction;
