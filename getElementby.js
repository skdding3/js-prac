// #6 getElementby

const $btn = document.getElementById("btn-prac");
$btn.addEventListener("click", function () {
  if ($btn.innerText === "적용 전 버튼") {
    $btn.innerText = "적용 후 버튼";
  } else {
    $btn.innerText = "적용 전 버튼";
  }
});
