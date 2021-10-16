/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    if (num < 2) {
        return true
    }
    let left = 2;
    let right = Math.floor(num / 2)
    while (left <= right) {
        let x = left + Math.floor((right - left) / 2)
        let guessSquared = x * x
        if (guessSquared === num) {
            return true
        }
        if (guessSquared > num) {
            right = x - 1
        }
        if (guessSquared < num) {
            left = x + 1
        }
    }
    return false
}
