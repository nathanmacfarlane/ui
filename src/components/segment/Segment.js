import React, { Component } from "react";
import Type from "../type/Type";

class Segment extends Component {
  render() {
    const { offColor, onColor } = { ...this.props };
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
          return (
            <Type
              styles={{
                backgroundColor: isSelected ? onColor : offColor,
                width: `${100 / this.props.options.length}%`,
                textAlign: "center",
                color: isSelected ? "#FFF" : "#555"
              }}
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
