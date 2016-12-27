import React from 'react';

const Image = ({ src, width, height, alt }) => (
  <img
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
);

export default Image;
