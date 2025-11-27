// ------------a) Tipos Literales para orderStatus---------------//

type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus;

orderStatus = "pending";
console.log("Estado inicial del pedido:", orderStatus);

orderStatus = "shipped";
console.log("Estado actualizado del pedido:", orderStatus);

// --------------b) Enum LogLevel-------------------//

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

// -----------------Pruebas en consola-----------------//
logMessage(LogLevel.Info, "Aplicación iniciada correctamente.");
logMessage(LogLevel.Warning, "El stock está por debajo del mínimo.");
logMessage(LogLevel.Error, "Error al conectar con la base de datos.");
