import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {incorrectAnswer: false}
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({incorrectAnswer: false});
            this.props.showNextQuestionHandler();
        } else {
            this.setState({incorrectAnswer: true});
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
                { this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
            </main>
        );
    } 
}

export default QuizQuestion;