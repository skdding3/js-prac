const $button = document.querySelector("button");

const handleClick = () => console.log("button click");

// 참조가 동일한 이벤트 핸들러를 중복으로 올리면 하나의 핸들러만 등록된다.
$button.addEventListener("cilck", handleClick);
$button.addEventListener("cilck", handleClick);

// 동일한 이벤트를 하나 이상의 핸들러로 등록 할 수도 있다.
$button.addEventListener("click", function () {
  console.log("[1]button click");
});

$button.addEventListener("click", function () {
  console.log("[2]button click");
});
