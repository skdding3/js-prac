// JQuery focus


$(function () {
    // // focusout

    // 혈압 수축기 alert
    // 왼쪽
    var pressureLeft =  $('#input1_02_1').val();

    $('#input1_02_1').focusout(function () {
        if(pressureLeft >= 160) {
            alert('5분 후 재측정 해주세요')
        }
    })
    // 오른쪽
    var pressureRight = $('#input1_02_2').val();

    $('#input1_02_2').focusout(function () {
        if(pressureRight >= 90) {
            alert('5분 후 재측정 해주세요')
        }
    })