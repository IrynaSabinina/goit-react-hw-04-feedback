import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      type="button"
      key={option.name}
      name={option.name}
      className={option.className}
      onClick={onLeaveFeedback}
    >
      {option.title}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
