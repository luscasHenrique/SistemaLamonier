import React from 'react';
import RoundedImageCss from './RoundedImage.module.css'; // Importe o arquivo CSS diretamente

function RoundedImage({ src, alt, width }) {
  return (
    <img
      className={`${RoundedImageCss.rounded_image} ${RoundedImageCss[width]}`}
      src={src}
      alt={alt}
    />
  );
}

export default RoundedImage;
