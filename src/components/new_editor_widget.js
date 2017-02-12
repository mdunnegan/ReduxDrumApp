import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEditor } from '../actions/editor_list';
import { editorInitialState } from '../reducers/reducer_editor_list';

class NewEditorWidget extends Component {

	render() {
		return (
			<button className='btn btn-primary' onClick={() => this.props.addEditor(editorInitialState)}>New Editor</button>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addEditor }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewEditorWidget);
