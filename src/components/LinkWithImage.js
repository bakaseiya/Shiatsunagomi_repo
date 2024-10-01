import React from 'react';

const LinkWithImage = ({ imageSrc, altText, linkUrl, width = '50px', height = '50px' }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: width, height: height }} // Dimensioni impostabili via props
      />
    </a>
  );
};

export default LinkWithImage;
