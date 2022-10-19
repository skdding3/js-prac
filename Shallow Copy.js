// 얕은 복사 (Shallow Copy)

const user = {
    name: 'Sunki',
    age: 92,
    emails: ['skdding3@gmail.com']
}

// const copyUser = Object.assign({}, user)

const copyUser = {...user} // 전개연산자 Shallow Copy
console.log(copyUser === user)

user.age = 22

user.emails.push('skdding2@naver.com')
console.log(user.emails === copyUser.emails)

console.log('user', user)
console.log('copyUser', copyUser)

// 표면적인 복사처리를 적용한다.