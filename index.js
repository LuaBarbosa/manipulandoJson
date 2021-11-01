const fs = require("fs");

//lê os conteúdos de um arquivo

fs.readFile("./data.json", "utf-8", (error, data) => {
  const objeto = JSON.parse(data);

  let salvar = [];

  let categoria = [];

  objeto.products.map((item) => {
    item.categoriesId.forEach((element) => {
      const categories = objeto.categories.forEach((categori) => {
        if (categoria.includes(element)) {
          return;
        } else if (element === categori.id) {
          categoria.push(categori.name);
        }
      });
    });
  });

  objeto.establishments.map((item) => {
    item.productsId.forEach((element) => {
      const products = objeto.products.forEach((produto) => {
        if (element === produto.id) {
          salvar.push({
            Establishment: item.name,
            Products: produto.name,
            Categories: categoria,
          });
        }
      });
    });
  });
  console.log(salvar);
});
