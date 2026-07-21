function monsterdrops(monsterid) { // what do you get for activating "defeat" verb on monster
		switch(monsterid) {
			case "skeleton":
					drop(20,"dust","Bone Dust");
					drop(20,"treasure","Ancient Coin");
				break;
			case "zombie":
					drop(20,"slime","Zombie Goo");
					drop(20,"treasure","Gold Coin");
				break;
			case "ghost":
					drop(20,"slime","Ectoplasm");
				break;
			case "bandit":
					drop(15,"treasure","Stolen Treasure");
					drop(20,"lockpick");
					break;
			case "goblin":
				drop(10,"junk","Goblin Trash");
				drop(10,"treasure","Goblin Treasure");
				break;
			case "boar":
				drop(20,"food","Boar Meat");
				break;
			case "spider":
				drop(20,"poison","Spider Venom");
				break;
			case "fairy":
				drop(20,"charm","Fairy Charm");
				drop(5,"treasure","Fairy Coin");
				break;
			case "caster":
				drop(20,"charm");
				drop(10,"treasure");
				// add chance of artifact drop
				break;
			case "spectre":
				drop(30,"magic","Residual Magic");
				drop(10,"slime","Spectral Sludge");
				drop(10,"dust","Spectral Dust");
				break;
			case "wolf":
				drop(30,"food","Wolf Steak");
				break;
			case "orc":
				drop(20,"weapon","Orcish Blade");
				drop(20,"booze","Orc Beer");
				break;
			case "golem":
				drop(20,"junk");
				drop(20,"junk");
				break;
		}
}

function drop(chance,item,label="existing") {
	if (item=="treasure" && !hasflag("forcetreasure")) { // force a one-time treasure drop, which should almost certainly kick in on the first level
		addflag("forcetreasure");
		chance=100;
	}
	if (roll(1,100)<=chance) {
		queuesound(cardsound(item),1);
		dealcard(item,"belowmouse",label);
	}
}
