// .eq

document.getElementsByClassName("클래스명")[0];
document.getElementsByClassName("클래스명")[3];

// .eq를 javascript에서 표현하는 방법 (클래스 선택자에서 요소를 선택하는부분)
document.getElementsByClassName("클래스명")[0];
document.getElementsByClassName("클래스명")[3];

// 공지사항 리스트 클릭시 디테일 변경
var tabAnchor = $(".list_item"),
  tabPanel = $(".board_detail");

// 클릭 시 class on 추가 (클래스 visibility 표시)3
tabAnchor.click(function (e) {
  e.preventDefault();
  tabAnchor.removeClass("on"); // 모든 요소에 on 을 제거한 상태
  $(this).addClass("on"); //내가 선택한 요소(this)에만 css style on을 추가

  // 다른 탭을 누를 때 패널 변경
  tabPanel.hide();
  var $detailIdx = $(this).index();
  // 패널 리스트 탐색 (eq)
  tabPanel.eq($detailIdx).show();
});
