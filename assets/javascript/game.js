// make my character variables
var saber = {
    healthPoints: ((Math.floor(Math.random() * 6) * 10)+ 100), //100,110,120,130,140,150;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    

    say: function() {
        console.log(this.healthPoints);
        console.log(this.attackPower);
        console.log(this.counterPower);
    }
    //HP increment by 10 from 100-150
}
saber.say();

var lancer = {
    healthPoints: ((Math.floor(Math.random() * 6) * 10)+ 100), //100,110,120,130,140,150;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
}

var archer = {
    healthPoints: ((Math.floor(Math.random() * 6) * 10)+ 100), //100,110,120,130,140,150;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
}


//Reset stats with restart button


//Attack power