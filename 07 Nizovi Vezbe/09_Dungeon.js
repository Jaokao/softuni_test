function dungeon(niz) {

    let rooms = niz[0].split("|");
    //console.log(rooms)

    let health = 100;
    let coins = 0;

    let theEnd = false;
    for (let i = 0; i < rooms.length; i++) {
        let razdvoji = rooms[i].split(" ")
        let tip = razdvoji[0];
        let broj = Number(razdvoji[1]);
        //console.log(tip+"-"+broj);


        switch(tip) {
            case `potion`:
                health += broj;
                if (health > 100) {
                    broj = 100 - health + broj;
                    health = 100;
                }
                console.log(`You healed for ${broj} hp.`)
                console.log(`Current health: ${health} hp.`)
                break;
            case `chest`:
                console.log(`You found ${broj} coins.`)
                coins += broj
                break;
            default:
                health -=broj;
                if (health > 0 ){
                console.log(`You slayed ${tip}.`);
            }
            else {
                theEnd = true;
                console.log(`You died! Killed by ${tip}.`);
                console.log(`Best room: ${i + 1}`);
            }
            break;
        }

        if (theEnd == true) 
            break;
    }
    if (!theEnd) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])