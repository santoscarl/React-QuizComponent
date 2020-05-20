import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    // this.instruction_text = props.quiz_question.instruction_text;
    // this.answer_options = props.answer_options;
    //console.log(props);
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton
              button_text={this.props.quiz_question.answer_options[0]}
            />
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
