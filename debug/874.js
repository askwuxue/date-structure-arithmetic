/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    const direX = [0, 1, 0, -1];
    const direY = [1, 0, -1, 0];
    let currX = 0, currY = 0;
    let dire = 0;
    let commandLens = commands.length;
    let res = 0;
    let hasObstacles = new Map();
    for (let i = 0; i < obstacles.length; i++) {
        hasObstacles.set(`${obstacles[i][0]}-${obstacles[i][1]}`, true)
        // hasObstacles[obstacles[i][0] + '-' + obstacles[i][1]] = true;
    }

    for (let i = 0; i < commandLens; i++) {
        if (commands[i] === -2) {
            dire = (dire + 3) % 4;
        }
        if (commands[i] === -1) {
            dire = (dire + 1) % 4;
        }
        for (let j = 0; j < commands[i]; j++) {
            let nx = currX + direX[dire];
            let ny = currY + direY[dire];
            if (hasObstacles.has(`${nx}-${ny}`)) {
                break;
            } else {
                currX = nx;
                currY = ny;
                res = Math.max(res, currX * currX + currY * currY);
            }
        }
    }
    return res;
};
const commands = [4, -1, 4, -2, 4], obstacles = [[2, 4]];
let result = robotSim(commands, obstacles);
console.log('result: ', result);