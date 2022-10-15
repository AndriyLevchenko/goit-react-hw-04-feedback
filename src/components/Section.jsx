import React from "react";
import css from 'components/Feedback.module.css';

export const Section = ({onState, total, totalPositivePersent}) => {
    const {good, neutral, bad} = onState;
    <div>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.stat}>
            <span className={css.text}>Good: {good}</span> 
            <span className={css.text}>Neutral: {neutral}</span>
            <span className={css.text}>Bad: {bad}</span>
            <span className={css.text}>Total: {total}</span>
            <span className={css.text}>Positive feedback: {totalPositivePersent}%</span>
        </div>
    </div>
};
