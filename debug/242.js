var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    [].sort();
    tArr.sort();
    for (let i = 0; i < s.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }
    return true;
};
let s = "anagram";
let t = "nagaram";
isAnagram(s, t);