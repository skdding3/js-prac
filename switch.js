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