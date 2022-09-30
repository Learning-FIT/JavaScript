window.onload = function(){
    var button = document.getElementById('mainButton');
    button.onclick = function(){
        window.alert('クリックされました！');
    }

    var input = document.getElementById('test01');
    input.onchange = function(){
        if(input.value == ""){
            window.alert("値を入力してください。");
        }
    }

    var box = document.getElementById('test02');
    box.onkeyup = function(event){
        var counter = document.getElementById('counter');
        var count = event.target.value.length;
        counter.innerText = count;
    }

    var box = document.getElementById('test03');
    box.onmouseenter = function(event){
        event.target.innerText = "マウスが乗っています";
    }
    box.onmouseleave = function(event){
        event.target.innerText = "";
    }

    document.body.onscroll = function(){
        var div = document.getElementById('test04');
        div.innerText = window.scrollY;
    }

    var input = document.getElementById('test01');
    input.onfocus = function(event){
        event.target.style.backgroundColor = 'yellow';
    }
    input.onblur = function(event){
        event.target.style.backgroundColor = 'white';
    }

    window.onresize = function(){
        //再描画処理
    }

    var div = document.getElementById('forcss');
    console.log(div.className + " :最初のclassName");
    console.log(div.classList + " :最初のclassList");
    //スペースを忘れているのでおかしくなる。
    div.className = div.className + "css3";
    //繋がって表示される
    console.log(div.className + " :そのまま文字を足した例");
    //元に戻す
    div.className = "css1 css2";
    div.classList.add("css3");
    //正しく表示される
    console.log(div.className + " :classList.add()で追加した例");
    div.classList.remove("css1");
    console.log(div.className + " :removeでcss1を削除した例");

    var btn = document.getElementById('btn');
    btn.onclick = function(){
        var div = document.getElementById('trgdiv');
        div.style.width = (div.clientWidth + 100) + 'px';
    }

}
