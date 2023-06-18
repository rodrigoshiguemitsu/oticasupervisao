var count = 1;
document.getElementById("radio1").checked=true;

setInterval(function(){
 nextImage();
},5000)
function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display='none'
    }else{
        itens.style.display = 'block'
    }
}