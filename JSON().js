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
    // 질문 답변 구분해서 데이터 적재
    if ($(this).attr('id').substring(26,27) == 'q') {
        var push = {
            questionSeq : $(this).attr('title'),
            question : $(this).val()
        }
        changeInput.questionList.push(push)
    } else if ($(this).attr('id').substring(26,27) == 'a') {
        var push = {
            answerSeq : $(this).attr('title'),
            answer : $(this).val()
        }
        changeInput.answerList.push(push)
    } else if ($(this).attr('id').substring(27,28) == 'q') {
        var push = {
            questionSeq : $(this).attr('title'),
            question : $(this).val()
        }
        changeInput.questionList.push(push)
    } else if ($(this).attr('id').substring(27,28) == 'a') {
        var push = {
            answerSeq : $(this).attr('title'),
            answer : $(this).val()
        }
        changeInput.answerList.push(push)
    }
});

$('#submit').click(() => {
    console.log(changeInput)
})

// ajax arrayList로 보내주기

let surveyData = {
    questionList: changeInput.questionList,
    answerList: changeInput.answerList
}


// 백엔드에서 받아주는 방법에 따라 ajax 보내주는 형태가 달라질수있다.
// @RequestBody로 받아주는 경우 다음과 같이 보내주면 JSON.array로 받아들일수 있다.


$.ajax({
    url: "/mng/system/survey/edit",
    method: "POST",
    data: JSON.stringify(surveyData), // string화 시켜준다.
    contentType : "application/json; charset=utf-8", // type을 json 형태로 잡아준다.
    success: function () {
        window.location.href = '/mng/system/survey/basic'
    },
    fail: function () {
        alert('fail')
    }
})
