import React from "react"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import Card from "."

storiesOf("Card", module).add("Card", () => (
  <Card
    image={text("Image URL", "https://dummyimage.com/720x400")}
    title={text("Title", "I am a title")}
    subtitle={text("Subtitle", "I am a subtitle")}
    body={text("Body", "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.")}
  >
  </Card>
));
