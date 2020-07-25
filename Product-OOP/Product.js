class Product {
    constructor(id, name, description, img, price, total) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.price = price;
        this.total = total;

    }
    getid(){
        return this.id;
    }
    setid(id){
        this.id = id;
    }
    getname(){
        return this.id;
    }
    setname(name){
        this.name = name;
    }
    getdescription(){
        return this.description;
    }
    setdescription(description){
        this.description = description;
    }
    getimg(){
        return this.img;
    }
    setimg(img){
        this.img = img;
    }
    getprice(){
        return this.price;
    }
    setprice(price){
        this.price =price;
    }
    gettotal(){
        return this.total;
    }
    settotal(total){
        this.total = total;
    }
}