import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increaseGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  increaseNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  increaseBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state['good'] + this.state['bad'] + this.state['neutral'];
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state['good'] / this.countTotalFeedback()) * 100).toFixed(2);
  };
  render() {
    return (
      <div>
        <h2> Please leave Feedback </h2>
        <FeedbackOptions
          GoodFeedback={this.increaseGoodFeedback}
          NeutralFeedback={this.increaseNeutralFeedback}
          BadFeedback={this.increaseBadFeedback}
        />
    
        <section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
    
        </section>
      </div>
    );
  }
}
export default Feedback;
