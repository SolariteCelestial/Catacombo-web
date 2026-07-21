function makecharacter(classid) {
	// DEBUG
	maxhp=3;
	maxsanity=3;

	classstats={};
	classstats["class1a"]=Array(3,2); // sum 5  //laborer
	classstats["class1b"]=Array(3,2);						//soldier
	classstats["class2a"]=Array(2,3);						//scholar
	classstats["class2b"]=Array(2,3);						//sage
	classstats["class3a"]=Array(2,3);						//dirtbag
	classstats["class3b"]=Array(3,2);						//scoundrel

	classstats["class11"]=Array(4,2); // sum 6  //warrior
	classstats["class12"]=Array(3,3);						//adventurer
	classstats["class13"]=Array(3,3);						//pirate
	classstats["class22"]=Array(2,4);						//wizard
	classstats["class23"]=Array(3,3);						//charlatan
	classstats["class33"]=Array(3,3);						//thief

	classstats["class112"]=Array(4,3); // sum 7   //knight
	classstats["class113"]=Array(5,2);						//barbarian
	classstats["class122"]=Array(2,5);						//metal mage
	classstats["class123"]=Array(4,3);						//archaeologist
	classstats["class133"]=Array(4,3);						//ranger
	classstats["class223"]=Array(2,5);						//necromancer
	classstats["class233"]=Array(4,3);						//illusionist

	classstats["class1122"]=Array(5,3); // sum 8  // anointed paladin
	classstats["class1123"]=Array(4,4);						// grizzled veteran
	classstats["class1133"]=Array(4,4);						// master assassin
	classstats["class1223"]=Array(3,5);						// wise druid
	classstats["class1233"]=Array(3,5);						// elusive rogue
	classstats["class2233"]=Array(4,4);						// demon cultist

	classstats["class11223"]=Array(6,3); // sum 9   // holy champion
	classstats["class11233"]=Array(5,4);						// ninja master
	classstats["class12233"]=Array(3,6);						// vampire lord

	classstats["class112233"]=Array(5,5);  // sum 41  Demigod
	
	maxhp=classstats[playerclassid][0];
	maxsanity=classstats[playerclassid][1];
	
	maxsanity+=sanitybonus; // bonus from church
	maxhp+=hpbonus; // bonus from inn
	
	sanity=maxsanity;
	hp=maxhp;
}

function dealstartingcards() {
	// cards that you get because of your class or stuff you've bought in town
	abovestatcardposition=100;
	if (hasflag("pawnshop1")) dealcard("junk","abovestat");
	if (hasflag("pawnshop3")) dealcard("tool","abovestat");
	if (hasflag("church1")) dealcard("food","abovestat");
	if (hasflag("saloon1")) dealcard("booze","abovestat");
	if (hasflag("saloon2")) dealcard("lockpick","abovestat");
	
	switch(playerclassid) {
			case "class11": dealcard("weapon","abovestat"); break;
			case "class12": dealcard("food","abovestat"); break;
			case "class13": dealcard("booze","abovestat"); break;
			case "class22": dealcard("charm","abovestat"); break;
			case "class23": if (roll(1,2)==1) { dealcard("treasure","abovestat"); dealcard("treasure","abovestat"); }break;
			case "class33": dealcard("lockpick","abovestat"); break;

			case "class112": dealcard("weapon","abovestat"); break;
			case "class113": dealcard("weapon","abovestat"); break;
			case "class122": dealcard("charm","abovestat"); break;
			case "class123": dealcard("tool","abovestat"); break;
			case "class133": dealcard("weapon","abovestat"); break;
			case "class223": dealcard("poison","abovestat"); break;
			case "class233": dealcard("charm","abovestat"); break;

			case "class1122": dealcard("weapon","abovestat"); break;
			case "class1123": dealcard("weapon","abovestat"); break;
			case "class1133": dealcard("poison","abovestat"); break;
			case "class1223": dealcard("charm","abovestat"); break;
			case "class1233": dealcard("poison","abovestat"); break;
			case "class2233": dealcard("charm","abovestat"); break;

			case "class11223": dealcard("magicweapon","abovestat"); break;
			case "class11233": { dealcard("weapon","abovestat"); dealcard("charm","abovestat"); }break;
			case "class12233": dealcard("artifact","abovestat"); break;

			case "class112233": { dealcard("magicweapon","abovestat"); dealcard("artifact","abovestat"); } break;



	}
}

function dealplayercards() { // cards that are redrawn each turn
	muscles=0;
	mysts=0;
	moxes=0;
	// do this based on player class

	classdecks={};
	classdecks["class1a"]=Array(2,0,0);
	classdecks["class1b"]=Array(2,0,0);
	classdecks["class2a"]=Array(0,2,0);
	classdecks["class2b"]=Array(0,2,0);
	classdecks["class3a"]=Array(0,0,2);
	classdecks["class3b"]=Array(0,0,2);

	classdecks["class11"]=Array(3,0,0);
	classdecks["class12"]=Array(2,1,0);
	classdecks["class13"]=Array(1,0,2);
	classdecks["class22"]=Array(0,3,0);
	classdecks["class23"]=Array(0,2,1);
	classdecks["class33"]=Array(0,0,3);

	classdecks["class112"]=Array(3,1,0);
	classdecks["class113"]=Array(3,0,1);
	classdecks["class122"]=Array(1,3,0);
	classdecks["class123"]=Array(1,2,1);
	classdecks["class133"]=Array(1,0,3);
	classdecks["class223"]=Array(0,2,2);
	classdecks["class233"]=Array(0,1,3);

	classdecks["class1122"]=Array(2,2,0);
	classdecks["class1123"]=Array(2,1,1);
	classdecks["class1133"]=Array(2,0,2);
	classdecks["class1223"]=Array(1,2,1);
	classdecks["class1233"]=Array(1,1,2);
	classdecks["class2233"]=Array(0,2,2);

	classdecks["class11223"]=Array(2,2,1);
	classdecks["class11233"]=Array(2,1,2);
	classdecks["class12233"]=Array(1,2,2);

	classdecks["class112233"]=Array(3,3,3);


	muscles=classdecks[playerclassid][0];
	mysts=classdecks[playerclassid][1];
	moxes=classdecks[playerclassid][2];
		numcards=muscles+mysts+moxes;
		statcardposition=650-(100*numcards);
		if (statcardposition<75) statcardposition=75;

	for(i=0;i<muscles;i++) { dealcardfromto("muscle",statcardposition,910,statcardposition,roll(680,720)); statcardposition+=roll(110,130); }
	for(i=0;i<mysts;i++) { dealcardfromto("mind",statcardposition,910,statcardposition,roll(680,720)); statcardposition+=roll(110,130); }
	for(i=0;i<moxes;i++) { dealcardfromto("moxie",statcardposition,910,statcardposition,roll(680,720)); statcardposition+=roll(110,130); }
}