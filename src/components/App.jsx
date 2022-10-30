import {useState} from 'react';
import {Section} from 'components/Section/Section.jsx';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions.jsx'
import {Statistics} from 'components/Statistics/Statistics.jsx';
import { Notification } from 'components/Notification/Notification.jsx';

export const App = () => {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0);

  const onButtonClick = nameButton => {
    switch (nameButton) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalPositivePersent = Math.round((good/(countTotalFeedback()))*100);
    return totalPositivePersent ?? 0;
  }

  const total = countTotalFeedback();
  const totalPositivePersent = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          onFeedbackOptions={onButtonClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {total ? 
        (<Statistics 
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {total}
          totalPositivePersent = {totalPositivePersent}
          />
        ) 
        : 
        (<Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  ) 
}



