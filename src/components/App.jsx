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
    [setGood, setNeutral, setBad](prevState => ({
    [nameButton]: prevState[nameButton] + 1,
  }));
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



