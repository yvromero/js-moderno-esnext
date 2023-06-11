const state = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];


const index = 1;
const newName = 'Green Lantern';


// const newState = state.map( (hero, i) => {

//     if ( i === index ) {
//         hero.name = newName;
//     }
//     return {...hero};
// });

// The With() method of array => Se debe regresar la referencia, de lo contrario se pierde

const newState = state.with(index, {
    //id: 1000,
    //...state[index],
    ...state.at(index), //Array.at()
    name: newName
});

state[0].name = 'Volcan Negro';

console.table(newState);
//Array.at()
console.log('El ultimo: ', state.at(-1));
//console.log('El ultimo: ', state[state.length -1]);