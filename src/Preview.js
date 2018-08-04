import React from "react";
import marked from "marked";

// Explained need to pass object from: https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html
const Preview = props => {
  const rawMarkup = () => {
    return { __html: marked(props.markdown) };
  };
  return (
    <div  id="preview">
        <h3>Markdown Preview</h3>
        <div 
      dangerouslySetInnerHTML={rawMarkup()} />
    </div>
    );
};

export default Preview;
