var stdin = process.openStdin();
function findMin(input1, input2){
    if(input1 > input2){
        return input2
    } else{
        return input1
    }
}

stdin.addListener("data", function(d) {
    var input  = d.toString().split(" ").map(value => {
        return parseInt(value)
    })
    let totalRain = 0;
    for(let i=0; i<input.length; i++){
        
        let currBlock = input[i]
        let max = 1
        if(currBlock <= 1){
            continue;
        }
        for(let j = i+1; j < input.length; j++){
            let block = input[j]
            if(block == 0){
                let tempCal = findMin(max, currBlock)
                for(let k = i+1; k<j; k++){
                    totalRain += tempCal - input[k]
                }
                i = j -1;
                break;
            }
            if(block >= max){
                max = block
            }
            if(max >= currBlock){
                let tempCal = findMin(max, currBlock)
                for(let k = i+1; k<j; k++){
                    totalRain += tempCal - input[k]
                }
                i = j -1;
                break;
            }
        }
    }
    console.log(totalRain)
    return 0;
});
