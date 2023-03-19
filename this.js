// this

// 전역 환경

function Sunki(){
    this.name = 'Sunki'
    return this;
}


const sunki = new Sunki();

console.log(sunki); // Sunki { name: 'Sunki' }

// Object

const climb = {
    title : 'bolder',
    showTitle() {
        console.log(this.title)
    }
}

climb.showTitle(); // bolder -> 객체 메소드

