import React from 'react';
import {FontDecoration, FontSize, FontTranform, FontColor}  from '../../styles/FontStyle.js';

/**
 * @author  Eddy van Haastert
 * @function Paragraph
 **/

const Paragraph = ({ title, clicked, type, size, control, color, content }) => {

    const classNames = FontDecoration[type] + " " + FontSize[size] + " " + FontTranform[control] + " " + FontColor[color] + " mb-8";

    return (
        <p onClick={clicked} className={classNames}>{content}</p>
    );
    
};

export default Paragraph;