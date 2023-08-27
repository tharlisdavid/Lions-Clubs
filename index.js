const reader = require('xlsx');
const file = reader.readFile('./Vendas.xlsx');
const sheets = file.SheetNames;

for(let i = 0; i < sheets.length; i++){
    const data = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])

    data.forEach((res) =>{
        console.log(res);
    })
}