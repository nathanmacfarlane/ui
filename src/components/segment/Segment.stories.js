import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import Segment from "./Segment";

storiesOf("Segment", module).add(
  "Basic",
  withState({ selected: "Red" })(({ store }) => (
    <Segment
      selected={store.state.selected}
      onColor="#008EE3"
      offColor="lightGray"
      options={["Red", "Yellow", "Blue"]}
      segClicked={selected => store.set({ selected })}
    />
  ))
);
