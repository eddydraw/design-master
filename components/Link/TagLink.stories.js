import React from "react"

import { storiesOf } from "@storybook/react"
import { text, select } from "@storybook/addon-knobs"

import TagLink from ".";

const variants = {
    Basic: "basic",
    Underline: "underline",
    Linethrough: "linethrough"
};

const states = {
    Link: "link",
    Basic: "basic",
    Active: "active",
    Visited: "visited"
};

storiesOf("Link", module)
  .add("Link", (set) => (
    <TagLink name={text("Text", "Link")} clicked={()=>set()} state={select("State", states, "link")} deco={select("Variant", variants, "basic")}/>
  ));
