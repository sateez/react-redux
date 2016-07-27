import React, {Component, PropTypes} from 'react';
export default function Icon({glyph, width = 20 , height = 20, className = 'icon'}){
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={glyph} />
    </svg>
  );
}
