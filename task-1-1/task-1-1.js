class Worker {
    constructor(name, surname, rate, workingDays) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.workingDays = workingDays;
    }
    getSalary() {
        console.log(`The salary of ${this.name} ${this.surname} is ${this.rate * this.workingDays} dollars.`);
    }
}

const worker = new Worker("John","Doe", 10, 28);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.workingDays);
worker.getSalary();