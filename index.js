const fs = require("fs");

//lê os conteúdos de um arquivo

fs.readFile("./data.json", "utf-8", (error, data) => {
  const objeto = JSON.parse(data);

  let estabelecimento = [];
  let categoria = [];

  objeto.establishments.map((item) => {
    item.productsId.forEach((element) => {
      const products = objeto.products.forEach((produto) => {
        if (element === produto.id) {
          estabelecimento.push({
            Establishment: item.name,
            Products: produto.name,
          });
        }
      });
    });
  });

  objeto.products.map((item) => {
    item.categoriesId.forEach((element) => {
      const categorias = objeto.categories.forEach((cat) => {
        if (element === cat.id) {
          element = cat.name;
          categoria.push({
            Products: item.name,
            Categorie: cat.name,
            Price: item.price / 100,
          });
        }
      });
    });
    const saida = estabelecimento.forEach((element) => {
      const cat = categoria.forEach((cate) => {
        if (element.Products === cate.Products) {
          element.products = cate.products;
          categoria.push([element.Establishment]);
        }
      });
    });
  });

  //console.log(saida);
  console.log(categoria);
});
