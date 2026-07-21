function displayevent() {
	if (!currentevent) return;
	currentmessagetime=0;
	ctx.fillStyle='#ffffff';
	ctx.fillRect(300,200,600,500);
	eventtext="MISSING EVENT TEXT";
	eventeffect="";
	switch(currentevent) {
		case 1:
			eventtext="Hey wow, thanks for letting me out of that coffin.  I was in this crypt, uh... paying my respects to my dead aunt.  And anyway, I took a little nap in that coffin, and when I woke up somebody had nailed the thing shut!";
			eventeffect="The Dirtbag is now available.";
			break;
		case 2:
			eventtext="The beggar gratefully accepts your coin.  \"I was traveling here from the University to the south, and was waylaid by bandits.  The people in this town seem to despise intellectuals!  Well, either that or the bums around here are all really smart and they've just had it with condescending panhandlers.\"  He clears his throat.  \"This will get me back on my feet.  Thank you again.\"";
			eventeffect="The Scholar is now available.";
			break;
		// 3 4 5 are remaining character classes
		case 6:
			eventtext="The explorer sells you a map, assuring you that it is a safe path to the eastern forest.  Then he runs away to the west as fast as he can.";
			eventeffect="The Woods are now available.";
			break;
		case 7:
			eventtext="From the top of this tree, you can see a ruined settlement in the distance to the south.  Maybe there's some good loot down there.";
			eventeffect="The Village is now available.";
			break;
		case 9:
			eventtext="The man in the cage thanks you.  \"I locked myself in here when the ghosts showed up.  Now I guess I'll head back to town and start a church there, since this town is nothing but ruins and evil.\"";
			eventeffect="The Church is now available in town.";
			break;
		case 10:
			eventtext="You explain to the soldier that this isn't the right war, because he isn't a wizard or an orc.  He doesn't believe you, but says he'll head back to town to \"check in with Sarge.\"";
			eventeffect="The Soldier is now available.";
			break;
		case 11:
			eventtext="You release the scoundrel from the orcs.  \"Hey thanks,\" he says, \"those guys were real jerks.  Say, do you know if they've got a poker game going at the saloon back in town?  Y'know what, I'm just gonna go check.  Smell ya later.\"";
			eventeffect="The Scoundrel is now available.";
			break;
		case 13:
			eventtext="With your mighty enchanted weapon, you lop the Dark Lord's head right off his dumb old neck.  The forces of Evil weren't counting on you, were they?";
			eventeffect="You have won.";
			break;
		case 30:
			if (!hasflag("pawnshop1")) {
				eventtext="You buy a pile of various odds and ends.";
				eventeffect="Future incarnations will start with Junk.";
			} else {
				eventtext="You've already bought all the cheap stuff at the pawn shop.";
			}
			break;
		case 31:
			if (!hasflag("pawnshop2")) {
				eventtext="You buy a map that looks like it leads to a system of caves just west of town.";
				eventeffect="The Cave is now available.";
			} else {
				eventtext="There's nothing left to buy at that price.";
			}
			break;
		case 32:
			if (!hasflag("pawnshop3")) {
				eventtext="You buy a used crowbar from the top shelf (which is still relatively low, as shelves go.)";
				eventeffect="Future incarnations will start with a Tool.";
			} else {
				eventtext="You've already bought all the nice stuff at the pawn shop.";
			}
			break;
		case 40:
			if (!hasflag("church1")) {
				eventtext="You donate to the church in exchange for a meal.";
				eventeffect="You will start each quest with Food.";
			} else {
				eventtext="You've already gotten all the food they'll give you.";
			}
			break;
		case 41:
			if (!hasflag("church2")) {
				eventtext="You pay off the debts of one of the church's lower-level functionaries.";
				eventeffect="The Sage is now available.";
			} else {
				eventtext="You've already paid off the Sage's debt.";
			}
			break;
		case 42:
			eventtext="You pay for a top-tier blessing, which you'd think would be free, given that you rescued the priest from that haunted village.  (You can purchase this blessing multiple times.)";
			eventeffect="All future incarnations will have 1 more Sanity.";
			break;
		case 50:
			if (!hasflag("saloon1")) {
				eventtext="You buy a supply of beer from the saloon.";
				eventeffect="Future incarnations will start with Booze.";
			} else {
				eventtext="You've already gotten all the beer they'll serve you.";
			}
			break;
		case 51:
			if (!hasflag("saloon2")) {
				eventtext="You give some money to the shifty hooded guy in the back of the saloon.";
				eventeffect="Future incarnations will start with a Lockpick.";
			} else {
				eventtext="The hooded guy isn't there anymore.";
			}
			break;
		case 52:
			eventtext="You buy a round of drinks and snacks for everybody in town. (You can purchase this multiple times.)";
			eventeffect="All future incarnations will have 1 more Health.";
			break;
		case 61:
			eventtext="You ring the bell.  The peal echoes through the darkened forest, and all the way to the edges of the world, for all you know.";				
			break;
		case 62:
			eventtext="You ring the bell.  A hush falls over the streets of the Necropolis, even deeper than the almost total silence that it replaces.";				
			break;
	}
	ctx.fillStyle='#000000';
	ctx.font="24px sina";
	wrapText(ctx,eventtext,350,250,500,28);
	centertext(eventeffect,600,500,"black","bold 25");
	centertext("Click to continue.",600,650);
}



function finishevent() {
	refundedtreasure=0;
	switch(currentevent) {
		case 1:
			addflag("dirtbag");
			break;
		case 2:
			addflag("scholar");
			break;
		case 6:
			addflag("woods");
			break;
		case 7:
			addflag("village");
			break;
		case 9:
			addflag("church");
			break;
		case 10:
			addflag("soldier");
			break;
		case 11:
			addflag("scoundrel");
			break;
		case 13:
			changemusicspeed(1,5000);
			gamemode=10;
			break;
		case 30:
			if (hasflag("pawnshop1")) { refundedtreasure=1; dealcard("money","stat"); }
			else addflag("pawnshop1");
			break;
		case 31:
			if (hasflag("pawnshop2")) { refundedtreasure=1; dealcard("money2","stat"); }
			else addflag("pawnshop2");
			addflag("cave");
			break;	
		case 32:
			if (hasflag("pawnshop3")) { refundedtreasure=1; dealcard("money3","stat"); }
			else addflag("pawnshop3");
			break;	
				
		case 40:
			if (hasflag("church1")) { refundedtreasure=1; dealcard("money","stat"); }
			else addflag("church1");
			break;
		case 41:
			if (hasflag("church2")) { refundedtreasure=1; dealcard("money2","stat"); }
			else addflag("church2");
			addflag("sage");
			break;	
		case 42:
			sanitybonus++;
			break;			
		case 50:
			if (hasflag("saloon1")) { refundedtreasure=1; dealcard("money","stat"); }
			else addflag("saloon1");
			break;
		case 51:
			if (hasflag("saloon2")) { refundedtreasure=1; dealcard("money2","stat"); }
			else addflag("saloon2");
			break;	
		case 52:
			hpbonus++;
			break;
	}
	currentevent=0;
}