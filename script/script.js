$(function(){

    $("button").click(function(){

        var no1 = parseInt($("#no1").val());
        var no2 = parseInt($("#no2").val());
        var res = "";

        /* 순환문 while을 사용하여 1~5 출력 */
                       // 초기식          // 조건식       //증감식
        for (var data1 = no1; data1 <= no2; data1++) {

            res += (data1 + "<br>");
            // res = "" + (data1 + "<br>");

            /*alert("res : " + res);*/
            /*출력결과 => 5<br>6<br>7<br>8<br>*/

        }

        $("#res").html(res);
    });

});
