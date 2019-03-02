import React, { Component } from "react";
import M from "materialize-css";
import equal from 'fast-deep-equal';

class RowOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      answersArray: []
    }
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
              checked={this.state.answersArray[colIndex] || false}
              onChange={() => updateRow(rowIndex, columns.length, colIndex, (`col${colIndex}`))}
            />
            <span></span>
          </label>
        </p>
      </div>
    );
  }

  updateState = async (props) => {
    if ( props.row.answers.length === 0) {
      await this.setState({answersArray: new Array( props.columns.length).fill(false)})
    }
    else {
      await this.setState({answersArray:  props.row.answers});
    } 
  }

  
  componentDidUpdate() {
    if (!equal(this.state.answersArray, this.props.row.answers) && this.props.row.answers.length > 0) {
      this.updateState(this.props);
    }
  }
  
  componentDidMount () {
    M.AutoInit();
    this.updateState(this.props);
  }
  
  render () {
    let { columns, updateRow, indexNum } = this.props;
    columns = [...columns];

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