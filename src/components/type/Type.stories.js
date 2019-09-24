import React from "react";
import Type from "./Type";

export default {
  title: "Type"
};

export const levels = () => (
  <>
    <Type level={1}>level: 1</Type>
    <Type level={2}>level: 2</Type>
    <Type level={3}>level: 3</Type>
    <Type level={4}>level: 4</Type>
    <Type level={5}>level: 5</Type>
  </>
);

export const types = () => (
  <>
    <Type level={2} fontType="serif">
      serif
    </Type>
    <Type level={2} fontType="monospace">
      monospace
    </Type>
    <Type level={2} fontType="sans-serif">
      sans-serif
    </Type>
  </>
);

export const weights = () => (
  <>
    <Type level={2} fontWeight="heavy">
      heavy
    </Type>
    <Type level={2}>default</Type>
    <Type level={2} fontWeight="light">
      light
    </Type>
  </>
);
