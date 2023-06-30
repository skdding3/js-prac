// Error handling

// try .. catch

// try {
//     // code
// } catch (err) {
//     // error handling
// }



let json = '{ "age" : 30 }'; // 불완전 데이터

try {
    let user = JSON.parse(json); // <-- 에러 없음

    if (!user.name) {
        throw new SyntaxError("불완전한 데이터: 이름 없음");
    }

    console.log (user.name) ;
} catch (e) {
    console.log("JSON.Error: " + e.message); // JSON.Error: 불완전 데이터 : 이름 없음
}



try {
    alert( 'try 블록 시작' );
    if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
    alert( 'catch' );
} finally {
    alert( 'finally' );
}

