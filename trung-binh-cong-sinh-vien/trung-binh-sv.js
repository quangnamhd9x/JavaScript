let inputmath;
let inputphys;
let inputchems;
let inputbio;

inputmath = prompt("nhap diem mon toan");
inputphys = prompt("nhap diem mon vat ly");
inputchems = prompt("nhap diem mon hoa");
inputbio = prompt("nhap diem mon vat sinh hoc");

let math = parseInt(inputmath);
let phys = parseInt(inputphys);
let chems = parseInt(inputchems);
let bio = parseInt(inputbio);
let average = (math + phys + chems + bio)/4;

alert("Diem trung binh la:" + average);