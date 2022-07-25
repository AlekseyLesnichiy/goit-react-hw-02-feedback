import PropTypes from 'prop-types';
import React from 'react';
import { Btn } from './FeedbackOptions.styled';
import { Ul } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (options.length === 0) return null;

  return (
    <Ul>
      {options.map(option => {
        return (
          <li key={option}>
            <Btn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Btn>
          </li>
        );
      })}
    </Ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
