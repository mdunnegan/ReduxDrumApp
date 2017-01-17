import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNote } from '../actions/index';

class Note extends Component {

	toggleClick(item){
		this.props.toggleNote(this.props.row, this.props.column);
	}

	render() {
		return (
			<td>
				<input type='checkbox' onChange={this.toggleClick.bind(this)} />
			</td>
		);
	}
}

function mapStateToProps({notes}) {
	return { notes };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);