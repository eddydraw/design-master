import './index.css';

/**
 * @author  Eddy van Haastert
 * @function StyleFont
 **/

export const FontSize = {
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

export const FontDecoration = {
      basic: " ",
      underline: "underline ",
      linethrough: "line-through ", 
  };

export const FontTranform = {
    normal: "normal-case ",
    upper: "uppercase ",
    lower: "lowercase ",
    capitalize: "capitalize "
  }

export const FontColor = {
    white: "text-white ",
    black: "text-black ",
    transparent: "text-transparent ",
  }

export const Margin =  "mr-5 ";
export const State = {
    link: Margin + " text-gray-500 hover:text-indigo-900",
    active: Margin + " text-green-500 hover:text-green-900",
    default: Margin + " text-gray-500 hover:text-gray-900",
    visited: Margin + " text-yellow-500 hover:text-yellow-900",
  };
export const Float = {
  left: " md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center",
  right: " md:ml-auto flex flex-wrap items-center text-base justify-center",
  };