document.onload = function(){
    //jQueryオブジェクトを取得
    $div = $('#mydiv');
    //通常のエレメントを取得
    var div = document.getElementById('mydiv');
}

$(function(){
    //ここに起動処理を書く
    $("a").css("color","#f00");

    $("p").text("これはpタグです");

    //ひとつ上の動作を確認できるよう、コメントアウトしている。
    //色を変更した後にリンクを追加しているので、こちらの色は変わらない。
    //$("p").html('<a href="./test">リンク</a>');

    //bodyの先頭に追加
    $div = $('<div>');
    $("body").prepend($div);

    //bodyの最後に追加
    $div = $('<div>');
    $("body").append($div);

    //下記のコメントを解除すると、一番上のdivがspanタグに置き換わる。
    // $div = $('#mydiv');
    // $div.replaceWith('<span>上書きしました</span>');

    $div = $('#mydiv');
    // //要素を空にする
    // $div.empty();
    // //要素自体を削除する
    // $div.remove();

    $div = $('#mydiv');
    // //不可視になる（画面要素としては残っている）。
    // $div.hide();
    // //ゆっくり消える（画面要素としては残っている）。
    // $div.fadeOut(2000);

    $div = $('#mydiv');
    // //いったん消す。
    // $div.hide();
    // //すぐに表示する（画面上では消えたことが確認できない）。
    // $div.show();
    // //ゆっくり表示する。
    // $div.fadeIn(2000);

    $div = $('#mydiv');
    // //現在は表示されているので、一瞬で消える。
    // $div.toggle();
    // //ゆっくり表示切替する。
    // $div.fadeToggle(2000);

    //クラスの追加
    $div = $('#mydiv');
    // $div.addClass('newClass');

    //クラスの削除
    $div = $('#mydiv');
    // $div.removeClass('newClass');

    //リンク先など、属性（アトリビュート）の変更
    $a = $('#myLink');
    // $a.attr('href','https://yahoo.co.jp');

    $div = $('#mydiv');
    //イベントハンドラの実装
    $div.on('click',function(){
        //クリックしたときの処理
    });  

    //複数要素を選択し、任意の番号のものを取得する。
    // $divs = $('div');
    // $div = $divs.eq(2);

    //複製し、bodyの最後に追加する。
    // $body = $('body');
    // $div = $('#mydiv').clone();
    // $body.append($div);

    //画面の入力項目の中に値を設定する。
    // $input = $('#myInput');
    // let val = $input.val();
    // console.log(val + " :現在のmyInputの値（空）");
    // $input.val('こんにちは');
    // //再取得
    // val = $input.val();
    // console.log(val + " :再取得したmyInputの値");

    //表の行要素（tr）を複数取得し、一括で背景色を設定する。
    // $rows = $('tr');
    // $rows.css('background-color','blue');

    //表の行要素を複数取得し、１つ１つループすることで条件ごとの処理を可能にする。
    // $rows = $('tr');
    // $rows.each(function(index,element){
    //     if($(element).children().eq(0).text() != ""){
    //         $(element).css('color','red');
    //     }
    // });

    


});