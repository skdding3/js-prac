// iterable 객체


let range = {
    from: 1,
    to: 5
};


// for..of 최초 호출 시, Symbol.iterator가 호출된다.
range[Symbol.iterator] = function () {

    // Symbol.iterator는 이터레이터 객체를 반환
    // Separation of concern 관심사의 분리
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
}

for (let num of range) {
    console.log(num) // 1, then 2,3,4,5
}