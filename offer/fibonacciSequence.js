function Fibonacci(n)
{
    // write code here
    let [a, b, c] = [1, 1, 0];
    if (n == 0) return 0;
    if (n < 3) {
        return 1;
    } else {
        for (let i = 3; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}