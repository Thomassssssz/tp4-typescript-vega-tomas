// Función que gestiona el inventario:
// - currentStock: stock actual
// - quantityChange: cantidad a sumar (positiva) o restar (negativa)

function updateStock(currentStock: number, quantityChange: number): number {
  const newStock: number = currentStock + quantityChange;

  return newStock;
}

// -------------------Pruebas de la función en consola-----------------------//

const initialStock: number = 20;

// Caso 1
const stockAfterSale: number = updateStock(initialStock, -5);
console.log("Stock después de vender 5 unidades:", stockAfterSale);

// Caso 2
const finalStock: number = updateStock(stockAfterSale, 10);
console.log("Stock final después de recibir 10 unidades:", finalStock);
