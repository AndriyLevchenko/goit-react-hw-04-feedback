
const goodIncrement = () => {
    this.setState (goodState => {
        return {
            good: goodState.good + 1,
        }
    })
};

const neutralIncrement = () => {
    this.setState (neutralState => {
        return {
            neutral: neutralState.neutral + 1,
        }
    })
};

const badIncrement = () => {
    this.setState (badState => {
        return {
            bad: badState.bad + 1,
        }
    })
};

export {goodIncrement, neutralIncrement, badIncrement};