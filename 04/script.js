$(function(){
    $('#btn').on('click',function(){
        //下記URLは、フォルダ構成・VSCodeが開いているフォルダなどにより調整する必要がある。
        let url = "http://127.0.0.1:5500/books.json";
        var postdata = {};
        var jsondata = JSON.stringify(postdata);
        
        var ajaxInfo = {
            type : "GET"
            ,dataType : "json"
            ,data : jsondata
            ,processData : false
            ,contentType: 'application/json'
            ,timeStamp: new Date().getTime()};
        $.ajax(url,ajaxInfo)
        .done(function(res){
            //終了時の処理(resに受取データ）
            console.log(res);
            $('table').empty();

            $tr = $('<tr>');
            $tr.append($('<th>').text('タイトル'));
            $tr.append($('<th>').text('著者'));
            $tr.append($('<th>').text('概要'));
            $('table').append($tr);
            res.forEach(function(book){
                $tr = $('<tr>');
                $td = $('<td>').text(book.title);
                $tr.append($td);
                $td = $('<td>').text(book.author);
                $tr.append($td);
                $td = $('<td>').text(book.overview);
                $tr.append($td);
                $('table').append($tr);
                console.log(book);
            });
        }).fail(function(res){
            //エラー時の処理（resにエラー情報）
        }); 
    });
});
