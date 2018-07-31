// make my character variables
var saber = {
    healthPoints: ((Math.floor(Math.random() * 9)) + 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    profile: "saber.jpg"
}

var lancer = {
    healthPoints: ((Math.floor(Math.random() * 9) * 10) + 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    profile: "lancer.jpg"
}

var archer = {
    healthPoints: ((Math.floor(Math.random() * 9) * 10) + 100), //100,110... 180;
    attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
    counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
    profile: "archer.jpg"
}

var character = [];
var enemies = [];
var attacker = {};
var defender = {};
var attackerReady = false;
var defenderReady = false;


// call stats ie by lancer.healthPoints

//Add to the array?

//hide restart button
$("#restart").hide();


//later can reset by clearing the list and readding with .append()

// Create arrays for attackers and defenders

//object move to another object then .hide();

//transfer stats over
// $(function () { //shorthand for document.ready
    if (attackerReady === false) {
        $("#saber").on("click", function () {
            attacker = Object.assign(saber) // Set attacker stats
            console.log('saber selected')
            enemies.push(lancer, archer); //push remaining enemies onto 
            console.log('enemies are moved')
            $("#characterSelection").hide();
            $("#attacker").append(
                "<h3>Saber</h3>",
                "<img src=assets/images/" + attacker.profile + "><p class='saberHP'></p>"
            ); //creates attacker
            update();
            $("#restart").show();
            attackerReady = true; //Game is now
        });
        $("#lancer").on("click", function () {
            attacker = Object.assign(lancer)
            console.log('lancer selected')
            enemies.push(saber, archer);
            console.log('enemies are moved')
        });
        $("#archer").on("click", function () {
            attacker = Object.assign(archer)
            console.log('archer selected')
            enemies.push(saber, lancer);
            console.log('enemies are moved')
        });
        
    } else if(attackerReady === true) {
        $("#saber").on("click", function() {
            console.log("Can't click no more")
        })
    }

    
    



    $("#restart").click(function () { // Restart game button
        reset();
    });
// });




//Reset stats with restart button
function reset() {
    saber = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10) + 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
        profile: "saber.jpg"
    }

    lancer = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10) + 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
        profile: "lancer.jpg"
    }

    archer = {
        healthPoints: ((Math.floor(Math.random() * 9) * 10) + 100), //100,110... 180;
        attackPower: ((Math.floor(Math.random() * 6) + 5)),//5-10 attack power
        counterPower: ((Math.floor(Math.random() * 5) * 5) + 5), //counter attack power from 5-25 iterates from 5
        profile: "archer.jpg"
    }

    //Show character selection list
    $("#characterSelection").show();
    //Hide restart button
    $("#restart").hide();
    //clear attacker div
    $("#attacker").empty();
    attackerReady = false;
    attacker = {}
}


function update() {
    //Update the character stats
    $(".saberHP").text(saber.healthPoints);
    $(".lancerHP").text(lancer.healthPoints);
    $(".archerHP").text(archer.healthPoints);


}

//Update them now
update();

//Transfer chosen character into attacker position



//Attack power multiplier
