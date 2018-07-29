// make my character variables
var saber = {
    healthPoints: (math.floor(Math.random() * 100) + 10),
    say: function() {
        console.log(this.healthPoints);
    }
    //HP increment by 10 from 100-150
}
saber.say();