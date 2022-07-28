var textName;
var inputElement = document.querySelector('input[type="text"]');

inputElement.oninput = function(e) {
    textName = e.target.value;
    console.log(e.target.value);
}


var inputCheck = document.querySelector('input[type="checkbox"]');

inputCheck.onchange = function(e) {
    console.log(e.target.checked);
}


var inputSelect = document.querySelector('select');

inputSelect.onchange = function(e) {
    console.log(e.target.value);
}

// onkeypress se nhan tin hieu lien tuc (khong nhan esc)
document.onkeydown = function(e){
    switch(e.which){
        case 27:
            console.log('exit');
            break;
        
        case 13:
            console.log('enter');
            break
    }
}

document.querySelector('div').onclick = 
    function(){
        console.log("div");
    }

document.querySelector('button').onclick = 
    function(e){
        e.stopPropagation();    //dung noi bot
        console.log('Click Me');
    }