const guess = {};
const regex = '((?:\.?\\w)*)\.S0*(\\d*)?E0*(\\d+)';
guess.name = fileName => {
    return fileName.split('.S')[0];
};

guess.season = fileName => {
    let result = fileName.match(regex);
    return result;
}

guess.episode = fileName => {
    return fileName.split('.E')[1];
};

guess.what = fileName => {
    console.log(regex);
    const matches = fileName.match(regex);
    const name = matches[1];
    const season = matches[2];
    const episode = matches[3];
    return {name, season, episode};
};

module.exports = guess;