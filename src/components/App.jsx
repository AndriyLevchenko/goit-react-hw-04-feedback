import React from 'react';
import {Section} from 'components/Section/Section.jsx';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions.jsx'
import {Statistics} from 'components/Statistics/Statistics.jsx';
import { Notification } from 'components/Notification/Notification.jsx';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onButtonClick = nameButton => {
    this.setState(prevState => ({
    [nameButton]: prevState[nameButton] + 1,
  }));
  };

  countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
      const {good} = this.state;
      const totalPositivePersent = Math.round((good/(this.countTotalFeedback()))*100);
      return totalPositivePersent ?? 0;
  }

  render () {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const totalPositivePersent = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            onFeedbackOptions={this.onButtonClick}
            options={Object.keys(this.state)}
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
}
