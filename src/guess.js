const guess = {};
const regex = '((?:\.?\\w)*)\.[Ss]0*(\\d*)?[Ee]0*(\\d+)';

guess.what = fileName => {
    console.log(regex); // TODO could this be done with deep learning?
    const matches = fileName.match(regex);
    const name = matches[1];
    const season = matches[2];
    const episode = matches[3];
    return {name, season, episode};
};

module.exports = guess;