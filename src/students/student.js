module.exports = {
    sum: notes => {
        if (Math.min(...notes)) {
            return notes.reduce((acc, note) => {
                acc += note;
                return acc;
            }, 0)
        }
        return 0;
    }
}