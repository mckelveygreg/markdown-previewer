import React from 'react';

const Editor = props => {
    return (
        <div id='editorContainer'>
            <h3>Markdown Editor</h3>
            <textarea id='editor'
                value={props.markdown}
                onChange={props.onChange}
                type='text'
                placeholder={props.placeholder}/>
        </div>
    )
}
export default Editor;