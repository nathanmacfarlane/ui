import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Basic", () => (
    <>
      <Button title="Default" />
      <Button title="Danger" type="danger" />
      <Button title="Primary" type="primary" />
    </>
  ))
  .add("Sizes", () => (
    <>
      <Button title="Small" size="small" />
      <Button title="Default" />
      <Button title="Large" size="large" />
    </>
  ))
  .add("Disabled", () => (
    <>
      <Button title="Enabled" />
      <Button title="Disabled" disabled={true} />
    </>
  ));
