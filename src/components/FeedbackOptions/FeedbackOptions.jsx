import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({options, onFeedbackOptions}) => {
    return (
        <div className={css.buttonList}>
            {options.map(option => {
                return (
                    <button
                        className={css.button}
                        key={option}
                        type="button"
                        onClick={() => onFeedbackOptions(option)}
                    >
                    {option}
                    </button>
                );
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onFeedbackOptions: PropTypes.func.isRequired,
};
