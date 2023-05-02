import * as FrontEnd from "./classes/Worker";
import persons from "./data/person";
import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Worker, Machine } from "./interfaces/Worker";

const worker1 = new FrontEnd.Worker( 'Alex', 'Alex Top', 43, 3687, 'IT');

console.log(worker1.person);

printObject( 1234 );
printObject( new Date() );
printObject( { a:1, b:2, c:3, d:4} );
printObject( [1,2,3,4,5,6,7,8] );
printObject( 'My first generic' );


console.log(genericFunction( 1234 ).toFixed(2) );
console.log(genericFunction( new Date() ).toLocaleDateString() );
console.log(genericFunction( 'My first generic' ).toUpperCase() );

console.log(genericFunctionArrow( 1234 ).toFixed(2) );
console.log(genericFunctionArrow( new Date() ).toLocaleDateString() );
console.log(genericFunctionArrow( 'My first generic' ).toUpperCase() );

const robotWorker = {
    name: 'T-800',
    workplace: 'battlefield',
    levelSecurity: 100
}

console.log( genericFunctionArrow<Worker>(robotWorker).name );