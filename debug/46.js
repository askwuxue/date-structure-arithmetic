var permute = function (nums) {
    const res = new Array();
    const path = new Array();
    const dfs = (nums, res, path) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // 如果path中没有该数，则加入path
            // console.log(nums[i]);
            console.log(nums[i], path, path.length, path.indexOf(nums[i]));
            let hasValue = path.indexOf(nums) === -1 ? false : true;
            // let set = new Set(path);
            // console.log(set);
            // console.log(set.has(nums[i]));
            // if (path.indexOf(nums[i]) === -1) {
            path.push(nums[i]);
            // }
            dfs(nums, res, path);
            path.pop();
        }
        return res;
    }
    return dfs(nums, res, path)
};

const nums = [1, 2, 3];
const result = permute(nums);
console.log(result);