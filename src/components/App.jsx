import React from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() > 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              average={this.countPositiveFeedbackPercentage}
            />
          </Section>
        )}

        {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
