import React from 'react';
import {Section} from 'components/Section/Section.jsx';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions.jsx'
import {Statistics} from 'components/Statistics/Statistics.jsx';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onButtonClick = (chellenge) => {
      switch (chellenge) {
        case 'good':
          this.setState(prevState => ({
            good: prevState.good + 1,
          }));
          break;
        case 'neutral':
          this.setState(prevState => ({
            neutral: prevState.neutral + 1,
          }));
          break;
        case 'bad':
          this.setState(prevState => ({
            bad: prevState.bad + 1,
          }));
          break;
        default:
          return;
      }
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
          <div>
            <Section title="Please leave feedback">
              <FeedbackOptions 
                onFeedbackOptions={this.onButtonClick}
                options={Object.keys(this.state)}
              />
            </Section>
            <Section title="Statistics">
              <Statistics 
                onState = {this.state}
                total = {total}
                totalPositivePersent = {totalPositivePersent}
              />
            </Section>
          </div>
        ) 
    }
}
