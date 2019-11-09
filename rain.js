var stdin = process.openStdin();
stdin.addListener("data", function(d) {
    var input  = d.toString().split(" ").map(value => {
        return parseInt(value)
    })
    var totalRain = 0;
    var i,j
    for(i =0;i< input.length; i++){
        console.log("value i", i)
        var eye = input[i]
        if(input[i] <= 1 ){
            continue;
        }
        var roundRain = [] 
        console.log("eye",eye, i)
        for(j = i+1; j< input.length; j++){
            if(input[j] == 0){
                break;
            }
            if(input[j] == eye ){
                i = j;
                break;
            }
            if(eye < input[j]){
                i = j;
                break;
            }
            if(eye > input[j]){
                console.log("add",input[j])
                roundRain.push(input[j])
            }
        }
        console.log("last",input[i], i)
        roundRain.map(rain => {
            totalRain += eye-rain
        })
    }
    console.log(totalRain)
    return 0;
});