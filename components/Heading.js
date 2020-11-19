import React from 'react';

/**
 * @author  Eddy van Haastert
 * @function Heading
 **/

const Heading = ({ title, clicked, type, size, control, color, deco, weight }) => {

  const FontSize = {
    x6large: "text-6xl ",
    x5large: "text-5xl ",
    x4large: "text-4xl ",
    x3large: "text-3xl ",
    x2large: "text-2xl ",
    xlarge: "text-xl ",
    large: "text-lr ",
    base: "text-base ",
    small: "text-sm ",
    tiny: "text-xs "
  };

  const FontWeight = {
    light: "font-light ",
    medium: "font-medium ",
    bold: "font-bold ",
  }

  const FontDecoration = {
      basic: " ",
      underline: "underline ",
      linethrough: "line-through ", 
  };

  const FontTranform = {
    normal: "normal-case ",
    upper: "uppercase ",
    lower: "lowercase ",
    capitalize: "capitalize "
  }

  const FontColor = {
    white: "text-white ",
    black: "text-black ",
    transparent: "text-transparent ",
  }

  const classNames = FontDecoration[deco] + " " + FontSize[size] + " " + FontTranform[control] + " " + FontColor[color] + " " + FontWeight[weight];

  return (
    <h1 onClick={clicked} className={classNames}>{title}</h1>
  );
    
};

export default Heading;