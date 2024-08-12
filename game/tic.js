// var boxes = document.getElementsByClassName('box');
// console.log(boxes)

// boxes.addEventListener('click',()=>{
//     console.log(boxes[0].innerHTML)
// })

var boxes = document.querySelectorAll(".box");
// console.log(boxes);
var isFirstPerson =true;
var isGameFinished =false;
var gameArea =document.getElementById("gameArea");
var resultDiv = document.getElementById("resultDiv");
var restartBtn =document.getElementById("restartbtn");
restartBtn.style.display='none';



var horData=[
    [0,1,2], //00 01 02
    [3,4,5], //10 11 12
    [6,7,8], //20 21 22
];
var verData =[
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


function checkHorizontal(){
    for (i =0; i<horData.length; i++){
        let checkArray =[    
            boxes[horData[i][0]].innerHTML,
            boxes[horData[i][1]].innerHTML,
            boxes[horData[i][2]].innerHTML,
        ];
        console.log("checkArray",checkArray)
        let uniqueArray = [...new Set(checkArray)];  //means adding
        console.log("UniqueArray",uniqueArray)
        let UniqueArrayLength =uniqueArray.length;
        console.log("Unique array length", UniqueArrayLength);
        if (UniqueArrayLength == 1 &&  !uniqueArray.includes("")){
            console.log("winner is ",isFirstPerson ? "player 1" : "player 2")
            isGameFinished =!isGameFinished
        } 
        } 
    }

function checkVert(){
    for (i =0; i<verData.length; i++){
        let checkArray =[    
            boxes[verData[i][0]].innerHTML,
            boxes[verData[i][1]].innerHTML,
            boxes[verData[i][2]].innerHTML,
        ];
        console.log("checkArray",checkArray)
        let uniqueArray = [...new Set(checkArray)];  //means adding
        console.log("UniqueArray",uniqueArray)
        let UniqueArrayLength =uniqueArray.length;
        console.log("Unique array length", UniqueArrayLength);
        if (UniqueArrayLength === 1 &&  !uniqueArray.includes("")){
            console.log("winner is ",isFirstPerson ? "player 1" : "player 2")
            isGameFinished =!isGameFinished
        } 
    }
}

function checkDiagonal(){
    var checkArrayA = [boxes[0].innerHTML,boxes[4].innerHTML,boxes[8].innerHTML];
    var checkArrayB = [boxes[2].innerHTML,boxes[4].innerHTML,boxes[6].innerHTML];

    let UniqueArrayDA =[...new Set(checkArrayA)];
    let UniqueArrayDALength = UniqueArrayDA.length;
    let UniqueArrayDB =[...new Set(checkArrayB)]
    let UniqueArrayDBLength = UniqueArrayDB.length;

    if (UniqueArrayDALength == 1 && !UniqueArrayDA.includes('')){
        console.log("winner is ",isFirstPerson ? "player 1" : "player 2");
        isGameFinished =!isGameFinished;
    }
    if (UniqueArrayDBLength == 1 && !UniqueArrayDB.includes('')){
        console.log("winner is ",isFirstPerson ? "player 1" : "player 2");
        isGameFinished =!isGameFinished;
    }

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if (box.innerHTML == '' || box.innerHTML==null){
            box.innerHTML =isFirstPerson ? 'O':"X";
            checkForWinner();
            if(isGameFinished){
                gameArea.style.display ='none';
                resultDiv.style.display ='';
               
                resultDiv.innerHTML= " The winnwe is " + (isFirstPerson ? "Player 1" : "player 2");
                restartBtn.style.display ="block";
            }else{
                if (isGametie()){
                    gameArea.style.display = "none";
                    resultDiv.style.display =''; 
                    resultDiv.innerHTML =" The game is tie";
                    restartBtn.style.display ="block";
                }else{
                    isFirstPerson = !isFirstPerson;
                }
            }
          
        }
    });
});
function isGametie(){
    let sampleBoxData =[];
    boxes.forEach((box)=>{
        sampleBoxData.push(box.innerHTML);
    });
    if (sampleBoxData.includes("")){
        return false;
    }else {
        isGameFinished =true;
        return true;
    }
}

restartBtn.addEventListener("click",()=>{
    gameArea.style.display ='grid';
    boxes.forEach((box)=>{
        box.innerHTML = "";
    });
    resultDiv.style.display = "none";
    restartBtn.style.display ="none";
    isFirstPerson =true;
    isGameFinished =false;
})


function checkForWinner(){
    checkHorizontal();
    checkVert();
    checkDiagonal();    

}
;
