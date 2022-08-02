const arr = ["가", "나", "다", "라"];

arr.forEach(function (item, index, array) {
  console.log(item, index, array[index + 1]);
});

// 첫번째 인수는 배열의 각각 item
// 두번째는 배열의 index
// 세번째는 배열
