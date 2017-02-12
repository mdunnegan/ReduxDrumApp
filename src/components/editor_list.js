import React, { Component } from 'react';
import { connect } from 'react-redux';
import Editor from '../containers/editor';

class EditorList extends Component {

	render() {
		return (
			<div>
        {this.props.editors.map((e, i) => <Editor editor={e} index={i}/>)}
      </div>
		);
	}
}

function mapStateToProps(state) {
  // available from rootReducer in reducers/index.js
  return { 
    editors: state.editors,
  };
}

export default connect(mapStateToProps)(EditorList);
