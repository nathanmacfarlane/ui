import React from "react";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import Segment from "./Segment";
import Type from "../type/Type";

storiesOf("Segment", module).add(
  "Basic",
  withState({ selected: "Red" })(({ store }) => (
    <Segment
      selected={store.state.selected}
      options={["Red", "Yellow", "Blue"]}
      segClicked={selected => store.set({ selected })}
    />
  ))
).add(
  "Colors",
  withState({ selected: "Red" })(({ store }) => (
    <Segment
      selected={store.state.selected}
      onColor="red"
      offColor="gray"
      options={["Red", "Yellow", "Blue"]}
      segClicked={selected => store.set({ selected })}
    />
  ))
).add(
  "Sizes",
  withState({ selected1: "Red", selected2: "Red", selected3: "Red" })(({ store }) => (
    <>
      <Type level={2}>Tall</Type>
      <Segment
        selected={store.state.selected1}
        options={["Red", "Yellow", "Blue"]}
        segClicked={selected1 => store.set({ selected1 })}
        size="tall"
      />
      <Type level={2}>Default</Type>
      <Segment
        selected={store.state.selected2}
        options={["Red", "Yellow", "Blue"]}
        segClicked={selected2 => store.set({ selected2 })}
      />
      <Type level={2}>Short</Type>
      <Segment
        selected={store.state.selected3}
        options={["Red", "Yellow", "Blue"]}
        segClicked={selected3 => store.set({ selected3 })}
        size="short"
      />
    </>
  ))
)