import React from "react";

import figma from "@figma/code-connect";
import { MyComponent } from "./MyComponentType";

figma.connect(MyComponent, "https://www.figma.com/", {
  props: {
    render: figma.boolean("has a render prop", {
      true: (props: any) => <span {...props}>a render prop</span>,
      false: undefined,
    }),
  },
  example: (props) => <MyComponent render={props.render} />,
});
