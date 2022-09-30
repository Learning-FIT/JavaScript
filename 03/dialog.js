$(function(){
    //ボタンを押したときのイベント
    $("#dialogButton").on('click',function(){
        $('#sampleDialog').dialog({
            height: 300,
            width: 350,
            modal: true,
            show: {
                duration: 1000,
            },
        })
    });
})