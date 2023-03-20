function extractPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name, street };
}
