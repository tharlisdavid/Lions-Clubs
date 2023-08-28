const XLSX = require('xlsx');
const workbook = XLSX.readFile('Custo.xlsx');
const sheetName = workbook.SheetNames[0]; // Pega o nome da primeira planilha

const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(data);