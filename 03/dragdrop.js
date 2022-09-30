$(function(){
    //項目をドラッグできるように指定。
    //無関係の所に置いた場合は元に戻す。
    $('.dditem').draggable({
        revert : true
    });

    //ドロップを受け付けるdivの設定。
    //ドロップされたら自分の一番下に追加し、leftとtopを空にする（デフォルトの状態にする）。
    $("#firstList,#secondList").droppable({
        accept: ".dditem" ,
        drop: function(event, ui){
            event.target.appendChild(ui.draggable[0]);
            $(ui.draggable[0]).css('left',"");
            $(ui.draggable[0]).css('top',"");
        }
    });

});
