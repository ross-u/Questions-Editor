import React, { Component } from "react";
import M from "materialize-css";

class RowOptions extends Component {
  state = {
    answersArray: []
  }

  // col, colIndex, updateRow, row
  
  renderRadioButtons = (colIndex, columns, updateRow, rowIndex ) => {

    return (
      <div key={colIndex} style={styles.inputBox}>
        <p>
          <label>
            <input
              type='radio'
              style={styles.radioInput}
              name='group1'
              id={`choice_${colIndex}`}
              value={colIndex}
              defaultChecked={this.state.answersArray[colIndex]}
              onChange={() => updateRow(rowIndex, columns.length, colIndex, (`col${colIndex}`))}
            />
            <span></span>
          </label>
        </p>
      </div>
    );
  }

  componentDidMount () {
    M.AutoInit();
    if (this.props.row.answers.length === 0) {
      this.setState({answersArray: new Array(this.props.columns.length).fill(false)})
    }
    else this.setState({answersArray: this.props.row.answers});
  }

  render () {
    const { columns, updateRow, indexNum } = this.props;

    return (
      <div style={styles.inputFormWrapper}>
      <form action="#" style={styles.inputForm}>
        {
          (!columns)
            ? null
            : columns.map((col, colIndex) => this.renderRadioButtons(colIndex, columns, updateRow, indexNum))
        }
      </form>
    </div>
  )
}
  
}

const styles = {
  inputFormWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  inputForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    width: 'auto',
    marginLeft: '22px',

  },
  inputBox: {
    textAlign: 'center',
    width: '50px',
    padding: '10px',
    marginLeft: '40px',

  },
  
  radioInput: {
    color: 'red',
    height: '20px',
    width: '20px',
    opacity: '1 !important',
  }
}

export default RowOptions;