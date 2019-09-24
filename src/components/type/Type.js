import React, { Component } from "react";

const getFont = fontType => {
  switch (fontType) {
    case "serif":
      return '"Palatino Linotype", "Book Antiqua", Palatino, serif';
    case "monospace":
      return "'Roboto Mono'";
    default:
      return "Raleway";
  }
};

const getTitle = (styles, children, level, onClick) => {
  switch (level) {
    case 1:
      return (
        <h1 onClick={onClick} style={styles}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 onClick={onClick} style={styles}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 onClick={onClick} style={styles}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 onClick={onClick} style={styles}>
          {children}
        </h4>
      );
    default:
      return (
        <h5 onClick={onClick} style={styles}>
          {children}
        </h5>
      );
  }
};

const getFontWeight = fontWeight => {
  return fontWeight === "heavy" ? 900 : fontWeight === "light" ? 100 : 500;
};

export default class Type extends Component {
  render() {
    const fontFamily = getFont(this.props.fontType);
    const fontWeight = getFontWeight(this.props.fontWeight);
    const { color, textDecoration } = this.props;
    const padding = this.props.padding || 5;
    const onClick = this.props.onClick;
    const margin = 0;
    const cursor = this.props.onClick ? "pointer" : undefined;
    const styles = {
      fontWeight,
      fontFamily,
      textDecoration,
      color,
      padding,
      margin,
      cursor,
      ...this.props.styles
    };
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,500,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:100,500,900"
          rel="stylesheet"
        />
        {getTitle(styles, this.props.children, this.props.level, onClick)}
      </>
    );
  }
}
