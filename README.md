# Trabajo Práctico IV – TypeScript

Este trabajo practico TypeScript.  
El objetivo es practicar el sistema de tipos de TypeScript: tipos básicos, tipos unión, interfaces, funciones tipadas, tipos literales, enums y type assertions, utilizando control de versiones con Git y GitHub.

---

## Estructura del proyecto

- src/01-tipos-basicos.ts

- src/02-update-stock.ts

- src/03-literales-enums.ts

---

## Cómo ejecutar los ejemplos

### Modo directo con tsx

```bash
npx tsx src/01-tipos-basicos.ts
npx tsx src/02-update-stock.ts
npx tsx src/03-literales-enums.ts

```

## 5. Actividad de Investigación

`Elaborar un glosario que incluya las palabras clave o conceptos aprendidos durante esta actividad. Para cada término, se debe incluir:`
`● Una definición breve y clara.`
`● Un ejemplo simple en TypeScript que ayude a comprender su uso.`

En esta sección se presenta un glosario de conceptos clave de TypeScript trabajados en el TP.  
Las definiciones se elaboraron a partir de la documentación oficial de TypeScript y de material introductorio similar al utilizado en clase, reformuladas con palabras propias y acompañadas de ejemplos simples en código.

---

### 1. Tipo básico

`Definición:`  
En TypeScript, los tipos básicos (o primitivos) incluyen string, number, boolean, entre otros. Representan valores simples: textos, números y valores lógicos. Son la base del sistema de tipos.

**Ejemplo en TypeScript:**

let productName: string = "Mouse inalámbrico";
let productPrice: number = 25000;
let inStock: boolean = true;

---

### 2. Tipo unión (Union Type)

`Definición:`
Un union type permite que una variable acepte más de un tipo. Es útil cuando un mismo dato puede venir, por ejemplo, como string o como number. TypeScript obliga a manejar los posibles tipos de forma segura.

**Ejemplo en TypeScript:**

let productId: string | number;

productId = "PRD-001";
productId = 101;

### 3. Interface

    Definición:

Una interface define la estructura que debe cumplir un objeto: qué propiedades tiene y de qué tipo son. Permite describir contratos claros y reutilizables dentro del código.

**Ejemplo en TypeScript:**

interface Product {
name: string;
price: number;
}

const myProduct: Product = {
name: "Teclado mecánico",
price: 38000,
};

### 4. Función tipada

    Definición:

Una función tipada especifica los tipos de sus parámetros y el tipo del valor de retorno. Esto ayuda a que el compilador detecte llamadas incorrectas y a documentar mejor el código.

**Ejemplo en TypeScript:**

function updateStock(currentStock: number, quantityChange: number): number {
return currentStock + quantityChange;
}

const newStock = updateStock(20, -3); // 17

### 5. Tipo literal

    Definición:

Un tipo literal restringe los valores posibles de una variable a un conjunto fijo de strings o números. Es útil para representar estados u opciones muy específicas.

**Ejemplo en TypeScript:**

type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus;

orderStatus = "pending";  
orderStatus = "shipped";  
// orderStatus = "canceled";

### 6. Enum

    Definición:

Un enum (enumeración) define un conjunto de valores con nombre. Se usa para representar opciones fijas (niveles de log, roles, estados, etc.) de forma más legible que usar solo strings sueltos.

**Ejemplo en TypeScript:**

enum LogLevel {
Info = "Info",
Warning = "Warning",
Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
console.log(`[${level}] ${message}`);
}

logMessage(LogLevel.Info, "Aplicación iniciada correctamente.");

### 7. Type assertion

    Definición:

Una type assertion le indica al compilador que trate un valor como un tipo específico. No cambia el valor en tiempo de ejecución, pero le da más información a TypeScript cuando el desarrollador sabe algo que el compilador no puede inferir.

**Ejemplo en TypeScript:**

let unknownValue: unknown = "12345";

const lengthOfString: number = (unknownValue as string).length;

### 8. unknown

    Definición:

unknown representa un valor cuyo tipo real no se conoce al inicio. Es más seguro que any porque obliga a hacer comprobaciones de tipo o usar type assertions antes de trabajar con el valor.

**Ejemplo en TypeScript:**

let maybeValue: unknown = "42";

if (typeof maybeValue === "string") {
const numeric = Number(maybeValue); // ahora es number y se puede usar como tal
}

### 9. any

    Definición:

any es un tipo muy flexible que permite asignar cualquier valor y realizar operaciones sin chequeo de tipos. A cambio, se pierde seguridad en tiempo de compilación, por lo que se desaconseja su uso abusivo.

**Ejemplo en TypeScript:**

let anything: any = 10;
anything = "ahora soy un string";
anything = { foo: "bar" };

### 10. Sistema de tipos de TypeScript

    Definición:

El sistema de tipos de TypeScript es el conjunto de reglas que se utiliza para determinar qué tipo tiene cada variable, parámetro y valor de retorno. Gracias a este sistema, muchos errores se detectan en tiempo de compilación, antes de ejecutar el programa.

**Ejemplo en TypeScript:**

function square(n: number): number {
return n \* n;
}

const result = square(4);  
// const error = square("4");
