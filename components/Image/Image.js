import React from 'react';

import {Size} from '../../styles/ImageStyle'
import '../../styles/index.css';

/**
 * @author Eddy van Haastert
 * @function Image
 **/

const Image = ({size, image, children}) => {

    const classNames = Size[size];

    return (
        <div className = {classNames} >
            <img className="object-cover object-center rounded" alt="hero" src={image} />
        </div>
    );
};

export default Image;