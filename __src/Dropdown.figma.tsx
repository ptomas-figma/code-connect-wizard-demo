import React from "react";
import figma from "@figma/code-connect";
import { Dropdown } from "../src/components/Dropdown";

figma.connect(
  Dropdown,
  "https://staging.figma.com/design/XHti3mZMluUwlrDrMvfToU/Wizard-Design-System?node-id=120-1072&t=3PZcdrRegNyizXVg-4",
  {
    imports: ["import Dropdown from @your-library/Dropdown"],
    variant: { type: "bank-placeholder-alt" },
    example: (props) => <Dropdown options={undefined} onSelect={undefined} />,
  }
);
