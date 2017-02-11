import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoop, toggleNote } from '../actions/index';
import Note from './note';

class Editor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hihat: new Audio('../../sounds/hihat2.wav'),
		  snare: new Audio('../../sounds/snare.wav'),
			bass: new Audio('../../sounds/bass.wav')
		}
	}

	renderRow(row, rowIdx) {
		return (
			<tr>
				{row.map((r, colIdx) => <Note checked={this.props.noteRows[rowIdx][colIdx]} 
																			row={rowIdx} column={colIdx} toggle={this.props.toggleNote} />)}
			</tr>
		);
	}

	play() {		
		const measureLength = this.props.noteRows[0].length;
		this.setState({stop: this.playColumn(0, measureLength)});
	}

	playColumn(index, measureLength) {

		if ( !this.props.loop && index == measureLength-1 ) {
			return;
		}

		let that = this;
		let timer = setTimeout(function() {

			if (that.props.noteRows[0][index]){
				that.state.hihat.play();
			}
			if (that.props.noteRows[1][index]){
				that.state.snare.play();
			}
			if (that.props.noteRows[2][index]){
				that.state.bass.play();
			}

			that.setState({stop: that.playColumn((index+1)%measureLength, measureLength)});
		}, 200);

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
						{this.props.noteRows.map(this.renderRow.bind(this))}
					</tbody>
				</table>
				<button className='btn btn-primary' onClick={this.play.bind(this)}>Play</button>
				<button className='btn btn-primary' onClick={() => { if (this.state.stop) this.state.stop() }}>Stop</button>
				<input type='checkbox' checked={this.props.loop} onChange={() => this.props.toggleLoop() } />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// available from reducers/index.js
	return { 
		noteRows: state.noteRows,
		loop: state.loop
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleLoop, toggleNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);


