import React from "react";
import css from 'components/FeedbackOptions.module.css';

export const FeedbackOptions = ({onGoodIncrement, onNeutralIncrement, onBadIncrement}) => {
    <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttonList}>
            <button 
            className={css.button} 
            type="button" 
            onClick={onGoodIncrement}>
            Good</button>
            <button 
            className={css.button} 
            type="button" 
            onClick={onNeutralIncrement}>
            Neutral</button>
            <button 
            className={css.button} 
            type="button" 
            onClick={onBadIncrement}>
            Bad</button>
        </div>
    </div>
}
