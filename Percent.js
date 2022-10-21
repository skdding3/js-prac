// 퍼센트 구하기


// 남자 여자 데이터

const GenderData = [{
        'gender': 'M',
        'genderCount': 15,
    },
    {
        'gender': 'F',
        'genderCount': 7,
    }]

let Male = GenderData[0].genderCount // 남자
let Female = GenderData[1].genderCount // 여자

let FullCount = Male + Female

console.log(FullCount) // 22

// 백분율
let MalePercent = Male/FullCount * 100
let FemalePercent = Female/FullCount * 100

console.log(MalePercent) //68.18181818181817
console.log(FemalePercent) // 31.818181818181817

// 반올림 작업 Math.round
MalePercent = Math.round(MalePercent)
FemalePercent = Math.round(FemalePercent)

console.log(MalePercent) // 68
console.log(FemalePercent) // 32




