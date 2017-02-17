import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLoop, toggleNote, updateBPM } from '../actions/editor';
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

	renderNotes() {
		let editor = [];
		for (let i = 0; i < Object.keys(this.props.editor.noteRows).length; i++){
			let row = [];
			for (let j = 0; j < Object.keys(this.props.editor.noteRows[i]).length; j++){
				row.push(<Note checked={this.props.editor.noteRows[i][j]} 
											row={i} column={j}
											toggle={this.props.toggleNote}
											index={this.props.index} />);
			}
			editor.push(<tr>{row}</tr>);
		}
		return (editor);
	}

	play() {
		const measureLength = Object.keys(this.props.editor.noteRows[0]).length;
		this.setState({stop: this.playColumn(0, measureLength)});
	}

	playColumn(index, measureLength) {

		let that = this;
		let timer = setTimeout(function() {

			if (that.props.editor.noteRows[0][index]){
				that.state.hihat.play();
			}
			if (that.props.editor.noteRows[1][index]){
				that.state.snare.play();
			}
			if (that.props.editor.noteRows[2][index]){
				that.state.bass.play();
			}

			if ( !that.props.editor.toggled && index == measureLength-1 ) {
				return;
			}

			that.setState({stop: that.playColumn((index+1)%measureLength, measureLength)});

			// say we want 100 bpm...
			// = 1.66667 beats per second    100/60
			// = .6 seconds between notes    1/(100/60)
			// = 600												 (1/(100/60))*1000
			// Assume 16th notes: divide by 4
		}, ((1/(this.props.editor.bpm/60))*1000/4));

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
						{this.renderNotes()}
					</tbody>
				</table>
				<label>40</label>
				<input type="range" min="40" max="180" onChange={(e) => this.props.updateBPM(this.props.index, e.target.value)} />
				<label>180</label>
				&nbsp;<strong>{this.props.editor.bpm}</strong>
				<br/>
				<button className='btn btn-primary' onClick={this.play.bind(this)}>Play</button>
				<button className='btn btn-primary' onClick={() => { if (this.state.stop) this.state.stop() }}>Stop</button>
				<input type='checkbox' checked={this.props.editor.toggled} onChange={() => this.props.toggleLoop(this.props.index)} />
				<label>Loop</label>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleNote, toggleLoop, updateBPM }, dispatch);
}

export default connect(null, mapDispatchToProps)(Editor);


