// --------Tipos fundamentales-------------//

let productName: string = "Notebook gamer";

let productPrice: number = 899999.99;

console.log("Nombre del producto:", productName);
console.log("Precio del producto:", productPrice);

// ---------------Tipo Unión (Union Type)--------------------//

let productId: string | number;

productId = "NB-001";
console.log("productId como string:", productId);

productId = 1;
console.log("productId como number:", productId);

// -----------------Interfaz básica Product--------------------//

interface Product {
  name: string;
  price: number;
}

const myProduct: Product = {
  name: productName,
  price: productPrice,
};

console.log("Objeto myProduct:", myProduct);
