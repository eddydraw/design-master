import React from "react"

import Image from "../Image/Image"
import Heading from "../Heading/Heading"
import Paragraph from "../Paragraph/Paragraph"
import "./Card.css"

/**
 * @author Eddy van Haastert
 * @function Card
 **/

const Card = ({ title, subtitle, image, body }) => (
  <div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-gray-100 p-6 rounded-lg">
      <Image image = {image}/>
      <Heading title = {title} size = "xlarge" />
      <Heading title = {subtitle} size = "large" weight="bold" />
      <Paragraph content = {body} />
    </div>
  </div>
);

export default Card;
