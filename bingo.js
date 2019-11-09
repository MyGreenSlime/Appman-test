

var stdin = process.openStdin();
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function generateBoard(boardsize){
    var numbers = [...Array(boardsize[0]*boardsize[1]).keys()].map(value => {
        return value+1
    })
    var board = []
    for(var i = 0; i < boardsize[0]; i++){
        var tempRow = []
        for(var j = 0; j < boardsize[1]; j++){
            var numRandom = getRandomInt(numbers.length)
            tempRow.push(numbers[numRandom])

            var index = numbers.indexOf(numbers[numRandom]);
            if (index > -1) {
                numbers.splice(index, 1);
            }
        }
        board.push(tempRow)
    }
    return board
}
function checkBingo(input, board, boardsize){
    var checkRow  = function(input, board, boardsize){
        for(var i = 0;i < boardsize[0]; i++){
            var Bingo = true
            for(var j = 0; j < boardsize[1]; j++){
                if(!input.includes(board[i][j])){
                    Bingo = false
                    break;
                }
            } 
            if(Bingo == true){
                return Bingo
            }
        }
        return false
    }
    var checkColumn = function(input, board, boardsize){
        for(var i = 0;i < boardsize[0]; i++){
            var Bingo = true
            for(var j = 0; j < boardsize[1]; j++){
                if(!input.includes(board[j][i])){
                    Bingo = false
                    break;
                }
            } 
            if(Bingo == true){
                return Bingo
            }
        }
        return false
    }
    var checkDiagonal = function(input, board, boardsize){
        var function1  = function(input, board, boardsize){
            var Bingo1 = true
            for(var i = 0;i < boardsize[0]; i++){
                if(!input.includes(board[i][i])){
                    Bingo1 = false
                }
            }
            return Bingo1
        }
        
        var function2 = function(input, board, boardsize){
            var Bingo2 = true
            for(var i = 0;i < boardsize[0]; i++){
               
                if(!input.includes(board[i][boardsize[0]-1-i])){
                    Bingo2 = false
                    break;
                }
            }
            return Bingo2
        }
       
        
        return function1(input, board,boardsize) || function2(input, board, boardsize)
    }

    var RowBingo = checkRow(input, board, boardsize)
    var ColBingo = checkColumn(input, board, boardsize)
    var DiaBingo = checkDiagonal(input, board, boardsize)
    return RowBingo || ColBingo || DiaBingo
}
function BingoGame(input){
    var boardSize = [5,5]
    var board = generateBoard(boardSize)
    var output =  checkBingo(input, board, boardSize)
    if(output == true){
        console.log("Bingo")
    }else {
        console.log("Not Bingo")
    }
    console.log(board)
}
stdin.addListener("data", function(d) {
    var input  = d.toString().split(" ").map(value => {
        return parseInt(value)
    })
   BingoGame(input)
    
    return 0;
});