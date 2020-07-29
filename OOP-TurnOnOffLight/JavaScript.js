class SwitchButton {
    constructor() {
        this.status = true;
        this.lamp = "";
    }

    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp;
    }

    switchOn() {
        this.lamp.turnOn();
        this.status = true;
    }

    switchOff() {
        this.lamp.turnOff();
        this.status = false;
    }
    switchButton(){
        this.status ? this.switchOff() : this.switchOn();
    }
}

