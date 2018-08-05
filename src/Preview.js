import React from "react";
import marked from "marked";
import highlighter from "highlight.js";

// Explained need to pass object from: https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html
const Preview = props => {
  highlighter.initHighlighting();

  // link renderer
  const linkRenderer = new marked.Renderer();
  linkRenderer.link = (href, title, text) => {
    return `<a href=${href} title=${title} target='_blank'>${text}</a>`;
  };

  // highlight settings

  // marked settings
  marked.setOptions({
    renderer: linkRenderer,
    breaks: true,

    // highlighter doesn't work :(
    highlight: function (code) {
      console.log(code);
      return highlighter.highlightAuto(code).value;
    }
  });
  console.log(marked.highlight);
  const rawMarkup = () => {
    return { __html: marked(props.markdown) };
  };

  return (
    <div id="previewContainer">
      <h3>Markdown Preview</h3>
      <div id='preview' dangerouslySetInnerHTML={rawMarkup()} />
    </div>
  );
};

export default Preview;
