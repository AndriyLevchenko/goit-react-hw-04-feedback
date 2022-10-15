// import PropTypes from 'prop-types'
import React from 'react';
import {Section} from './Section';
import {FeedbackOptions} from './FeedbackOptions'
import {goodIncrement, neutralIncrement, badIncrement} from './Statistics';
import css from 'components/Feedback.module.css';

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.state;
        const totalPositivePersent = Math.round((good/(good + neutral + bad))*100);
        return totalPositivePersent ? totalPositivePersent : 0;
    }

    render () {
        const total = this.countTotalFeedback();
        const totalPositivePersent = this.countPositiveFeedbackPercentage();
        
        return (
            <section className={css.statistics}>
                <FeedbackOptions 
                    onGoodIncrement = {goodIncrement}
                    onNeutralIncrement = {neutralIncrement}
                    onBadIncrement = {badIncrement}
                />
                <Section 
                    onState = {this.state}
                    total = {total}
                    totalPositivePersent = {totalPositivePersent}
                />
            </section>
        ) 
    }
}
