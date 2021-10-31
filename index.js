const fs = require("fs");

//lê os conteúdos de um arquivo

function saida() {
  fs.readFile("./data.json", "utf-8", (error, data) => {
    const objeto = JSON.parse(data);
    let salvar = [];
    let categoria = [];

    objeto.products.map((item) => {
      item.categoriesId.forEach((element) => {
        const categories = objeto.categories.forEach((categori) => {
          if (element === categori.id) {
            categoria.push(categori.name);
          }
        });
      });

      //console.log(categoria);
    });

    // const priceFormatado = parseInt(objeto.products.price);
    // const price = priceFormatado / 100;
    // console.log(priceFormatado);

    objeto.establishments.map((item) => {
      item.productsId.forEach((element) => {
        const products = objeto.products.forEach((produto) => {
          if (element === produto.id) {
            salvar.push({
              Establishment: item.name,
              Categorias: categoria,
              Products: produto.name,
              Price: paserFloat(produto.price / 100),
            });
          }
        });
      });
    });
    console.log(salvar);
  });
}

saida();
