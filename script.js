let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celTofar(){
    let result = (parseFloat(celsius.value)* 9/5)+32;
    fahrenheit.value = parseFloat(result.toFixed(2));
}

function farTocel(){
    let result = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat(result.toFixed(2));
    console.log(result);
}