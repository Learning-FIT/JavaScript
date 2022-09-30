function showMessage(){
    var message = document.createElement('div');
    message.className = "message";
    var mesText = document.createElement('p');
    mesText.innerText = "表示メッセージ";
    message.appendChild(mesText);
    document.body.prepend(message);
    var close = document.createElement('button');
    close.style = "position:absolute;top:0px;right:0px;";
    close.innerText = "x";
    close.addEventListener('click',function(event){
        event.currentTarget.parentNode.remove();
    });
    message.appendChild(close);
}