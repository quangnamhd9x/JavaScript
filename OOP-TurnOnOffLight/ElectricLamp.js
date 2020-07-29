class ElectricLamp {
    constructor(name) {
        this.name = name;
        this.status = true;
    }

    turnOn() {
        this.status = true;
        console.log("Den duoc bat");

    }

    turnOff() {
        this.status = false;
        console.log("Den duoc tat");

    }
}