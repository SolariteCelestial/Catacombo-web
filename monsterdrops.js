function monsterdrops(monsterid) { // what do you get for activating "defeat" verb on monster
		switch(monsterid) {
			case "skeleton":
					drop(30,"dust","Bone Dust");
				break;
			case "zombie":
					drop(30,"slime","Zombie Goo")
				break;
			case "ghost":
					
				break;
		}
}

function drop(chance,item,label="existing") {
	if (roll(1,100)<=chance) {
		dealcard(item,"belowmouse",label);
	}
}

function monsterdamage(monsterid) { // what does the monster do when time passes
	
}

function whack(type) {
}