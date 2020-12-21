const student = require('./student');

describe("Testes para alunos", () => {
    it("Devem retornar 10 quando as notas forem 5, 3, 2", () => {
        const notes = [5, 3, 2];
        expect(student.sum(notes)).toEqual(10);
    })
    it("Deve retornar 0 quando umas notas for 0", () => {
        const notes = [1, 2, 3, 0];
        expect(student.sum(notes)).toEqual(0);
    })
    it("Deve retornar valor dobrado quando um aluno tiver mais de cinco notas", () => {
        const notes = [1, 2, 3, 4, 5, 6, 7];
        expect(student.sum(notes)).toEqual(56)
    })
})