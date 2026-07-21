function tutorialtext() {
		if (gamemode==1 && cards.length==2 && runprogress==0) {
			puttext("Drag the soul to the laborer to incarnate.",100,200,"white");
			puttext("When there are no more blue cards, Time will Pass.",100,700,"white");
		}
		if (gamemode==1 && runprogress>0) {
			var left=14-runprogress;
			if (left==1) puttext("This is your last chance.",100,650,"white");
			else puttext("This world will be consumed in "+left+" cycles.",100,650,"white");
		}
		if (gamemode==2 && runprogress==1) {
			puttext("Drag the quest to a location to explore.",50,100,"white");
		}
		if (gamemode==5) {
			puttext("This incarnation has become one with the void.",100,350,"white");
			puttext("You must try again.  Click to reincarnate.",600,550,"white");
		}
		if (gamemode==3 && currentmessagetime==0 && runprogress==1) { // gameplayer
			ctx.fillStyle="#ffffff";
			if (movesthislevel==0)  {
				puttext("Remember, when there are no blue cards, Time will Pass.",200,650);
				wrapText(ctx,"Drag any card to the exit when you're ready to leave. If you have treasure, you'll take it back to town.",850,300,330,26);
			}
			if (movesthislevel==1) {
				puttext("After Time Passes, any enemies with throbbing icons will attack you.",250,80);
				wrapText(ctx,"The next time Time Passes, any injury or horror cards will reduce your health or sanity.",850,700,300,26);
				wrapText(ctx,"Your health and sanity are over here.",50,700,300,26);
			}
		}
}