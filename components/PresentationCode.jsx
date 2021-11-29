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
    <div className="mx-5 my-6 font-sans text-xl leading-10 md:text-3xl p-auto">
      <Typewriter
        className="inline"
        key={1}
        onInit={tw => {
          tw.changeDelay(typeWriterDelay)
            .typeString(
              `<span class="${lineNumberClassName}">1</span> <span class="text-purple-600">const</span> 
              Harsh = <span class="text-gray-400">&#123;</span><br />
              <span class="${lineNumberClassName}">2</span> &nbsp;&nbsp;
              <span class="text-gray-400 font-light">// ${content.greeting} :D<br />`,
            )
            .typeString(
              `<span class="${lineNumberClassName}">3</span> &nbsp;&nbsp;<span class="text-gray-400 font-light">// ${content.job}</span><br />`,
            )
            .typeString(
              `<span class="${lineNumberClassName}">4</span> &nbsp;&nbsp;passion: "<span class="text-green-500">Front-end &hearts;</span>",<br />`,
            )
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
  );
};

export default PresentationCode;
