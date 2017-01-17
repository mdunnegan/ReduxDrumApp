import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoop } from '../actions/index';
import Note from './note';

class Editor extends Component {

	renderRow(row, index) {
		return (
			<tr>
				{row.map((r, i) => <Note row={index} column={i}/>)}
			</tr>
		);
	}

	play() {		
		const measureLength = this.props.rows.notes[0].length;
		let index = 0;
		this.setState({stop: this.playColumn(index, measureLength)});
	}

	playColumn(index, measureLength) {

		if ( !this.props.loop && index == measureLength ) {
			return;
		}		

		let that = this;
		let timer = setTimeout(function() {

			// put music code here
			console.log(index);

			var stopper = that.playColumn((index%measureLength)+1, measureLength);
			that.setState({stop: stopper});
		}, 100);

		return stop;

		function stop() {
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
		}
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.props.rows.notes.map(this.renderRow)}
					</tbody>
				</table>
				<button className='btn btn-primary' onClick={this.play.bind(this)}>Play</button>
				<button className='btn btn-primary' onClick={() => { if (this.state.stop) this.state.stop() }}>Stop</button>
				<input type='checkbox' onChange={() => this.props.toggleLoop() } />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// available from reducers/index.js
	return { 
		rows: state.rows,
		loop: state.loop
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleLoop }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);


