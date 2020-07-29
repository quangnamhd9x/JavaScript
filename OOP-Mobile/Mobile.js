class Mobile {
    constructor(name) {
        this.name = name;
        this.msg = "";
        this.inbox = [];
        this.outbox = [];
        this.battery = 100;
    }

    writeMsg(value){
        this.msg = value;
    }

    sendMsg(mobile){
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.name,this.msg);
        this.battery--;
    }

    receiveMsg(message){
        this.inbox.push(message);
        // alert(`${this.name} da nhan 1 tin nhan tu ${name}`);
    }
}

