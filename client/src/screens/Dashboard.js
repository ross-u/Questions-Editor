import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from "axios";
import { storeAllQuestions } from "../redux/actions";
import './Dashboard.css';
import shortid from 'shortid';
import M from "materialize-css";

class Dashboard extends Component {

  getAllQuestions = () => {
    const url = "http://localhost:3000/questions";
    axios
      .get(url)
      .then(res => {
        this.props.storeAllQuestions(res.data);
      })
      .catch(err => console.error("Fetch All Question error", err));
  }

  deleteQuestion = async (id) => {
    const url = `http://localhost:3000/question/${id}`;
    axios
      .delete(url)
      .then(res => {
        this.props.storeAllQuestions(res.data);
      })
      .catch(err => console.error("Delete question error", err));
  }

  componentDidMount() {
    M.AutoInit();
    this.getAllQuestions();
  }

  render() {
    const questions = this.props.questions || [];
    return (
      <div className='container-dashboard'>

        <h3 className="header">Dashboard</h3>
        <button 
          className="btn-floating btn-large waves-effect waves-light green add-question-btn pulse z-depth-2"
          onClick={() => this.props.history.push('/question')}
        >
          <i className="material-icons">add</i>
        </button>
        {
          questions.map(question => {
            return (
              <div 
                className='question-tab card z-depth-3'
                key={shortid.generate()}  
              >
                <h6>Question:</h6>
                <Link to={{
                      pathname: '/question',
                      state: { question: question }
                    }}
                  >
                  <h4 className='question-title-link'>{question.question || '...'}</h4>
                </Link>
                <div className="buttons-wrapper">
                  <Link to={{
                      pathname: '/question',
                      state: { question: question }
                    }}
                    className="dashboard-tab-btn btn-floating waves-effect waves-light btn"
                  >
                  <i className="material-icons left z-depth-3">edit</i>
                  </Link>
                  <div
                    onClick={ () => this.deleteQuestion(question.id)}
                    className="dashboard-tab-btn btn-floating waves-effect waves-light btn red"
                  >
                  <i className="material-icons left z-depth-3">delete</i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  questions: state.questions,
  selectedQuestionId: state.selectedQuestionId
});

const mapDispatchToProps = dispatch => ({
  storeAllQuestions: (questions) => dispatch(storeAllQuestions(questions)),
});

const DashboardWithRouter = withRouter(Dashboard)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardWithRouter);
