
type Address = {
    street: string;
    city: string;
}

type Contact = {
    phone: string;
    email: string;
}

function concatenate(a: string, b: string): string;
function concatenate(a: number[], b: number[]): number[];
function concatenate(a: Address, b: Contact): Address & Contact;

function concatenate(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b
       }  else if (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.every(el => typeof el === "number") &&
        b.every(el => typeof el === "number")
      ) {
        return [...a, ...b];
      } else if ( typeof a === "object" && typeof b === "object") {
        return { ...a, ...b }
      }
    
}
const address: Address = { street: "Main", city: "Warsaw" };
const contact: Contact = { phone: "123456789", email: "test@op.com" };


console.log(concatenate("Hello, ", "world!")); 
console.log(concatenate([1, 2], [3, 4]));       
console.log(concatenate(address, contact));  