import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import styles from '../components/FeedbackOptions/FeedbackOptions.module.css';

const options = [
  { name: 'good', title: 'Good', className: styles.btnGood },
  { name: 'neutral', title: 'Neutral', className: styles.btnNeutral },
  { name: 'bad', title: 'Bad', className: styles.btnBad },
];
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        </Section>
        <Notification
          message="There is no feedback"
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}
