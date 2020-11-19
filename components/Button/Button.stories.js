import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import Button from ".";

const variants = {
  Primary: "primary",
  Secondary: "secondary",
  Default: "default",
  Alert: "alert",
  Warning: "warning",
  Primary_hollow: "primary_hollow",
  Secondary_hollow: "secondary_hollow",
  Default_hollow: "default_hollow",
  Warning_hollow: "warning_hollow",
  Alert_hollow: "alert_hollow"
};

storiesOf("Button", module)
  .add("Primary", (set) => (
    <Button clicked={()=>set()} type={select("Variant", variants, "primary")}>
      {text("Text", "Button")}
    </Button>
  ));
