module.exports = {
    sum: notes => notes.reduce((acc, note) => {
        acc += note;
        return acc;
    }, 0)
}