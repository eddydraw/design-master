import React from "react";

import { storiesOf } from "@storybook/react";
//import { text } from "@storybook/addon-knobs";

import Input from ".";

storiesOf("Input", module)
  .add("Input", () => (
    <Input />
  ));
