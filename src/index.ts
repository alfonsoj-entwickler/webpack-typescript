import * as FrontEnd from "./classes/Worker";
import persons from "./data/person";

const worker1 = new FrontEnd.Worker( 'Alex', 'Alex Top', 43, 3687, 'IT');

console.log(worker1.person);