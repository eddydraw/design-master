import React from 'react';
import { FontDecoration, FontSize, FontTranform, FontColor } from '../../styles/FontStyle.js';
import { ButtonType } from '../../styles/ButtonStyle.js'

/**
 * @author  Eddy van Haastert
 * @function Button
 **/

const Button = (
    { 
      children, 
      clicked, 
      type, 
      hollow, 
      size, 
      control,
      color
    }
  ) => {

  const classNames = ButtonType[type] + " " + FontDecoration[type] + " " + FontSize[size] + " " + FontTranform[control] + " " + FontColor[color];

  return <button onClick={clicked} className={classNames}>{children}</button>;
    
};

export default Button;