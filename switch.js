// switch 문

// 하나 이상의 case에서 작동한다.

let a = 2 + 2;

switch (a) {
    case 3:
        console.log( '비교하려는 값보다 작습니다.' );
        break;
    case 4:
        console.log( '비교하려는 값과 일치합니다.' );
        break;
    case 5:
        console.log( '비교하려는 값보다 큽니다.' );
        break;
    default:
        console.log( "어떤 값인지 파악이 되지 않습니다." );
}
// 비교하려는 값과 일치합니다.


// 여러 개의 "case" 문 묶기


let b = 4;
switch(b) {
    case 4:
        console.log('계산이 맞습니다.');
        break;


    case 3:
    case 5:
        console.log('계산이 틀립니다!');
        console.log('수학을 다시 들어봅시다');


    default:
        console.log('오잉 이상하네요 계산이');
}


// case 3 과 5는 같은 결과를 보여준다.



// switch 문을 if 문으로 바꿔보기

switch (browser) {
    case 'Edge':
        alert( "Edge를 사용하고 계시네요!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
        break;

    default:
        alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}

// 풀이
if (browser == 'Edge') {
    alert("Edge를 사용하고 계시네요!")
} else if (browser == 'Chrome' || browser == 'FireFox' || browser == 'Safari' || browser == 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.')
} else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!')
}