import React from 'react';
const Statistics = ({ good, neutral, bad, total, average }) => (
  <ul>
    <li> Good: {good}</li>
    <li> Neutral: {neutral}</li>
    <li> Bad: {bad}</li>
    <li> Total: {total()}</li>
    <li>Positive Feedback: {average()}%</li>
  </ul>
);
export default Statistics;
