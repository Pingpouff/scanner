const guess = {};
const regex = '((?:\.?\\w)*)\.[Ss]0*(\\d*)?[Ee]0*(\\d+)';

guess.what = fileName => {
    console.log(fileName);
    const matches = fileName.match(regex);
    if (matches) {
        const name = matches[1];
        const season = matches[2];
        const episode = matches[3];
        return { name, season, episode };
    } else {
        return {};
    }
};

module.exports = guess;