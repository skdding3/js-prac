// this

// 전역 환경

function Sunki(){
    this.name = 'Sunki'
    return this;
}


const sunki = new Sunki();

console.log(sunki); // Sunki { name: 'Sunki' }


function MyFn() {
    this.title = 'Hello World!';
    return this;
}
// new 연산자를 이용해서 새로운 객체를 얻는다.
const myfn = new MyFn();
myfn // MyFn {title: 'Hello World!'}


// Object

const climb = {
    title : 'bolder',
    showTitle() {
        console.log(this.title)
    }
}

climb.showTitle(); // bolder -> 객체 메소드

// 객체 메소드의 함수 this

const fn = {
    title: 'climbing',
    tags: ['red','orange','yellow', 'green'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(tag);
            console.log(this)
        })
    }
}

// fn.showTags()


// 객체 메소드 함수 this 해결방안
const fn2 = {
    title: 'climbing',
    tags: ['red', 'orange', 'yellow', 'green'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(tag);
            console.log(this); // fn
        }, this); // 여기는 일반 함수 바깥, fn 객체를 참조할 수 있다.
    }
}
fn2.showTags();
