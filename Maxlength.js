// Maxlength

// input type 이 num 일때 최대 입력 제한은 javascript로 걸어줘야한다.

// oninput="maxLengthCheck(this)"

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}