function count(){
    var counter = document.getElementById('counter');
    var count = Number(counter.innerText);
    counter.innerText = count + 1;
}