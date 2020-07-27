class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.messageInput = [];
        this.messageOutput = [];
        this.messageWrite = "";
        this.status = true;

    }

    CheckTurnOn() {
        if (this.status) {
            alert("TurnOn");
        } else {
            alert("TurnOff");
        }
    }

    TurnOn() {
        this.status = true;
    }

    Charge() {

        this.battery = 100; //Pin ifininity
    }

    WriteMessage(value) {
        if (this.battery > 0) {
            this.messageWrite = value;
            this.battery -= 10;
        }
    }

    SendMessage(phone) {
        if (this.battery > 0) {
            this.messageOutput = message;
            this.battery -= 10;
        }
        phone.messageInput = message;
    }


    ViewMessInput() {
        if (this.battery > 0) {
            return this.messageInput;
            this.battery -= 10;
        }
    }

    ViewMessOnput() {
        if (this.battery > 0) {
            return this.messageOutput;
            this.battery -= 10;
        }
    }
}
let Nokia = new Mobile("Nokia 110i");
let iphone = new Mobile("Iphone Tàu");
function sendMess(mobile1, mobile2) {
    mobile1.sendMess(mobile2);
    document.getElementById("inbox").innerHTML = Nokia.inbox;
    document.getElementById("outbox").innerHTML = iphone.inbox;
    document.getElementById("inboxiphone").innerHTML = iphone.inbox;
    document.getElementById("message").value= "";
}