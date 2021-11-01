const fs = require("fs");

//lê os conteúdos de um arquivo

fs.readFile("./data.json", "utf-8", (error, data) => {
  const { products, establishments, categories } = JSON.parse(data);

  let produto = [];
  let produtoId = [];
  let produtos = [];
  let categoriaId = [];
  let categoriaNome = [];
  let final = [];

  function productsId(index) {
    produtoId = establishments[index].productsId; //produtoId com produto
    produtoId.forEach((element) => {
      produto = products.find((p) => p.id === element);
      produtos.push(produto);
    });

    produto.categoriesId.forEach((element2) => {
      nomeCategoria = categories.find((cat) => cat.id === element2);
      categoriaNome.push(nomeCategoria);
    });
    //console.log(categoriaNome);
  }
  productsId(1);
});
