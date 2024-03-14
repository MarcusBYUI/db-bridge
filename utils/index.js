function numberToTwoDecimals(num) {
    if (num) {
        var with2Decimals = num.toString().match(/^-?\d+(?:\.\d{0,9})?/)[0];
        return Number(with2Decimals);
    } else {
        return 0;
    }
}

module.exports = { numberToTwoDecimals }