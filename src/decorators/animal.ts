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

function CheckValidAnimalId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('The id of animal musst be from 1 to 800');
            }
            else {
                return originalMethod(id);
            }
        }
    }
}

@blockPrototype
@printToConsoleConditional(true)
export class Animal {
    public publicApi: string = 'https://animalsapi.org';

    constructor(
        public name: string
    ){}

    @CheckValidAnimalId()
    saveAnimalToDB( id: number) {
        console.log(`Animal saved in DB ${id}`);
    }
}