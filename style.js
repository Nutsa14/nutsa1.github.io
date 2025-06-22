
let blocks = document.getElementsByClassName("block")[0];
console.log(blocks);

let ferisShecvla = () => {
blocks.style.background = 'blue'
   
}

let zomisGazrda = function(){
    blocks.style.width = "800px"
}


let gachena = () => {
    blocks.style.display = "block"
}

let gaqroba = () => {
    blocks.style.display = "none"
}


function gachenaGaqroba(){
    console.log(blocks.style.display)

    if (blocks.style.display == "block"){
        blocks.style.display = "none";
      
    }
    

    else{
            blocks.style.display = "block";
    }
   
}