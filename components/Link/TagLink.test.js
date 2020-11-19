import React from "react";
import ReactDOM from "react-dom";
import TagLink from "./TagLink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <TagLink />, 
      div
    );
  ReactDOM.unmountComponentAtNode(div);
});
