const XLSX = require('xlsx');
const workbook = XLSX.readFile('Nome_do_aquivo.xlsx');
const sheetName = workbook.SheetNames[0]; // Pega o nome da primeira planilha

const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(data);
console.log("Olha só e não é que deu certo!");