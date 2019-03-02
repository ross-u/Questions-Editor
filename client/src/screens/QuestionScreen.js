import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import axios from "axios";
import shortid from 'shortid';
import { API_URL, MAX_SIZE } from './../utils/config'
import "./QuestionScreen.css";

import QuestionTitle from "../components/QuestionTitle";
import Label from "../components/Label";
import RowOptions from "../components/RowOptions";
import AddButton from "../components/AddButton";
import { createQuestion, updateQuestion } from "../redux/actions";
import { Question, Column, Row } from './../utils/schemas';
import { normalizeNumber } from './../utils/normalizeNumber'

class QuestionScreen extends Component {
  state = new Question();

  handleTitleChange = async (e) => {
    e.preventDefault();
    await this.setState({ question: e.target.value });
    this.props.updateQuestion(this.state);
  };

  ////  LABEL METHODS ////
  handleLabelChange = async (e, labelType) => {
    e.preventDefault();
    const i = e.target.name.slice(3, e.target.name.length);
    const rowsOrColumns = labelType === "row" ? "rows" : "columns";

    const labelsArray = [...this.state[rowsOrColumns]];
    labelsArray[i].label = e.target.value;

    await this.setState({ [rowsOrColumns]: labelsArray });
    this.props.updateQuestion(this.state);
    this.setLabelLengths(rowsOrColumns);
  };

  addLabel = async (labelType) => {
    const rowsOrColumns = labelType === "row" ? "rows" : "columns";
    const labelsArray = [...this.state[rowsOrColumns]];

    if (labelsArray.length === MAX_SIZE[rowsOrColumns]) return;
    labelsArray.push( (labelType === "row") ? new Row() : new Column());
    await this.setState({ [rowsOrColumns]: labelsArray });
    this.props.updateQuestion(this.state);
  };

  deleteLabel = async (labelType, index) => {
    const rowsOrColumns = labelType === "row" ? "rows" : "columns";
    const labelsArray = [...this.state[rowsOrColumns]];

    let { imagesUploaded } = this.state;
    if (labelsArray[index].image) imagesUploaded -= 1;
    labelsArray.splice(index, 1);

    await this.setState({ [rowsOrColumns]: labelsArray, imagesUploaded });
    this.props.updateQuestion(this.state);
    this.setLabelLengths(rowsOrColumns);
  };

  updateImage = async (labelType, name, imageUrl) => {
    const index = name.slice(3, name.length);
    const imagesUploaded = this.state.imagesUploaded + 1;

    const rowsOrColumns = labelType === "row" ? "rows" : "columns";
    const labelsArray = [...this.state[rowsOrColumns]];
    labelsArray[index].image = imageUrl;
    await this.setState({ [rowsOrColumns]: labelsArray, imagesUploaded });
    this.props.updateQuestion(this.state);
  };

  setLabelLengths = async labelType => {
    let minLabel = Number.POSITIVE_INFINITY;
    let maxLabel = Number.NEGATIVE_INFINITY;
    const labelsArray = this.state[labelType];

    labelsArray.forEach(obj => {
      if (obj.label && obj.label.length < minLabel) minLabel = obj.label.length;
      if (obj.label && obj.label.length > maxLabel) maxLabel = obj.label.length;
    });

    if (labelType === "columns") {
      await this.setState({ minCol: minLabel, maxCol: maxLabel });
    } else await this.setState({ minRow: minLabel, maxRow: maxLabel });
  };

  ////  ROW METHODS ////
  updateRow = async (rowIndex, numberOfColumns, checkedIndex, answer) => {
    const rows = [...this.state.rows];
    rows[rowIndex].answers = new Array(numberOfColumns).fill(false);
    rows[rowIndex].answers[checkedIndex] = true;
    rows[rowIndex].answer = answer;
    await this.setState({ rows });
    this.props.updateQuestion(this.state);
  }

  resetRows = async () => {
    const rows = [...this.state.rows];
    const emptyRows = rows.map( (row) => {
      row.answers = new Array( this.state.columns.length).fill(false);
      return row;
    });
    await this.setState({ rows: emptyRows });
    this.props.updateQuestion(this.state);
  }

  ////  API METHODS ////
  saveQuestion = () => {
    axios
      .post(`${API_URL}/question`, this.state)
      .then(res => this.props.history.push('/'))
      .catch(err => console.error("Image upload error", err));
  };


  componentDidMount() {
    const question = this.props.location.state;
    if (!question) {
      (async () => {
        await this.setState({ id: shortid.generate()});
        this.addLabel('column');
        this.addLabel('row');
        this.props.createQuestion(this.state);
      })();
    } else {
      this.setState(question.question);
    }
  }

  render() {
    const {columns, rows, imagesUploaded, minCol, maxCol, minRow, maxRow } = this.state;
    const { handleLabelChange, updateImage, deleteLabel } = this;
    const labelMethods = { handleLabelChange, updateImage, deleteLabel };

    return (
      <div className="container-main">
        <div id="question">
          <QuestionTitle
            value={this.state.question || ''}
            handleChange={this.handleTitleChange}
          />

          <div id="question-columns">
            {(columns)
              ? columns.map((column, index) => {
                  return (
                    <Label
                      labelType="col"
                      index={index}
                      key={index}
                      label={column}
                      value={columns[index].label}
                      labelMethods={labelMethods}                 
                    />
                  );
                })
              : null}
            <AddButton labelType="column" addLabel={this.addLabel} />
          </div>

          <div id="question-rows">
            {(rows)
              ? rows.map((row, index) => {
                  return (
                    <div key={index} className="row">
                    
                      <Label
                        labelType="row"
                        index={index}
                        label={row}
                        value={rows[index].label}
                        labelMethods={labelMethods}
                      />
                      <RowOptions
                        indexNum={index}
                        columns={columns}
                        updateRow={this.updateRow}
                        row={row}
                      />
                    </div>
                  );
                })
              : null}
            <AddButton labelType="row" addLabel={this.addLabel} />
          </div>

          <button className="save-btn btn waves-effect waves-light" onClick={this.saveQuestion}>
            Save Question
          </button>

          <button className="save-btn btn waves-effect cyan darken-3  waves-light" onClick={this.resetRows}>
            Reset Form
          </button>

        </div>

        <div id="summary">
          <h3>Summary</h3>
          <p> Number of rows: {rows.length} </p>
          <p> Number of columns: {columns.length} </p>
          <p> Number of images uploaded: {imagesUploaded} </p>

          <p> Longest row label: {normalizeNumber(maxRow)} </p>
          <p> Shortest row label: {normalizeNumber(minRow)} </p>
          <p> Longest column label: {normalizeNumber(maxCol)} </p>
          <p> Shortest column label: {normalizeNumber(minCol)} </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
});

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(createQuestion(question)),
  updateQuestion: updatedQuestion => dispatch(updateQuestion(updatedQuestion))
});

const QuestionScreenWithRouter = withRouter(QuestionScreen)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionScreenWithRouter);
