import React from 'react';

const SectionLayout = ({children, spacing, id, name, styles}) => {
  return (
    <section className="mt-24" id={id}>
      <div className={`${spacing} flex align-center justify-center ${styles}`}>
        <div className="text-3xl font-bold sm:text-4xl">{name}</div>
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
