import React, { Component } from "react";
import Type from "../type/Type";

const getSize = size => {
  switch (size) {
    case "tall":
      return "70px";
    case "short":
      return "25px";
    default:
      return "35px";
  }
};

class Segment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const offColor = this.props.offColor || "lightGray"
    const onColor = this.props.onColor || "#008EE3"
    const onTextColor = this.state.onTextColor || "#FFF"
    const offTextColor = this.state.offTextColor || "#555"
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        {this.props.options.map(option => {
          const isSelected = this.props.selected === option;
          const lineHeight = getSize(this.props.size)
          return (
            <Type
              styles={{
                backgroundColor: isSelected ? onColor : offColor,
                width: `${100 / this.props.options.length}%`,
                textAlign: "center",
                color: isSelected ? onTextColor : offTextColor,
                lineHeight
              }}
              className={isSelected ? "seg-on-button" : "seg-off-button"}
              level={4}
              onClick={() => this.props.segClicked(option)}
            >
              {option}
            </Type>
          );
        })}
      </div>
    );
  }
}

export default Segment;
