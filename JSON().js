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


// ajax 데이터 json에 적재하여 전송

// 빈 객체 안에 빈 배열 생성
const changeInput = {
    questionList : [],
    answerList: []
}
// input이 변화한 값 감지하여 push로 적재
$("input").change(function(){
    // 변화한 id값 가져오기
    changeInput.questionList.push($(this).attr('id'))
    changeInput.answerList.push($(this).val())
});

$('#submit').click(() => {
    console.log(changeInput)
})
