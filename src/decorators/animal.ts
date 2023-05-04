function printToConsole( constructor: Function ) {
    console.log( constructor );
}

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if( print ) {
        return printToConsole;
    }
    else {
        return () => {};
    }
}

const blockPrototype = function( contructor: Function) {
    Object.seal( contructor );
    Object.seal( contructor.prototype );
}

@blockPrototype
@printToConsoleConditional(true)
export class Animal {
    public publicApi: string = 'https://animalsapi.org';

    constructor(
        public name: string
    ){}
}