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


// ajax 활용 실습 예제 (Front-End)

function signup() {
    var member = {
        "email": "skdding3@gmail.com",
        "password": "1234"
    }
}

$.ajax({
    url : '/acount/signup',
    dataType : 'json',
    type : 'POST',
    data : JSON.stringify(member), // string 객체를 JSON 객체로 변환시키지 않으면 에러가 발생한다.
    contentType : 'application/json',
    success : function(result) {
        // TODO
        console.log(result)
    }
})
