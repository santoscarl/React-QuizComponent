import React, { Component } from "react";

let quizData = require("./quiz_data.json");

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
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
