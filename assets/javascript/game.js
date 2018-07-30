// make my character variables
var saber = {
    healthPoints: ((Math.floor(Math.random() * 9)   )+ 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
}


var lancer = {
    healthPoints: ((Math.floor(Math.random() * 9) * 10)+ 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
}


var archer = {
    healthPoints: ((Math.floor(Math.random() * 9) * 10)+ 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
}

var character =[];

// call stats ie by lancer.healthPoints

//Add to the array?
character.push(saber, lancer, archer);

//later can reset by clearing the list and readding with .append()

// Create arrays for attackers and defenders

//object move to another object then .hide();

//transfer stas over 



//Reset stats with restart button
function reset() {
    saber = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10)+ 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    }

    lancer = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10)+ 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    }
    
    archer = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10)+ 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random()* 6)+ 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    }
}


function update(){
    //Update the character stats
    $("#saberHP").text(saber.healthPoints);
    $("#lancerHP").text(lancer.healthPoints);
    $("#archerHP").text(archer.healthPoints);
}

//Update them now
update();

//Transfer chosen character into attacker position



//Attack power multiplier
