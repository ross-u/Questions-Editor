import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import axios from "axios";
import AddButton from "../components/AddButton";
import QuestionTitle from "../components/QuestionTitle";
import Label from "../components/Label";
import RowOptions from "../components/RowOptions";
import "./QuestionScreen.css";
import { createQuestion, updateQuestion } from "../redux/actions";
import shortid from 'shortid';


const maxColumns = 7;
const maxRows = 12;

class QuestionScreen extends Component {
  state = {
    id: 0,
    question: "",
    columns: [],
    rows: [],
    // columns: [{ image: undefined, label: undefined }],
    // rows: [{ image: undefined, label: undefined, answer: undefined, answers: []}],
    imagesUploaded: 0,
    minColLabel: undefined,
    maxColLabel: undefined,
    minRowLabel: undefined,
    maxRowLabel: undefined
  };

  handleChange = async (e) => {
    e.preventDefault();
    await this.setState({ question: e.target.value });
    this.props.updateQuestion(this.state);
  };

  updateImage = e => {
    e.preventDefaut();
  };

  normalizeNumber = num => {
    if (isFinite(num)) return num;
    return "";
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
      await this.setState({ minColLabel: minLabel, maxColLabel: maxLabel });
    } else {
      await this.setState({ minRowLabel: minLabel, maxRowLabel: maxLabel });
    }
  };

  handleColumnLabelChange = async (e) => {
    e.preventDefault();
    let { columns } = this.state;
    const newLabel = e.target.value;

    const i = e.target.name.slice(3, e.target.name.length);
    columns = [...this.state.columns];
    columns[i].label = newLabel;
    await this.setState({ columns });
    this.props.updateQuestion(this.state);
    this.setLabelLengths("columns");
  };

  handleRowLabelChange = async (e) => {
    e.preventDefault();
    const i = e.target.name.slice(3, e.target.name.length);
    const rows = [...this.state.rows];
    rows[i].label = e.target.value;
    await this.setState({ rows });
    this.props.updateQuestion(this.state);
    this.setLabelLengths("rows");
  };

  addColumn = async () => {
    if (this.state.columns.length === maxColumns) return;
    const columns = [...this.state.columns];
    columns.push({ image: undefined, label: undefined });
    await this.setState({ columns });
    this.props.updateQuestion(this.state);
  };

  addRow = async () => {
    if (this.state.rows.length === maxRows) return;
    const rows = [...this.state.rows];
    rows.push({ image: undefined, label: undefined, answer: undefined, answers: [] });
    await this.setState({ rows });
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

    if (labelType === "row") {
      const rows = [...this.state.rows];
      rows[index].image = imageUrl;
      await this.setState({ rows, imagesUploaded });
      this.props.updateQuestion(this.state);
    } else {
      const columns = [...this.state.columns];
      columns[index].image = imageUrl;
      await this.setState({ columns, imagesUploaded });
      this.props.updateQuestion(this.state);
    }
  };

  updateRow = async (rowIndex, numberOfColumns, checkedIndex, answer) => {
    console.log('UPDATE ROW INDEX');
    const rows = [...this.state.rows];
    rows[rowIndex].answers = new Array(numberOfColumns).fill(false);
    rows[rowIndex].answers[checkedIndex] = true;
    rows[rowIndex].answer = answer;
    await this.setState({ rows });
    this.props.updateQuestion(this.state);
  }

  resetRows = async () => {
    console.log('RESET ROWS');
    const rows = [...this.state.rows];
    const emptyRows = rows.map( (row) => {
      row.answers = [];
      return row;
    });
    await this.setState({ ...this.state, rows: emptyRows });
    this.props.updateQuestion(this.state);
    console.log('AFTER RESET', this.state);
  }

  saveQuestion = () => {
    const url = "http://localhost:3000/question/";
    const payload = {...this.state};

    axios
      .post(url, payload)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => console.error("Image upload error", err));
  };

  componentDidMount() {
    const question = this.props.location.state;

    if (!question) {
      (async () => {
        await this.setState({ id: shortid.generate()});
        this.addColumn();
        this.addRow();
        this.props.createQuestion(this.state);
      })();
    } else {
      (async () => {
        await this.setState(question.question);
      })();
    }

  }

  render() {
    const {
      columns,
      rows,
      imagesUploaded,
      minColLabel,
      maxColLabel,
      minRowLabel,
      maxRowLabel
    } = this.state;
    return (
      <div className="container-main">
        <div id="question">
          <QuestionTitle
            value={this.state.question || ""}
            handleChange={this.handleChange}
          />

          <div id="question-columns">
            {columns
              ? columns.map((column, index) => {
                  return (
                    <Label
                      labelType="col"
                      key={index}
                      index={index}
                      label={column}
                      handleChange={this.handleColumnLabelChange}
                      updateImage={this.updateImage}
                      deleteLabel={this.deleteLabel}
                      value={columns[index].label}
                    />
                  );
                })
              : null}
            <AddButton name="column" func={this.addColumn} />
          </div>

          <div id="question-rows">
            {rows
              ? rows.map((row, index) => {
                  return (
                    <div key={index} className="row">
                    
                      <Label
                        labelType="row"
                        index={index}
                        label={row}
                        handleChange={this.handleRowLabelChange}
                        updateImage={this.updateImage}
                        deleteLabel={this.deleteLabel}
                        value={rows[index].label}
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
            <AddButton name="row" func={this.addRow} />
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
          <p className="text">
            Number of rows: <span>{rows.length}</span>
          </p>
          <p className="text">
            Number of columns: <span>{columns.length}</span>
          </p>
          <p className="text">
            Number of images uploaded: <span>{imagesUploaded}</span>
          </p>

          <p className="text">
            Longest row label: {this.normalizeNumber(maxRowLabel)}
          </p>
          <p className="text">
            Shortest row label: {this.normalizeNumber(minRowLabel)}
          </p>
          <p className="text">
            Longest column label: {this.normalizeNumber(maxColLabel)}
          </p>
          <p className="text">
            Shortest column label: {this.normalizeNumber(minColLabel)}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  selectedQuestionId: state.selectedQuestionId
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
