// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

const familiares = ["Aleyda", "Daniel", "Alexander", "Julien"];

// - Un nuevo Set con los nombres de tu familia

const set = new Set(familiares);
console.log(set);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
set.add("Jimmy");
console.log(set);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
set.add("JavaScript");
console.log(set);
