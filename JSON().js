// JSON 다루기


var data = {
    Name: "Sunki",
    Age: "31"
}

var person =  JSON.stringify(data)
var person2 = JSON.parse(person)

// JSON.stringify()

console.log(person); // {"Name":"Sunki","Age":"31"}

// JSON.parse() key와 value 파싱

console.log(person2); // { Name: 'Sunki', Age: '31' }