import React, { Component } from "react";
import shortid from 'shortid';

class RowOptions extends Component {
  state = {
    answersArray: []
  }

  // col, colIndex, updateRow, row
  
  renderRadioButtons = (colIndex, columns, updateRow, row, rowIndex ) => {

    console.log('RENDERING RADIO BUTTONS');
    return (
      <div key={shortid.generate()} style={styles.inputBox}>
        <input
          type="radio"
          style={styles.radioInput}
          name={`col${colIndex}`}
          value={colIndex}
          defaultChecked={this.state.answersArray[colIndex]}
          onChange={ () => updateRow(rowIndex, columns.length, colIndex, (`col${colIndex}`))}
        />
      </div>
    );
  }

  componentDidMount () {
    if (this.props.row.answers.length === 0) {
      this.setState({answersArray: new Array(this.props.columns.length).fill(false)})
    }
    else this.setState({answersArray: this.props.row.answers});
  }

  render () {
    const { columns, updateRow, indexNum, row } = this.props;
    // if (row.answers.length === 0) {
    //   console.log('FILLING IT BABY')
    //   row.answers = new Array(columns.length).fill(false);
    // }

    return (
      <div>
      <form style={styles.inputForm}>
        {
          (!columns)
            ? null
            : columns.map((col, colIndex) => this.renderRadioButtons(colIndex, columns, updateRow, row, indexNum))
        }
      </form>
    </div>
  )
}
  
}

const styles = {
  inputForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    width: 'auto',
    // background: 'yellow',
  },
  inputBox: {
    textAlign: 'center',
    width: '50px',
    padding: '10px',
    marginLeft: '10px',
  },
  radioInput: {
    height: '20px',
    width: '20px',
  }
}

export default RowOptions;