import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden sm:inline-block">
      <Image
        unoptimized
        height="290px"
        width="290px"
        layout="fixed"
        alt="Display picture of the author"
        className="rounded-full"
        src={'https://i.imgur.com/geGLSFW.jpg'}
      />
    </div>
  );
};

export default Avatar;
