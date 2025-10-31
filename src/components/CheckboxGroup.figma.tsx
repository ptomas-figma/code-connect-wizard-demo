import React from "react";
import { CheckboxGroup } from "./CheckboxGroup";
import figma from "@figma/code-connect";

figma.connect(
  CheckboxGroup,
  "https://staging.figma.com/design/XHti3mZMluUwlrDrMvfToU/Wizard-Design-System?node-id=1%3A1556",
  {
    props: {
      isInvalid: figma.boolean("isInvalid"),
      children: figma.children("Checkbox"),
    },
    example: (props) => (
      <CheckboxGroup isInvalid={props.isInvalid}>
        {props.children}
      </CheckboxGroup>
    ),
  }
);
