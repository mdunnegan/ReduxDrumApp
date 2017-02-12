import React, { Component } from 'react';
import EditorList from '../components/editor_list';
import NewEditorWidget from '../components/new_editor_widget';

export default class App extends Component {
  render() {
    return (
      <div>
        <EditorList />
        <NewEditorWidget />
      </div>
    );
  }
}
