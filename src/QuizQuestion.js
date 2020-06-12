import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.Component {
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }

    render() {
        const quizItems = this.props.quiz_question.answer_options.map(
            (item, index) => (
                <QuizQuestionButton 
                    key={index} 
                    button_text={item} 
                    clickHandler={this.handleClick.bind(this)} 
                />)
            );
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        { quizItems }
                    </ul>
                </section>
            </main>
        );
    } 
}

export default QuizQuestion;