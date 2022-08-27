// #11 serialize

$("input, textarea, select").serialize();

$("form").on("submit", function (event) {
  event.preventDefault();
  console.log($(this).serialize());
});
