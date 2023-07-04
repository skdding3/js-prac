// Private

function ObjFactory() {
    const private = 'foo';

    return{
        get public() {
            return private;
        },
    }
}

const obj = ObjFactory();

console.log(obj.private) // undefined
console.log(obj.public) // foo
