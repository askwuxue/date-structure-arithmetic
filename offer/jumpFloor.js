function jumpFloor (number) {
    if (number <= 0) return false;
    if (number == 1) return 1;
    if (number == 2) return 2;
    if (number > 2) {
        let [one, two, sum] = [1, 2, 0];
        for (let i = 3; i <= number; i++) {
            sum = one + two;
            one = two;
            two = sum;
        }
        return sum;
    }
}