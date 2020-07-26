class Temperature {
    constructor(temperature) {
        this.temperature = temperature;
    }
    convertF(){
        let F = this.temperature * 1.8 + 32;
        return F;
    }
    convertK(){
        let K = this.temperature + 273;
        return K;
    }
}
let temperatureC = +prompt("nhap do C");
let temperaturenam = new Temperature(temperatureC);
document.write("Do C sang do F la: " + temperaturenam.convertF() + "<br>");
document.write("Do C sang do K la: " + temperaturenam.convertK());