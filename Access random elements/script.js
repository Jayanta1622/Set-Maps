function extractElements(array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];
}
