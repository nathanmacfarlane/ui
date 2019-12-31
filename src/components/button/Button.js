import React, { Component } from "react";
import Type from "../type/Type";

const getBackgroundColor = type => {
  switch (type) {
    case "danger":
      return "#FF4D4F";
    case "primary":
      return "#008EE3";
    default:
      return "white";
  }
};

const getBackgroundColorHover = type => {
  switch (type) {
    case "danger":
      return "#EF7F79";
    case "primary":
      return "#5DA8F8";
    default:
      return "white";
  }
};

const getColor = type => {
  switch (type) {
    case "danger":
      return "white";
    case "primary":
      return "white";
    default:
      return "gray";
  }
};

const getColorHover = type => {
  switch (type) {
    case "danger":
      return "white";
    case "primary":
      return "white";
    default:
      return "#008EE3";
  }
};

const getBorder = type => {
  switch (type) {
    case "danger":
      return "";
    case "primary":
      return "";
    default:
      return "";
  }
};

const getBorderHover = type => {
  switch (type) {
    case "danger":
      return "";
    case "primary":
      return "";
    default:
      return "1px solid #008EE3";
  }
};

const getLevel = size => {
  switch (size) {
    case "small":
      return 3;
    case "large":
      return 1;
    default:
      return 2;
  }
};

const getPadding = size => {
  switch (size) {
    case "small":
      return "3px 5px 3px 5px";
    case "large":
      return "5px 10px 5px 10px";
    default:
      return "4px 7px 4px 7px";
  }
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }
  render() {
    const backgroundColor = this.state.hovering
      ? getBackgroundColorHover(this.props.type)
      : getBackgroundColor(this.props.type);
    const color = this.state.hovering
      ? getColorHover(this.props.type)
      : getColor(this.props.type);
    const border = this.state.hovering
      ? getBorderHover(this.props.type)
      : getBorder(this.props.type);
    const level = getLevel(this.props.size);
    const padding = getPadding(this.props.size);
    const cursor = this.props.disabled ? "no-drop" : "pointer";
    return (
      <button
        style={{
          backgroundColor,
          border,
          padding,
          borderRadius: 5,
          color,
          cursor,
          minWidth: 25,
          outline: "none"
        }}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
        <Type level={level}>{this.props.title}</Type>
      </button>
    );
  }
}

export default Button;
