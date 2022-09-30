//window.alert("こんにちは！");
function buttonClick(){
    //window.alert('関数を実行しました！');
    //document.body.innerText = "書き換えデータ";
    document.getElementById('testDiv').innerText = "取得して書き換えるサンプル";

    //クラス名で複数取得すると配列になる。
    //jQueryで複数取得した場合は単体で取得した時と同様に設定できるが、通常のJavaScriptではできない。
    let divs = document.getElementsByClassName('sample');
    for(i = 0; i < divs.length; i++){
        divs[i].innerText = "複数書き換えサンプル";
    }

    let btn = document.createElement('button');
    //document.body.appendChild(btn);
    document.getElementById('testDiv').appendChild(btn);

    //これより下は、document.body.innerTextの行のコメントを解除すると有効になる。
    //画面が文字に置き換わってしまうため、１つ１つ実験する必要がある。
    let.moji = "変数のデータ";
    //document.body.innerText = moji;

    let result = 2.5 * 100;
    //document.body.innerText = result;
}
function avarage(a,b){
    return (a + b) / 2;
}
var result = avarage(3,5);
//window.alert(result);

window.onload = function(){
    //ここに、画面のロードが終わった後の処理を記述する。

    var test = document.getElementById('nothing');
    //存在しないIDで取得するとエラーになる
    //test.innerText = "テスト";
    
    //エラーになった場合、これ以下は実行されないので注意。
    
    var btn = ducoment.getElementById('mainButton');
    //btn.addEventListener("click",buttonClick);
    btn.addEventListener("click",function(){
        //ここに処理を記述
    });

}
var num = 10;
//ログにnumの内容を表示
console.log(num);

