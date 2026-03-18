const students = [
    {id: 1, nome:"Clarissa", idade: 41},
    {id: 2, nome:"Laura", idade: 24},
    {id: 3, nome:"Mei Mei", idade:18}
];

class studentServices {
    getAll() {
        return students;
    }

    getById() {

    }

    create() {

    }

    update() {

    }

    delete() {
        
    }
}

export const studentServices = new studentServices();