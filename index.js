const fs = require("fs");

//lê os conteúdos de um arquivo
fs.readFile("./data.json", "utf-8", (error, data) => {
  const objeto = JSON.parse(data);
  console.log(objeto.products);
});
