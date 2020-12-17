module.exports = {
    sum: notes => {
        const minValue = Math.min(...notes);
        if (minValue === 0) {
            return 0;
        }
        return notes.reduce((acc, note) => {
            acc += note;
            return acc;
        }, 0)
    }
}