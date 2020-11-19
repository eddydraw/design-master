import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Icon from ".";

const variants = {
    Arrow: "arrow",
    Graph: "graph",
    Eye: "eye",
    Avatar: "avatar",
    Bin: "bin",
    File: "file"
};

storiesOf("Icon", module)
  .add("Arrow", () => (
    <Icon type={select("Variant", variants, "arrow")} />
  ));
