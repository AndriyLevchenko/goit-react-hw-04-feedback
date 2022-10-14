// import PropTypes from 'prop-types'
import React from 'react'

import css from 'components/Statistics.module.css'

export class Statistics extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    goodIncrement = () => {
        this.setState (goodState => {
            return {
                good: goodState.good + 1,
            }
        })
    };

    neutralIncrement = () => {
        this.setState (neutralState => {
            return {
                neutral: neutralState.neutral + 1,
            }
        })
    };

    badIncrement = () => {
        this.setState (badState => {
            return {
                bad: badState.bad + 1,
            }
        })
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        const totalPositivePersent = Math.round((this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100);
        return totalPositivePersent ? totalPositivePersent : 0;
    }

    render () {
        const total = this.countTotalFeedback();
        const totalPositivePersent = this.countPositiveFeedbackPercentage();
        return (
            <section className={css.statistics}>
              <h2 className={css.title}>Please leave feedback</h2>
              <div className={css.buttonList}>
                    <button 
                    className={css.button} 
                    type="button" 
                    onClick={this.goodIncrement}>
                    Good</button>
                    <button 
                    className={css.button} 
                    type="button" 
                    onClick={this.neutralIncrement}>
                    Neutral</button>
                    <button 
                    className={css.button} 
                    type="button" 
                    onClick={this.badIncrement}>
                    Bad</button>
              </div>
              <h2 className={css.title}>Statistics</h2>
                <div className={css.stat}>
                    <span className={css.text}>Good: {this.state.good}</span> 
                    <span className={css.text}>Neutral: {this.state.neutral}</span>
                    <span className={css.text}>Bad: {this.state.bad}</span>
                    <span className={css.text}>Total: {total}</span>
                    <span className={css.text}>Positive feedback: {totalPositivePersent}%</span>
                </div>
            </section>
        ) 
    }
}
