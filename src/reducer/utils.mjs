const calculateSentiment = (value, magnitude) => {
    return value * Math.pow(10, magnitude);
}

export default calculateSentiment