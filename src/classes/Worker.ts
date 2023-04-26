import persons from "../data/person";

export class Worker {
    constructor(
        public name: string,
        public fullName: string,
        public age: number,
        public id: number,
        public team: string
    ) {}

    get person():string {
        return persons.find( person => person.id === this.id )?.description || 'not found';
    }
}