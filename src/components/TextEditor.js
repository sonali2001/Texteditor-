import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class TextEditor extends Component {

    state={
        editorstate:EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render() {
        const {editorState} =this.state;
        return (
            <div>
                 <Editor
                     editorState={editorState}
                     toolbarClassName="toolbarClassName"
                     wrapperClassName="wrapperClassName"
                     editorClassName="editorClassName"
                     onEditorStateChange={this.onEditorStateChange}
                  />
            </div>
        );
    }
}
