import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Image from ".";

storiesOf("Images", module)
  .add("Image", () => (
    <Image size="basic" image={text("Image URL", "https://dummyimage.com/600x400")} />
  ));
