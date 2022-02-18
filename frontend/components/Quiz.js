import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Quiz(props) {
  const {
    quiz,
    postAnswer
  } = props
  console.log(props)
  useEffect(
    () => {
      props.fetchQuiz()
      console.log(props.fetchQuiz)
    }
  , [])

  const onClick = (evt) => {
    
    props.selectAnswer(props.quiz.answers[0].answer_id)
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()
    postAnswer({
      quiz_id: props.quiz.quiz_id,
      answer_id: props.quiz.answers[1].answer_id
    })
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0].text}
                <button onClick={onClick}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.answers[1].text}
                <button onClick={onClick}>
                  Select
                </button>
              </div>
            </div>

            <button onClick={handleSubmit} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect( st => st, actionCreators)(Quiz)