import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Editor from "./Editor";
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
      super(props); 
      this.state = { 
          markdown: placeholder
      };
      this.handleChange = this.handleChange.bind(this);
  }
      
  handleChange(event) {
      this.setState({
          markdown: event.target.value
      })
  };
  
  render() {
      return (
          <div className='App'>
              <Editor markdown={this.state.markdown} onChange={this.handleChange} placeholder={placeholder}/>
                            
              <Preview markdown={this.state.markdown} />
          </div>
          );
      }
}

const placeholder = `
Markdown Title!
============

More details below this subheading
----------------

Here is a link to the **[official](https://daringfireball.net/projects/markdown/)** markdown documentation:
https://daringfireball.net/projects/markdown/

Here is a code snippet where I learned about how to be careful with React's \`dangerouslySetInnerHTML\` prop:
*[Source](https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html)*
\`\`\`
const Preview = props => {
  const rawMarkup = () => {
    return { __html: marked(props.markdown) };
  };
  return (
    <div  id="previewContainer">
        <h3>Markdown Preview</h3>
        <div id='preview'
      dangerouslySetInnerHTML={rawMarkup()} />
    </div>
    );
};
\`\`\`
Inserting converted Markdown in to HTML like the above snippet helps:
* Prevents Cross Scripting attacks
* Sanitizes input by returning just a string

> "Computers are like nitroglycerine. 
> They're kind of safe if you're 
> unnaturally careful in the way you handle them."

![Digital Safety](https://www.brainyquote.com/photos_tr/en/j/josephcampbell/384931/josephcampbell1-2x.jpg)
`;

export default App;
