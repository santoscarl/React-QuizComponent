import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends React.Component {
  constructor(props) {
    super(props);
    // this.instruction_text = props.quiz_question.instruction_text;
    // this.answer_options = props.answer_options;
    //console.log(props);
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      console.log("Correct answer. buttonText:" + buttonText);
      this.props.showNextQuestionHandler();
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <QuizQuestionButton
                  clickHandler={this.handleClick.bind(this)}
                  key={index}
                  button_text={answer_option}
                />
              )
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
