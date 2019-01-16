
function fizzBuzz(){

    let j = document.getElementById("numberToCount").value;
    let wordBy3 = document.getElementById("dbyThree").value;
    let wordBy5 = document.getElementById("dbyFive").value;
    let br = document.createElement("br");

    for (let i = 1; i < +j + 1; i++){

        let br = document.createElement("br");
        let n = document.createTextNode(i);
        if (i % 3 == 0 && i % 5 == 0){
            let text1 = document.createTextNode(wordBy3 + wordBy5);
            document.getElementById("place").appendChild(text1);
            document.getElementById("place").appendChild(br);
        }
        else if (i % 3 == 0) {
            let text2 = document.createTextNode(wordBy3);
            document.getElementById("place").appendChild(text2);
            document.getElementById("place").appendChild(br);
        }
        else if (i % 5 == 0) {
            let text3 = document.createTextNode(wordBy5);
            document.getElementById("place").appendChild(text3);
            document.getElementById("place").appendChild(br);
        }
        else {
            document.getElementById("place").appendChild(n);
            document.getElementById("place").appendChild(br);
        }
    }
}
