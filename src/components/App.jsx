import React, { useState } from 'react';
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
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const { name } = event.target;
    if (name === 'good') {
      setGood(ps => {
        return ps + 1;
      });
    } else if (name === 'neutral') {
      setNeutral(ps => {
        return ps + 1;
      });
    } else if (name === 'bad') {
      setBad(ps => {
        return ps + 1;
      });
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
