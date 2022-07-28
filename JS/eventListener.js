var btn = document.getElementById('btn');
//co the thuc hien nhieu event cung 1 hanh dong va co the go bo

btn.addEventListener('click', function(){
    console.log('Event 1');
})

function Viec2(){
    console.log('Event 2');
}

btn.addEventListener('click',Viec2);

//xoa bo event
setTimeout(function(){
    btn.removeEventListener('click',Viec2);
}, 3000);


//JSON 
//la mot dinh dang du lieu (chuoi)
//JSON = Javascript Object Notation
//JSON: Number, Boolen, Null, Array, Object
//Ma hoa (Endcode) vs Giai ma (Decode) = Strintify / Parse
var JSON1 = document.getElementById('Prase');
var JSON2 = document.getElementById('Stringify');


function prase(){
    var json = '{"name":"lam","age":108}';
    var chuoi = '"abc"';
    var Oject = JSON.parse(json);

    console.log(Oject)
    console.log(JSON.parse(chuoi));
}

function stringtify(){
    var mang = ['java"scrip','PHP'];
    console.log(JSON.stringify(mang));
}

JSON1.addEventListener('click',prase);
JSON2.addEventListener('click',stringtify);


//Promise

