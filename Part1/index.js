console.log("we are live");

board = [];


function play(clickedId){
    
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === "X"){
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedId] = "X";
        // console.log(board)
    }
    else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedId] = "O";
    }

    var topLeft = board[0]
    var topMid = board[1]
    var topRight = board[2]
    var midLeft = board[3]
    var center = board[4]
    var midRight = board[5]
    var bottomLeft = board[6]
    var bottomMid = board[7] 
    var bottomRight = board[8]

console.log(board)

if (topRight !== undefined && topRight === topMid && topRight === topLeft){
    alert(topRight + " is the winner")};
if (midRight !== undefined && midRight === center && midRight === midLeft){
    alert(midRight + " is the winner")};
if (bottomRight !== undefined && bottomRight === bottomMid && bottomRight === bottomLeft){
    alert(bottomRight + " is the winner")};
if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft){
    alert(topLeft + " is the winner")};
if (topMid !== undefined && topMid === center && topMid === bottomMid){
    alert(topMid + " is the winner")};
if (topRight !== undefined && topRight === midRight && topRight === bottomRight){
    alert(topRight + " is the winner")};
if (bottomLeft !== undefined && bottomLeft === center && bottomLeft === topRight){
    alert(bottomLeft + " is the winner")};
if (bottomRight != undefined && bottomRight === center && bottomRight === topLeft){
    alert(bottomRight + " is the winner")}

let boardFull = true 
for (let i = 0; i < board.length; i++){
    
    if(boardFull[i] = undefined){
        boardFull = false
    } 
    if(boardFull = true){
        alert("CATs game")
    }
}

}

