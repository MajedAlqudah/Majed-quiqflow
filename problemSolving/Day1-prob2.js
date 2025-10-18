function pingPongTracker(){
    let time = 0

    return{
        timeSpentPlaying : function(){
            return time
        },
        playOneGame : function (){
            time += 15
            return "Game played"
        },
        myLevel() {
            if(time < 30){
                return " I need improvment"
            }
            else if (time > 100){
                return "wow, I wwasted alot of time"
            }
            return "you need to improve your game"
        }
    }
}

var myGame = pingPongTracker();
console.log(myGame.playOneGame());
console.log(myGame.playOneGame());
console.log(myGame.timeSpentPlaying());    
console.log(myGame.myLevel());
           