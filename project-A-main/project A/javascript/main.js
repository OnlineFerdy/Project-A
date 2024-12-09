let input = document.getElementById("input");
let texto = document.getElementById("text");

gigaNigger = function(){
    let execute1 = () => { // arrow function lekk 😎
        if (input.value == "" || input.value == undefined){
            input.value = "";
            return "input tidak benar awokaowkaowk";
        } 
        return `${input.value}`;            
    };
    (execute1)();
    texto.innerHTML = execute1();
    input.value = "";
    // alert("skibidi");
}

// const character = {
//     name = 
// }

// function niggerFunction(){

// }

// asa = () => "nigger";