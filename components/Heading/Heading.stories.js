import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import Heading from ".";

const variants = {
    x6large: "x6large",
    x5large: "x5large",
    x4large: "x4large",
    x3large: "x3large",
    x2large: "x2large",
    xlarge: "xlarge",
    large: "large",
    base: "base",
    small: "small",
    tiny: "tiny"
}

storiesOf("Heading", module)
  .add("Heading", (set) => (
    <Heading title="Heading" size={select("Variant", variants, "xlarge")} />  
  ));