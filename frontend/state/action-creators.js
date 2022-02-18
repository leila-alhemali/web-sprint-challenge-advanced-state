// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'

export function moveClockwise() { }

export function moveCounterClockwise() { }

export function selectAnswer() { }

export function setMessage(message) {
  return {type: types.SET_INFO_MESSAGE, payload: message}
 }

export function setQuiz() { }

export function inputChange(value) {
  return {type: types.INPUT_CHANGE, payload: value}
 }

export function resetForm() { 
  return {type: types.RESET_FORM, payload: {}}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz({
  question_text, 
  true_answer_text, 
  false_answer_text, 
}) {
  return function (dispatch) {
    console.log(question_text)
    axios.post(`http://localhost:9000/api/quiz/new`, {
      question_text, 
      true_answer_text, 
      false_answer_text, 
    })
    .then(res => {
      dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
      dispatch(resetForm)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
