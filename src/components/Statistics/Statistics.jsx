import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({onState, total, totalPositivePersent}) => {
    const {good, neutral, bad} = onState;
    // const total = this.countTotalFeedback();
    // const totalPositivePersent = this.countPositiveFeedbackPercentage();
    return (
        <div>
        <div className={css.stat}>
            <span className={css.text}>Good: {good}</span> 
            <span className={css.text}>Neutral: {neutral}</span>
            <span className={css.text}>Bad: {bad}</span>
            <span className={css.text}>Total: {total}</span>
            <span className={css.text}>Positive feedback: {totalPositivePersent}%</span>
        </div>
    </div>
    )
};

Statistics.propTypes = {
    onState: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    totalPositivePersent: PropTypes.number.isRequired,
};





