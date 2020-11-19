import React from "react";
//import Link from 'next/link';

import {FontSize, FontTranform, FontDecoration, State}  from '../../styles/FontStyle.js'

/**
 * @author Eddy van Haastert
 * @function Link
 **/

const TagLink = ({ title, clicked, type, size, control, state, name, deco, icon, pathname, as }) => {

const classNames = State[state] + " " + FontSize[size] + " " + FontTranform[control] + " " + FontDecoration[deco];
  
  return (

      <p className={classNames}>{name}</p>

  );
};

export default TagLink;