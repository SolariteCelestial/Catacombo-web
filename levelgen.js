
function levelgen(leveltype) {
	cards=Array();

	// DEBUG STUFF

	dungeon={};

	switch(leveltype) {
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CEMETERY

		case "graves":
			setcurrentmessage("Your hair stands on end as your feet stand on the unhallowed ground of the spooky, spooky cemetery.",600,500);
			dungeoncardposition=150;
			monsters=Array("skeleton","zombie","ghost");
			
			maus=deal("door");
			cards[maus].label="Mausoleum";
			cards[maus].icon="temple-gate";
			cards[maus].contents=1; // branch 1
			dungeon["branch1"]=Array();
			dungeon["branch1"].push(makecard("skeleton"));
			dungeon["branch1"].push(makecard("skeleton"));
			if (!hasflag("dirtbag")) dungeon["branch1"].push(makecard("cage_dirtbag")); // dirtbag is in this mausoleum if we don't already have him
			
			deal(pickone(monsters));
			deal("gravestone");
			cards.push(makecontainer(pickone(Array("coffin","gravediggerlunch"))));
			
			gate=deal("door");
			cards[gate].label="Cemetery Gate";
			cards[gate].icon="open-gate";
			cards[gate].contents=2; // branch 2
			dungeon["branch2"]=Array();
			dungeon["branch2"].push(makecard(pickone(Array("skeleton","zombie","ghost"))));
			dungeon["branch2"].push(makecontainer(pickone(Array("coffin","gravediggerlunch"))));
			dungeon["branch2"].push(makecard(pickone(Array("gravestone","zombiearm"))));

			organizedungeon();

			exo=deal("exit",950,100);
			cards[exo].icon="gate";

			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- WOODS

		case "woods":
			setcurrentmessage("These woods aren't that far from town, but like they say, most brutal maulings happen within a couple of miles of home.");
			// "log" container "forest-camp" abandoned tent
			// spider, fairy, boar enemies
			// web, 
			monsters=Array("spider","boar","fairy");
			dungeoncardposition=100;
			deal(pickone(monsters));
			var numthings=roll(3,4);
			for(var i=0;i<numthings;i++) {
				thing=roll(1,3);
				switch(thing) {
					case 1: deal("tree"); break;
					case 2: deal("mushrooms"); break;
					case 3: cards.push(makecontainer(pickone(Array("hollowlog","tent"))));
				}
			}

			maus=deal("web");
			cards[maus].label="Web-Choked Path";
			cards[maus].contents=1; // branch 1

			dungeon["branch1"]=Array();
			dungeon["branch1"].push(makecard("spider"));
			dungeon["branch1"].push(makecard(pickone(Array("mushrooms","tree"))));
			dungeon["branch1"].push(makecard("treasure"));


			if (!hasflag("village")) {
				maus=deal("web");
				cards[maus].label="Web-Choked Path";
				cards[maus].contents=2; // branch 2
				dungeon["branch2"]=Array();
				dungeon["branch2"].push(makecard("spider"));
				dungeon["branch2"].push(makecard("spider"));
				dungeon["branch2"].push(makecard("tree_village"));
			}

			organizedungeon();

			exo=deal("exit",50,100);
			cards[exo].icon="forest-entrance";
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- VILLAGE

		case "village":
			setcurrentmessage("The village is eerie, desolate.  There would be tumbleweeds, if we were anywhere near a desert.");
			
			monsters=Array("goblin","bandit","ghost");
			
			deal(pickone(monsters));
			
			// tavern
			dungeon["branch1"]=Array(makecard(pickone(Array("bandit","goblin"))));
			if (roll(1,2)==1) dungeon["branch1"].push(makecard(pickone(Array("bandit","goblin"))));
			dungeon["branch1"].push(makecard("booze"));
			dungeon["branch1"].push(makecard(pickone(Array("treasure","junk"))));

			// grocery
			var mon=pickone(Array("goblin","ghost"));
			dungeon["branch2"]=Array(makecard(mon),makecard(mon));
			
			dungeon["branch2"].push(makecard(pickone(Array("food"))));
			dungeon["branch2"].push(makecard(pickone(Array("food","treasure"))));
			
			//smithy
			dungeon["branch3"]=Array(makecard(pickone(Array("bandit","ghost"))));
			dungeon["branch3"].push(makecard(pickone(Array("tool","weapon"))));
			dungeon["branch3"].push(makecard(pickone(Array("tool","weapon"))));

			// rando 1, just ghosts
			dungeon["branch4"]=Array(makecard("ghost"),makecard("ghost"),makecard("ghost"));
			
			// rando2, just treasure
			dungeon["branch5"]=Array(makecard("treasure"),makecard("treasure"),makecard("treasure"));

			// rando3, extremely random
			var eno=pickone(Array("goblin","ghost","bandit"));
			dungeon["branch6"]=Array(makecard(eno),makecard(eno));
			//dungeon["branch6"].push(dungeon["branch6"][0]); // another copy
			dungeon["branch6"].push(makecard(pickone(Array("tool","weapon","lockpick","junk","treasure"))));
			
			// church, always there
			dungeon["branch7"]=Array(makecard("ghost"));
			dungeon["branch7"].push(makecard(pickone(Array("junk","treasure"))));
			dungeon["branch7"].push(makecard(pickone(Array("junk","treasure"))));
			var font=makecard("well");
			font.icon="water-fountain";
			font.label="Holy Font";
			dungeon["branch7"].push(font);
			if (!hasflag("church")) dungeon["branch7"].push(makecard("cage_priest"));
			
			church=deal("door");
			cards[church].icon="church";
			cards[church].label="Eerie Church";
			cards[church].contents=7;
			
			var buildings=shuffle(Array(1,2,3,4,5,6)); // pick four of the six buildings
			for(var i=1;i<5;i++) {
					switch(buildings[i]) {
							case 1:
								bldg=deal("door");
								cards[bldg].icon="saloon";
								cards[bldg].label="Abandoned Tavern";
								cards[bldg].contents=1;
								break;
							case 2:
								bldg=deal("door");
								cards[bldg].icon="shop";
								cards[bldg].label="Deserted Grocery Store";
								cards[bldg].contents=2;
								break;
							case 3:
								bldg=deal("door");
								cards[bldg].icon="anvil-impact";
								cards[bldg].label="Ruined Blacksmith's Shop";
								cards[bldg].contents=3;
								break;
							case 4:
								bldg=deal("door");
								cards[bldg].icon=pickone(Array("family-house","house","damaged-house","spooky-house"));
								cards[bldg].label="Empty Building";
								cards[bldg].contents=4;
								break;
							case 5:
								bldg=deal("door");
								cards[bldg].icon=pickone(Array("family-house","house","damaged-house","spooky-house"));
								cards[bldg].label="Empty Building";
								cards[bldg].contents=5;
								break;
							case 6:
								bldg=deal("door");
								cards[bldg].icon=pickone(Array("family-house","house","damaged-house","spooky-house"));
								cards[bldg].label="Empty Building";
								cards[bldg].contents=6;
								break;
								
								
					}
			}
			
			organizedungeon();

			exo=deal("exit",1050,100);
			cards[exo].icon="horizon-road";
			break;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CAVE
		case "cave":
			setcurrentmessage("It's time to see how deep this rabbit hole goes, and if there are actually rabbits in it or if it's more of a monster hole.");
			
			deal(pickone(Array("spider","goblin","bandit")));
			
			further=makecard("approach","cave-entrance","Deeper Tunnel",1);
			further2=makecard("approach","cave-entrance","Even Deeper Tunnel",2);
			further3=makecard("darkness","cave-entrance","Dark Tunnel",3);
			further4=makecard("darkness","cave-entrance","Pitch-Dark Tunnel",4);
			
			cards.push(further);
			
			dungeon["branch5"]=Array(makecard("goblin"),makecard("goblin"),makecard("junk"));
			dungeon["branch6"]=Array(makecard("bandit"),makecard("bandit"),makecard("weapon"));
			
			goblincamp=makecard("approach","goblin-camp","Goblin Hideout",5);
			banditcamp=makecard("approach","desert-camp","Bandit Hideout",6);
									
			dungeon["branch1"]=Array(further2);
			dungeon["branch1"].push(makecard(pickone(Array("spider","goblin","bandit"))));
			dungeon["branch1"].push(makecard(pickone(Array("mushrooms","web"))));
			
			dungeon["branch2"]=Array(further3);
			dungeon["branch2"].push(makecard(pickone(Array("spider","goblin","bandit"))));
			dungeon["branch2"].push(pickone(Array(goblincamp,banditcamp)));
			
			dungeon["branch3"]=Array(further4);
			dungeon["branch3"].push(makecard(pickone(Array("spider","goblin","bandit"))));
			dungeon["branch3"].push(makecard("well","waterfall","Underground Waterfall"));
						
			finalchest=makecard("container","open-treasure-chest","Chest of Riches");
			finalchest.contents="treasure";
			finalchest.contents2="treasure";
			
			dungeon["branch4"]=Array(finalchest);
			
			
			organizedungeon();
			
			exo=deal("exit",150,100);
			cards[exo].icon="underground-cave"
			break;	

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- BARROW
	case "barrow":
		setcurrentmessage("You enter the burial tunnels beneath the standing stones and become hopelessly lost.");
		
		stuff=Array();
		stuff.push(makecard("caster","existing","Druid"));
		stuff.push(makecard("caster","existing","Druid"));
		stuff.push(makecard("ghost","existing","Druid Ghost"));
		stuff.push(makecard("ghost","existing","Druid Ghost"));
		stuff.push(makecard("spectre"));
		stuff.push(makecard("spectre"));
		stuff.push(makecard("treasure"));
		stuff.push(makecard("gravestone","stone-pile","Ancient Grave"));
		stuff.push(makecard("gravestone","stone-pile","Ancient Grave"));
		stuff.push(makecard("gravestone","stone-pile","Ancient Grave"));
		stuff.push(makecard("gravestone","stone-stack","Ancient Grave"));
		stuff.push(makecard("gravestone","stone-stack","Ancient Grave"));
		stuff.push(makecard("junk"));
		stuff.push(makecard("junk"));
		stuff.push(makecard("weapon"));
		stuff.push(makecard("weapon"));
		stuff=shuffle(stuff);

		// exit is hidden in one of the two same-named tunnels				
		exo=makecard("exit","dolmen","Exit");
		tunnel1=makecard("approach","cave-entrance","Barrow Tunnel",1);
		tunnel2=makecard("approach","cave-entrance","Barrow Tunnel",2);
		tunnel3=makecard("approach","cave-entrance","Damp Barrow Tunnel",3);
		tunnel4=makecard("darkness","cave-entrance","Dark Barrow Tunnel",4);
		
		cards.push(tunnel1,tunnel2,tunnel3,tunnel4);
		
		dungeon["branch1"]=Array(exo,stuff[0],stuff[1],stuff[2]);
		dungeon["branch2"]=Array(makecard("treasure"),stuff[3],stuff[4],stuff[5]);
		dungeon["branch3"]=Array(stuff[6],stuff[7],stuff[8]);
		dungeon["branch4"]=Array(makecard("treasure"),makecard("treasure"),stuff[9],stuff[10],stuff[11]);
		if (roll(1,2)==1) dungeon["branch1"].push(stuff[12]);
		if (roll(1,2)==1) dungeon["branch2"].push(stuff[13]);
		if (roll(1,2)==1) dungeon["branch3"].push(stuff[14]);
		
		cards.push(makecard("caster","existing","Druid"));
		
		organizedungeon();
		break;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------this one time, at BANDITCAMP
		case "banditcamp":
			setcurrentmessage("You approach the bandit camp, but apparently not as sneakily as you thought, because two guards immediately notice you and reach for their weapons.");
			dungeon["branch1"]=Array(makecard("goblin"),makecard("goblin")); // cage 1
			dungeon["branch2"]=Array(makecard("wolf")); // cage 2
			dungeon["branch3"]=Array(makecard("bandit"),makecard("bandit")); // cage 3
			dungeon["branch4"]=Array(makecard("skeleton"),makecard("junk")); // cage 4
			dungeon["branch5"]=Array(makecard("junk"),makecard("junk")); // cage 5
			
			cage1=makecard("door_locked","cage","Locked Cage",1);
			cage2=makecard("door_locked","cage","Locked Cage",2);
			cage3=makecard("door_locked","cage","Locked Cage",3);
			cage4=makecard("door_locked","cage","Locked Cage",4);
			cage5=makecard("door_locked","cage","Locked Cage",5);
			if (roll(1,2)==1) cards.push(cage1);
			if (roll(1,2)==1) cards.push(cage2);
			if (roll(1,2)==1) cards.push(cage3);
			if (roll(1,2)==1) cards.push(cage4);
			if (roll(1,2)==1) cards.push(cage5);
			
			finalchest=makecard("container","open-treasure-chest","Chest of Stolen Gold");
			finalchest.contents="treasure";
			finalchest.contents2="treasure";
			finalchest.contents3="treasure";
			chief=makecard("bandit","dwarf-face","Bandit Chief");
			dungeon["branch6"]=Array(chief,makecard(pickone(Array("bandit","wolf"))),makecard(pickone(Array("bandit","wolf"))),finalchest) // chief's house
			
			cards.push(makecard("door","wood-cabin","Bandit Chief's Cabin",6));

			// guards who are always there
			cards.push(makecard("bandit"));
			cards.push(makecard("bandit"));
			cards.push(makecard(pickone(Array("junk","booze","weapon","lockpick"))));
			cards.push(makecard(pickone(Array("junk","booze","weapon","lockpick"))));

			organizedungeon();

			exo=deal("exit",1050,100);
			cards[exo].icon="horizon-road";
			
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- DARK FOREST

		case "darkforest":
			setcurrentmessage("Boy, whoever named this the Dark Forest really wasn't whistling Dixie.  In fact, you're not even sure you know which direction Dixie is from here.");
			clearings=shuffle(Array(1,2,3,4,5,6,7,8,9,10));
			
			dungeon["branch1"]=Array(darkforestthing(),makecard("skeleton"),makecard("skeleton"),makecard("caster","existing","Necromancer"));
			dungeon["branch2"]=Array(darkforestthing(),darkforestthing(),darkforestthing(),makecard("treasure"));
			dungeon["branch3"]=Array(makecard("torch"),makecard("junk"),makecard("tool"));
			dungeon["branch4"]=Array(makecard("statue","dolmen","Ancient Standing Stone"));
			dungeon["branch5"]=Array(makecard("wolf"),makecard("wolf"));
			dungeon["branch6"]=Array(makecard("spider"),makecard("web"),makecard("web"));
			dungeon["branch7"]=Array(darkforestthing(),makecard("torch"));
			dungeon["branch8"]=Array(darkforestthing(),darkforestthing(),makecard("goblin","existing","Lost Goblin"));
			dungeon["branch9"]=Array(darkforestthing(),darkforestthing(),makecard("treasure"),makecard("junk"));
			dungeon["branch10"]=Array(makecard("bandit"),makecard("bandit"),makecard("booze"),makecard("torch"));
			
			cards.push(darkforestthing());
			cards.push(darkforestthing());
			cards.push(darkforestthing());
			
			exo=makecard("exit");
			exo.icon="horizon-road";
			dungeon["branch"+clearings[0]].push(exo);
			
			finalchest=makecard("container","open-treasure-chest","Half-Buried Treasure Chest");
			finalchest.contents="treasure";
			finalchest.contents2="treasure";
			finalchest.contents3="treasure";	
			dungeon["branch"+clearings[1]].push(finalchest);						
			
			passage1=makecard("darkness","forest-entrance",darkforestpathname(),clearings[0]);
			passage2=makecard("darkness","forest-entrance",darkforestpathname(),clearings[1]);
			passage3=makecard("darkness","forest-entrance",darkforestpathname(),clearings[2]);
			passage4=makecard("darkness","forest-entrance",darkforestpathname(),clearings[3]);
			// four is enough here
			//passage5=makecard("darkness","forest-entrance",darkforestpathname(),clearings[4]);
			//passage6=makecard("darkness","forest-entrance",darkforestpathname(),clearings[5]);
			
			cards.push(passage1,passage2,passage3,passage4)
			
			organizedungeon();
					
			break;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- MAUSOLEUM (Hell, it nearly killed 'em)

		case "mausoleum":
			setcurrentmessage("I guess it stands to reason that this place would be a prime spot for necromantic crimes, but it's still disappointing.");
			
			necromancer1=makecard("caster","robe","Crafty Necromancer");
			necromancer2=makecard("caster","robe","Necromancer");
			necromancer3=makecard("caster","robe","Cunning Necromancer");
			necromancer4=makecard("caster","robe","Necromancer");
			necromancer5=makecard("caster","robe","Evil Necromancer");
			necromancer6=makecard("caster","robe","Necromancer");
			necromancer7=makecard("caster","robe","Necromancer");
			
			door1=makecard("approach","dungeon-gate","Passageway",1);
			door2=makecard("approach","dungeon-gate","Passageway",2);
			door3=makecard("approach","dungeon-gate","Passageway",3);
			door4=makecard("traphall","dungeon-gate","Trapped Passageway",4);
			door5=makecard("approach","dungeon-gate","Passageway",5);
			door6=makecard("traphall","dungeon-gate","Trapped Passageway",6);
			
			cards.push(door1,necromancer1,door2,makecard("torch"));
			
			finalchest1=makecard("container","open-treasure-chest","Treasure Chest");
			finalchest1.contents="treasure";
			finalchest1.contents2="treasure";
			
			finalchest2=makecard("container_locked","locked-chest","Locked Treasure Chest");
			finalchest2.contents="treasure";
			finalchest2.contents2="treasure";
			finalchest2.contents3="treasure";
			
			
			dungeon["branch1"]=Array(door3,door4,necromancer2,tombthing(),tombthing());
			dungeon["branch2"]=Array(door5,door6,necromancer3,tombthing(),tombthing());
			dungeon["branch3"]=Array(necromancer4,tombthing(),tombthing(),tombthing());
			dungeon["branch4"]=Array(necromancer5,tombthing(),tombthing(),tombthing(),finalchest1);
			dungeon["branch5"]=Array(necromancer6,tombthing(),tombthing(),tombthing());
			dungeon["branch6"]=Array(necromancer7,tombthing(),tombthing(),tombthing(),finalchest2);
			
			organizedungeon();
			
			exo=deal("exit",50,50);
			cards[exo].icon="dungeon-gate";
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- CATACOMB

		case "catacomb":
			setcurrentmessage("The ground collapses under you and you wind up somewhere deep underground.  You're gonna have to find a way out, if you don't want to become another one of the tens of thousands of skulls in here.");
			
			exo=makecard("exit","dungeon-gate");
			
			door1=makecard("approach","crypt-entrance","Catacomb Tunnel",1);
			door2=makecard("darkness","crypt-entrance","Pitch-Black Tunnel",2);
			door3=makecard("approach","crypt-entrance","Catacomb Tunnel",3);
			door4=makecard("traphall","crypt-entrance","Trapped Passageway",4);
			door5=makecard("approach","crypt-entrance","Catacomb Tunnel",5);
			
			cards.push(door1);
			cards.push(catacombthing(),catacombthing());
			
			dungeon["branch1"]=Array(door2,catacombthing(),catacombthing(),catacombthing(),catacombthing());
			dungeon["branch2"]=Array(door3,catacombthing(),catacombthing());
			dungeon["branch3"]=Array(door4,catacombthing(),catacombthing(),catacombthing());
			dungeon["branch4"]=Array(door5,catacombthing(),catacombthing());
			dungeon["branch5"]=Array(exo,catacombthing(),catacombthing());

			organizedungeon();

			break;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- DUNGEON
		case "dungeon":
			
			dungeon["branch1"]=Array(makecard("goblin"),makecard("junk")); // cell 1
			dungeon["branch2"]=Array(makecard("skeleton"),makecard("weapon")); // cell 2
			dungeon["branch3"]=Array(makecard("ghost"),makecard("poison")); // cell 3
			dungeon["branch4"]=Array(makecard("bandit"),makecard("lockpick")); // cell 4
			dungeon["branch5"]=Array(makecard("spider"),makecard("web")); // cell 5
			dungeon["branch6"]=Array(makecard("orc"),makecard("weapon")); // cell 6
			dungeon["branch7"]=Array(makecard("orc"),makecard("junk")); // cell 7
			dungeon["branch8"]=Array(makecard("orc"),makecard("booze")); // cell 8
			dungeon["branch9"]=Array(makecard("goblin"),makecard("food")); // cell 9
			dungeon["branch10"]=Array(makecard("junk"),makecard("weapon")); // cell 10
			dungeon["branch11"]=Array(makecard("junk"),makecard("junk")); // cell 11
			dungeon["branch12"]=Array(makecard("orc"),makecard("poison")); // cell 12
			
			for(var x=1;x<12;x++) {
				if (roll(1,2)==1) dungeon["branch"+x].push(makecard("treasure"));
			}
			
			cellarray=shuffle(Array(1,2,3,4,5,6,7,8,9,10,11,12));
			
			// doors that point to various random cells
			guard1=makecard(pickone(Array("bandit","goblin","ghost")));
			guard2=makecard(pickone(Array("bandit","goblin","ghost")));
			guard3=makecard(pickone(Array("bandit","goblin","ghost")));
			guard4=makecard(pickone(Array("bandit","goblin","ghost")));
			guard5=makecard(pickone(Array("bandit","goblin","ghost")));
			
			door1=makecard("door_locked","steel-door","Locked Cell",cellarray[0]);
			door2=makecard("door_locked","steel-door","Locked Cell",cellarray[1]);
			door3=makecard("door_locked","steel-door","Locked Cell",cellarray[2]);
			door4=makecard("door_locked","steel-door","Locked Cell",cellarray[3]);
			door5=makecard("door_locked","steel-door","Locked Cell",cellarray[4]);
			door6=makecard("door_locked","steel-door","Locked Cell",cellarray[5]);
			
			guarddoor=makecard("door","wooden-door","Guard Room Door",15);					
			stairs1=makecard("approach","3d-stairs","Stairs Down",13);
			stairs2=makecard("approach","3d-stairs","Stairs Further Down",14);
			
			cards.push(stairs1,guard1,door1,door2,guarddoor);
			dungeon["branch13"]=Array(stairs2,guard2,door3,door4); // second floor
			dungeon["branch14"]=Array(guard3,door5,door6); // third floor
			dungeon["branch15"]=Array(makecard("lockpick"),makecard("lockpick"),makecard("lockpick"),guard4,guard5); // guard room
			
			organizedungeon();
			
			exo=deal("exit",150,100);
			cards[exo].icon="3d-stairs";
			
			break;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- BATTLEFIELD (love is one)

		case "battlefield":
			setcurrentmessage("You find yourself on a battlefield of the ancient Orc-Wizard war, on which Orc-Wizard War II appears to have broken out.");
			organizedungeon();
			
			if (!hasflag("soldier")) {
				hilla=makecard("approach","castle-ruins","Hill 37",1);
				cards.push(hilla);
			}
			cards.push(makecard("weapon"))
			cards.push(makecard("junk"))
			dungeon["branch1"]=Array(makecard("junk"),makecard("weapon"),makecard("rescue_soldier")); // add soldier instead of that junk
			dungeon["branch2"]=battlefieldhill();
			dungeon["branch3"]=battlefieldhill();
			dungeon["branch4"]=battlefieldhill();
			hillb=makecard("approach","castle-ruins","Hill "+roll(38,999),2);
			hillc=makecard("approach","castle-ruins","Hill "+roll(38,999),3);
			hilld=makecard("approach","castle-ruins","Hill "+roll(38,999),4);
			cards.push(hillb,hillc,hilld);
			
			organizedungeon();
			exo=deal("exit",1050,100);
			cards[exo].icon="horizon-road";
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- TAINTED FOREST

		case "taintedforest":
			setcurrentmessage("This is by far the worst forest you've ever been lost in.");
			exo=makecard("exit","forest-entrance");
		
			dungeon["branch1"]=taintedbranch();
			dungeon["branch1"].push(exo);
			
			bell=makecard("bell");
			bell.contents=1;
			
			dungeon["branch2"]=taintedbranch();
			if (!hasflag("bell1")) dungeon["branch2"].push(bell);
			
			dungeon["branch3"]=taintedbranch();
			dungeon["branch4"]=taintedbranch();
			dungeon["branch5"]=taintedbranch();
			dungeon["branch6"]=taintedbranch();
		
			passage1=makecard("darkness","forest-entrance",taintedadj()+" Path",1);
			passage2=makecard("darkness","forest-entrance",taintedadj()+" Path",2);
			passage3=makecard("darkness","forest-entrance",taintedadj()+" Path",3);
			passage4=makecard("darkness","forest-entrance",taintedadj()+" Path",4);
			passage5=makecard("darkness","forest-entrance",taintedadj()+" Path",5);
			passage6=makecard("darkness","forest-entrance",taintedadj()+" Path",6);
			
			cards.push(passage1,passage2,passage3,passage4,passage5,passage6);
			
			organizedungeon();
			
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ORC FORTRESS

		case "orcfortress":
			setcurrentmessage("Wow, these orcs apparently just throw their garbage over the fence and make it everybody else's problem.");
			
			for (var i=0;i<roll(4,6);i++) cards.push(makecard("junk"));
			cards.push(makecard("orc","existing","Orc Guard"));
			
			cards.push(makecard("door","gate","Front Door",1));
			
			
			messhall=makecard("door","wood-cabin","Mess Hall",2);
			barracks=makecard("door","wood-cabin","Barracks",4);
			treasury=makecard("door_locked","temple-gate","Treasury",3);
			chief=makecard("door","wood-cabin","Chief's Office",5);

			dungeon["branch1"]=Array(makecard("orc"),makecard("orc"),messhall,barracks,treasury,chief); // fortress interior
			
			dungeon["branch2"]=[]; // mess hall
			for (var i=0;i<roll(4,6);i++) dungeon["branch2"].push(orcmesshallthing());
			
			dungeon["branch3"]=[makecard("treasure")]; // treasury has at least one treasure in it
			for (var i=0;i<roll(4,6);i++) dungeon["branch3"].push(orctreasurything());
			
			dungeon["branch4"]=[]; // barracks
			for (var i=0;i<roll(2,3);i++) dungeon["branch4"].push(makecard("orc","existing","Off-Duty Orc"));
			for (var i=0;i<roll(2,3);i++) dungeon["branch4"].push(makecard("weapon"));

			dungeon["branch5"]=[]; // chief hall
			if (!hasflag("scoundrel")) dungeon["branch5"].push(makecard("cage_scoundrel"));
			dungeon["branch5"].push(makecard("orc","existing","Orc Chief"));
			dungeon["branch5"].push(makecard("orc","existing","Orc Lieutenant"));
			dungeon["branch5"].push(makecard("orc","existing","Orc Lieutenant"));

			organizedungeon();
			
			exo=deal("exit",1050,100);
			cards[exo].icon="horizon-road";
			break;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- NECROPOLIS

		case "necropolis":
			setcurrentmessage("Wow, this place is a labyrinth, except instead of a single minotaur, it has a thousand corpses, graves and necromancers.");
			
			bell=makecard("bell");
			bell.contents=2;
			
			door1=makecard("traphall","arc-triomphe","Trapped "+necropolisstreet(),1);
			door2=makecard("traphall","arc-triomphe","Hazardous "+necropolisstreet(),5);
			door3=makecard("darkness","arc-triomphe","Shadowed "+necropolisstreet(),9);
			
			door4=makecard("darkness","arc-triomphe","Darkened "+necropolisstreet(),2);
			door5=makecard("traphall","arc-triomphe","Hazardous "+necropolisstreet(),3);
			door6=makecard("darkness","arc-triomphe","Shadowy "+necropolisstreet(),4);
			
			door7=makecard("traphall","arc-triomphe","Trapped "+necropolisstreet(),6);
			door8=makecard("traphall","arc-triomphe","Hazardous "+necropolisstreet(),7);
			door9=makecard("traphall","arc-triomphe","Treacherous "+necropolisstreet(),8);

			door10=makecard("darkness","arc-triomphe","Dark "+necropolisstreet(),10);
			door11=makecard("darkness","arc-triomphe","Shadowy "+necropolisstreet(),11);
			door12=makecard("darkness","arc-triomphe","Pitch-Black "+necropolisstreet(),12);

			cards.push(door1,door2,door3);
			
			dungeon["branch1"]=necropolisarea();
			dungeon["branch1"].push(door4,door5,door6);
			
			dungeon["branch5"]=necropolisarea();
			dungeon["branch5"].push(door7,door8,door9);

			dungeon["branch9"]=necropolisarea();
			dungeon["branch9"].push(door10,door11,door12);

			dungeon["branch2"]=necropolisarea();
			dungeon["branch3"]=necropolisarea();
			dungeon["branch4"]=necropolisarea();
			dungeon["branch6"]=necropolisarea();
			dungeon["branch7"]=necropolisarea();
			dungeon["branch8"]=necropolisarea();
			dungeon["branch10"]=necropolisarea();
			dungeon["branch11"]=necropolisarea();
			dungeon["branch12"]=necropolisarea();

			dungeon["branch7"].push(bell);

			organizedungeon();
			exo=deal("exit",150,100);
			cards[exo].icon="gate";
		
			break;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- DARK CITADEL
		case "darkcitadel":
			dungeon["branch1"]=[makecard("darklord")];
			
			s1=makecard("statue","obelisk","Dark Obelisk")
			s2=makecard("statue","obelisk","Dark Obelisk")
			s3=makecard("statue","obelisk","Dark Obelisk")
			s4=makecard("statue","obelisk","Dark Obelisk")
			
			tower1=makecard("statue","samara-mosque","Quiet Stone Coil")
			tower2=makecard("statue","samara-mosque","Quiet Stone Coil")
			
			cards.push(s1,s2,s3,s4);
			movecard(0,150,200);
			movecard(1,350,100);
			movecard(2,700,100);
			movecard(3,900,200);
			
			if (!hasflag("bell1")) cards.push(makecard("darkcoil","samara-mosque","Howling Stone Coil"));
			else cards.push(tower1);
			movecard(4,350,300);	
				
			if (!hasflag("bell2")) cards.push(makecard("darkcoil","samara-mosque","Wailing Stone Coil"));
			else cards.push(tower1);
			movecard(5,700,300);	
			
			cards.push(makecard("darkgate","existing","existing",1))
			movecard(6,525,200);
			
			exo=deal("exit",1050,500);
			cards[exo].icon="gate";
			break;
	}
}

function necropolisarea() {
	ret=[];
	ret.push(pickone(Array(makecard("golem","existing","Stone Guardian"),makecard("caster","existing","Dark Priestess"),makecard("spectre","existing","Hollowed Spectre"))));
	for (var i=0;i<roll(1,2);i++) ret.push(necropolisthing());
	return ret;
}

function necropolisthing() {
	switch(roll(1,5)) {
		case 1: return makecard("gravestone"); break;
		case 2: return makecontainer("urn"); break;
		case 3: return makecard("skeleton"); break;
		case 4: return makecard("statue","existing","Ancient Monument"); break;
		case 5: return makecard("dust"); break;
	}
}

function necropolisstreet() {
	return pickone(Array("Promenade","Esplanade","Causeway","Boulevard"));
}

function orcmesshallthing() {
	switch(roll(1,5)) {
		case 1: case 2: return makecard("food","existing","Orc Slop"); break;
		case 3: case 4: return makecard("slime","existing","Orc Ooze"); break;
		case 5: return makecard("orc","existing","Hungry Orc"); break;
	}
}
function orctreasurything() {
	switch(roll(1,3)) {
		case 1: return makecard("treasure"); break;
		case 2: return makecard("dust"); break;
		case 3: return makecard("orc","existing","Orc Treasury Guard"); break;
	}
}


function taintedbranch() {
		ret=[];
		for(var i=0;i<roll(1,2);i++) {
			ret.push(pickone(Array(makecard("wolf","existing",taintedadj()+" Wolf"),makecard("caster","existing",taintedadj()+" Druid"),makecard("spectre","existing",taintedadj()+" Spirit"))));
		}
		for(var i=0;i<roll(2,3);i++) {
			ret.push(pickone(Array(makecard("tree","existing",taintedadj()+" Tree"),makecard("mushrooms","existing",taintedadj()+" Mushrooms"),makecard("gravestone",pickone(Array("stone-pile","stone-stack","tombstone")),taintedadj()+" Grave"))));
		}
		return ret;
}

function taintedadj() {
	return(pickone(Array("Evil","Tainted","Fetid","Eerie","Corrupted","Rotten","Grim")));
}

function battlefieldhill() {
		ret=[];
		for(var i=0;i<roll(2,3);i++) {
			ret.push(pickone(Array(makecard("orc","existing","Orc Soldier"),makecard("caster","existing","Wizard Soldier"),makecard("spectre","existing","Grim Spectre of War"))));
		}
		for (var i=0;i<roll(1,3);i++) ret.push(makecard(pickone(Array("junk","weapon","dust","slime","junk"))));
		spoils=makecard("container","open-treasure-chest","Spoils of War");
		spoils.contents="treasure";
		if (roll(1,2)==1) spoils.contents2="treasure";
		if (roll(1,2)==1) spoils.contents3="treasure";
		ret.push(spoils);
		return ret;
}

function catacombthing() {
	var groll=roll(1,7);
		if (groll<=3) return makecontainer("skull");
	switch(groll) {
		case 4: return makecard("spider"); break;
		case 5: return makecard("skeleton"); break;
		case 6: return makecard("dust"); break;
		case 7: return makecard("spectre"); break;
	}
}

function tombthing() {
	//return makecontainer("urn"); // all urns all the time
	var groll=roll(1,7);
	switch(groll) {
		case 1: return makecontainer("urn"); break;
		case 2: return makecontainer("sarcophagus"); break;
		case 3: return makecard("dust"); break;
		case 4: return makecard("junk"); break;
		case 5: return makecard("skeleton"); break;
		case 6: return makecontainer("urn"); break;
		case 7: return makecontainer("urn"); break;
	}
}

function darkforestthing() { // y'know, just dark forest things
	var groll=roll(1,5);
	switch(groll) {
		case 1: return makecard("tree"); break;
		case 2: return makecard("junk"); break;
		case 3: return makecard("mushrooms"); break;
		case 4: return makecard("treasure"); break;
		case 5: return makecard(pickone(Array("spider","wolf","fairy"))); break;
	}
}

function darkforestpathname() {
	return pickone(Array("Dark","Shadowed","Darkened","Shadowy","Pitch-Black"))+" "+pickone(Array("Passage","Clearing","Grove","Path","Undergrowth"));
}

function makecard(cardid,icon="existing",label="existing",contents=0) {
	newcard = Object.create(Object.getPrototypeOf(carddata[cardid]), Object.getOwnPropertyDescriptors(carddata[cardid]));
	newcard.adjectives=[];
	if (icon!="existing") newcard.icon=icon;
	if (label!="existing") newcard.label=label;
	if (contents>0) newcard.contents=contents;
	return newcard;
}

function deal(cardid,x=0,y=0) {
	var cid=dealcard(cardid,"dungeon");
	if (x>0) { cards[cid].x=x; cards[cid].desiredx=x; }
	if (y>0) { cards[cid].y=y; cards[cid].desiredy=y; }
	return cid;
}

function makecontainer(containertype) {
		box=makecard("container");
		switch(containertype) {
			case "coffin":
				box.icon="coffin";
				box.label="Coffin";
				box.contents=pickone(Array("zombie","skeleton","junk"));
				break;
			case "sarcophagus":
				box.icon="sarcophagus";
				box.label="Sarcophagus";
				box.contents=pickone(Array("skeleton","dust","junk"));
				break;
			case "skull":
				box.icon="skull-crack";
				box.label="Old Skull";
				box.contents=pickone(Array("charm","dust","slime","junk"));
				break;
			case "gravediggerlunch":
				box.icon="basket";
				box.label="Gravedigger's Lunch";
				box.contents="food";
				break;
			case "hollowlog":
				box.icon="log";
				box.label="Hollow Log";
				box.contents=pickone(Array("charm","spider","treasure","booze","tool"));
				break;
			case "tent":
				box.icon="forest-camp";
				box.label="Abandoned Tent";
				box.contents=pickone(Array("food","booze","weapon","treasure"));
				break;
			case "urn":
				box.icon="amphora";
				box.label="Burial Urn";
				box.contents=pickone(Array("charm","dust","junk","slime","treasure"));
				break;
			case "":
				box.icon="";
				box.label="";
				box.contents="";
				break;
		}
		return box;
}

function addcontainer(containertype) {
	switch(containertype) {
		case "coffin":
			box=deal("container");
			cards[box].icon="coffin";
			cards[box].label="Coffin";
			cards[box].contents=pickone(Array("zombie","skeleton","junk"));
			break;
		case "gravediggerlunch":
			box=deal("container");
			cards[box].icon="basket";
			cards[box].label="Gravedigger's Lunch";
			cards[box].contents="food";
			break;
		case "hollowlog":
			box=deal("container");
			cards[box].icon="log";
			cards[box].label="Hollow Log";
			cards[box].contents=pickone(Array("spider","treasure","booze","tool"));
			break;
		case "tent":
			box=deal("container");
			cards[box].icon="forest-camp";
			cards[box].label="Abandoned Tent";
			cards[box].contents=pickone(Array("food","booze","weapon","treasure"));
			break;			
	}
}

function organizedungeon() { // do this when the cards are JUST dungeon contents not including the exit
	cards=shuffle(cards); // first we randomize them
	var startx=350;
	if (cards.length<5) startx=500;
	if (cards.length>=8) startx=250;
	if (cards.length>=10) startx=150;
	var curx=startx;
	var cury=300;
	for(var i=0;i<cards.length;i++) {
		movecard(i,curx+roll(-20,20),cury+roll(-20,20));
		cury-=200;
		curx+=75;
		if (cury<100) cury=300;
	}
}

function movecard(cardindex,x,y) {
		cards[cardindex].x=x;
		cards[cardindex].y=y;
		cards[cardindex].desiredx=x;
		cards[cardindex].desiredy=y;
}
