


var oldColor = document.getElementsByClassName("cuadro")[0];
var hexText = document.getElementById("hex");
var copiedP = document.getElementById("copiedP");
var copied = document.getElementsByClassName("copied")[0];

let counter = 0;

function copyToClipBoard() {
    var content = document.getElementById('hex').innerHTML;
    console.log(content);

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

    copied.style.visibility = "visible";
    // Debe esconderse después de 1 segundos
    setTimeout(()=>copied.style.visibility = "hidden",1000);

}


function randomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}


function counterHit() {
    alert("You hit it 100 times!!!")
}

function changeHex(nuevo) {
    hexText.innerHTML = "";
    hexText.innerHTML = nuevo;
}

function changes() {

    var newColor = randomColor();
    var copiedColor = newColor.slice(1);
    console.log(newColor);

    

    copiedColor = parseInt(copiedColor,16) >> 2 // Esta parte altera el color principal. Habría que buscar una alteración más bella
    copiedColor = "#" + copiedColor.toString(16);

    console.log(copiedColor);
    
      
    while (newColor === oldColor.style.backgroundColor) {
        newColor = randomColor();
    }
    oldColor.style.backgroundColor = newColor;
    copiedP.style.color = copiedColor;

    changeHex(newColor);

    counter++;
    if (counter === 100) {
        counterHit();
    }
    
}