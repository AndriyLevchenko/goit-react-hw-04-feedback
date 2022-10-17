import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, totalPositivePersent}) => {
    return (
        <div className={css.stat}>
            <span className={css.text}>Good: {good}</span> 
            <span className={css.text}>Neutral: {neutral}</span>
            <span className={css.text}>Bad: {bad}</span>
            <span className={css.text}>Total: {total}</span>
            <span className={css.text}>Positive feedback: {totalPositivePersent}%</span>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    totalPositivePersent: PropTypes.number.isRequired,
};





