import React, { Component } from 'react';

class Note extends Component {
	render() {
		return (
			<td>
				<input type='checkbox' checked={this.props.checked} onChange={
					() => this.props.toggle(this.props.row, this.props.column, this.props.editorIdx)
				} />
			</td>
		);
	}
}

export default Note;
