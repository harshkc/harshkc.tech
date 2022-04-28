import React from 'react';
import Typewriter from 'typewriter-effect';

const typeWriterDelay = 30;

const content = {
  greeting: 'Hello!',
  job: "I'm a React and Flutter developer",
  graduation: 'and a software Engineer',
};

const PresentationCode = () => {
  const lineNumberClassName =
    'inline-block text-center md:mr-3 lg:mr-16 w5 text-gray-300';
  return (
    <div className="mx-5 my-6 font-sans text-xl leading-10 h-72 sm:h-auto md:text-3xl p-auto">
      <div className="inline">
        <span className={lineNumberClassName}>1</span>{' '}
        <span className="text-purple-600">const</span> Harsh ={' '}
        <span className="text-gray-400">&#123;</span>
        <br />
        <span className={lineNumberClassName}>2</span> &nbsp;&nbsp;
        <span className="font-light text-gray-400">
          // {content.greeting} :D
        </span>
        <br />
        <span className={lineNumberClassName}>3</span> &nbsp;&nbsp;
        <span className="font-light text-gray-400">// {content.job}</span>
        <br />
        <span className={lineNumberClassName}>4</span> &nbsp;&nbsp;passion: "
        <span className="text-green-500">Coding &hearts;</span>",
        <br />
        <Typewriter
          key={1}
          onInit={tw => {
            tw.changeDelay(typeWriterDelay)
              .typeString(
                `<span class="${lineNumberClassName}">5</span> &nbsp;&nbsp;<span class="text-gray-400 font-light">// ${content.graduation}</span><br />`,
              )
              .typeString(
                `<span class="${lineNumberClassName}">6</span> &nbsp;&nbsp;softwareEngineer: <span class="text-pink-600">true</span>,<br />`,
              )
              .typeString(
                `<span class="${lineNumberClassName}">7</span> <span class="text-gray-400">&#125;</span>&#59;`,
              )
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default PresentationCode;
