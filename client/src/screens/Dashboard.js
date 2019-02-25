import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import axios from "axios";
import { storeAllQuestions } from "../redux/actions";
import './Dashboard.css';
import EditIcon from './../assets/edit.png';
import AddIcon from './../assets/add.png';


class Dashboard extends Component {

  getAllQuestions = () => {
    const url = "http://localhost:3000/questions";
    axios
      .get(url)
      .then(res => {
        console.log('FETCH GET ALL QUESTION', res.data);
        this.props.storeAllQuestions(res.data);
      })
      .catch(err => console.error("Image upload error", err));
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  render() {
    const questions = this.props.questions || [];
    return (
      <div className='container-dashboard'>
        <h1>DASHBOARD</h1>
        <button
          className="add-question-btn"
          onClick={() => this.props.history.push('/question')}
        >
          <img src={AddIcon} alt="" />
        </button>
        {
          questions.map(question => {
            return (
              <div className='question-tab'>
                <h5>Question:</h5>
                <h2>{question.question || '...'}</h2>
                <div className="buttons-wrapper">
                  <Link to={{
                      pathname: '/question',
                      state: { question: question }
                    }}
                    className="dashboard-tab-btn"
                  >
                    <img src={EditIcon} alt="" />
                  </Link>
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
