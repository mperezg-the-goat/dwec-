// Creo la variable:
let x = 42;

// La muestro por consola:
console.log("Valor de x:",x);

// Muestra el tipo de la variable:
console.log("Tipo de x:",typeof x);

// Cambio la variable "x" a un String:
x="Ahora soy texto";
console.log("Valor de x:",x);
console.log("Tipo de x:",typeof x);

// Asi hacemos las ecuaciones: 
let a=2+3;
console.log("El resultado de a es:", a);

let b=1;
let c=a+b;
console.log("El resultado de c es:", c);

// Si hacemos lo mismo pero sumandole un String pasara lo siguiente:
let d=c+"7";
console.log("El resultado de d es:",d);

// Y si ahora le ponemos el signo de * el programa nos los multiplicara;
 d=c*"6";
console.log("El resultado de d es:",d);

// Si a mi variable le pongo un True y uso el typeof, el programa me dira que es un booleano:
let y =true;
console.log("Tipo de y:",typeof y);

//Por ultimo si a la variable le ponemos null no dira que es de tipo object y con undefained de tipo undefained:
n=null; u=undefined;
console.log("Tipo de n:",typeof n, " Y el valor de u es:",typeof u);
