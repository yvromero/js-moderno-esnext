// const heroes = ['Batman','Superman','Flash','Aquaman'];
//const heroesCopy = heroes;
//const sortedHeroes = heroes.toSorted();

// heroes.sort();// modifica el original y la referencia - Mutable
//heroes.toSorted(); regresa un nuevo arreglo ordenado de forma ascendente - Inmutable

//heroes.reverse();
// const reverseHeroes = heroes.toReversed();

// console.table(heroes);
//console.table(heroesCopy);
//console.table(sortedHeroes);
// console.table(reverseHeroes);

// Splice() - Cambia el contenido de un arreglo
// toSpliced() - Remueve o reemplaza el contenido de un arreglo sin mutar el original

const heroes = ['Batman','Superman','Flash','Aquaman'];

// const DeletedHero = heroes.splice( 0, 2, 'Green Lantern')

const DeletedHeroes = heroes.toSpliced( 0, 2, 'Green Lantern')

console.table(heroes);
console.table({DeletedHeroes});