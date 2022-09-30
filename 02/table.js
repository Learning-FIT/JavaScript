$(function(){
    //行をクリックしたときのイベント
    $('tr').on('click',function(event){
        $('tr').css('background-color','');
        $(event.currentTarget).css('background-color','#ff0');
    });

    //文字を入力したときのイベント
    $('#search').on('keyup',function(event){
        $('td').each(function(index,element){
            if($(element).text() == $('#search').val()){
                $(element).css('color','red');
            }else{
                $(element).css('color','black');
            }
        });
    });
});


