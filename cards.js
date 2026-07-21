
carddata={};

//carddata[""]=new Card("","xxx","NAME","player");

// special cards, not in the database

carddata["debug"]=new Card("debug","xxx","Unlock everything","stat",1);

carddata["soul"]=new Card("soul","flaming-sheet","Drifting Soul","stat",1);
carddata["travel"]=new Card("travel","flaming-sheet","Travel","stat",1);
carddata["missing"]=new Card("missing","flaming-sheet","Missing Card","stat",6);

carddata["money"]=new Card("money","pay-money","Money (one)","stat",2);
carddata["money2"]=new Card("money2","cash","Money (some)","stat",3);
carddata["money3"]=new Card("money3","coins","Money (lots)","stat",4);

carddata["townstatue"]=new Card("townstatue","stone-bust","Solid Gold Statue","dungeon",6);
carddata["explorer"]=new Card("explorer","conqueror","Explorer","dungeon",2);
carddata["beggar_scholar"]=new Card("beggar_scholar","despair","Beggar","dungeon",1);
carddata["church"]=new Card("church","church","Church","dungeon",3);
carddata["pawnshop"]=new Card("pawnshop","shop","Pawn Shop","dungeon",2);
carddata["saloon"]=new Card("saloon","saloon","Tavern","dungeon",2);

// stat and player cards

carddata["artifact"]=new Card("artifact","glowing-artifact","Magical Artifact","object",4);
carddata["booze"]=new Card("booze","beer-bottle","Booze","object",2);
carddata["braggadocio"]=new Card("braggadocio","wolf-howl","Braggadocio","stat",2);
carddata["bruteforce"]=new Card("bruteforce","weight-lifting-up","Brute Force","stat",2);
carddata["charm"]=new Card("charm","linked-rings","Charm","object",3);
carddata["cleveridea"]=new Card("cleveridea","inspiration","Clever Idea","stat",2);
carddata["crafting"]=new Card("crafting","freemasonry","Craftsmanship","stat",2);
carddata["dancing"]=new Card("dancing","contortionist","Dancing","stat",2);
carddata["dust"]=new Card("dust","powder","Dust","object",1);
carddata["food"]=new Card("food","cheese-wedge","Food","object",2);
carddata["junk"]=new Card("junk","brick-pile","Junk","object",1);
carddata["lockpick"]=new Card("lockpick","lockpicks","Lockpicks","object",2);
carddata["magic"]=new Card("magic","sparkles","Spark of Magic","stat",2);
carddata["magicweapon"]=new Card("magicweapon","lightning-saber","Magic Weapon","object",4);
carddata["mind"]=new Card("mind","brain","Mind","stat",1);
carddata["moxie"]=new Card("moxie","thumb-up","Moxie","stat",1);
carddata["muscle"]=new Card("muscle","strong","Muscle","stat",1);
carddata["poison"]=new Card("poison","poison-bottle","Poison","object",3);
carddata["slime"]=new Card("slime","blood","Slime","object",1);
carddata["tool"]=new Card("tool","crowbar","Tool","object",3);
carddata["torch"]=new Card("torch","torch","Torch","object",3);
carddata["treasure"]=new Card("treasure","crown-coin","Treasure!","object",4);
carddata["weapon"]=new Card("weapon","broadsword","Weapon","object",3);

// dungeon cards

carddata["approach"]=new Card("approach","crypt-entrance","Approach","dungeon",1);
carddata["bandit"]=new Card("bandit","barbarian","Bandit","dungeon",1);
carddata["bell"]=new Card("bell","carillon","Enormous Bell","dungeon",5);
carddata["boar"]=new Card("boar","boar","Wild Boar","dungeon",1);
carddata["cage_dirtbag"]=new Card("cage_dirtbag","coffin","Rattling Coffin","dungeon",3);
carddata["cage_priest"]=new Card("cage_priest","cage","Caged Priest","dungeon",3);
carddata["cage_scoundrel"]=new Card("cage_scoundrel","cage","Caged Captive","dungeon",3);
carddata["caster"]=new Card("caster","robe","Witch","dungeon",2);
carddata["container"]=new Card("container","wooden-crate","Container","dungeon",1);
carddata["container_locked"]=new Card("container_locked","locked-chest","Locked Container","dungeon",3);
carddata["darkcoil"]=new Card("darkcoil","samara-mosque","Dark Coil","dungeon",6);
carddata["darkgate"]=new Card("darkgate","star-gate","Dark Gate","dungeon",6);
carddata["darklord"]=new Card("darklord","cloaked-figure-on-horseback","The Dark Lord","dungeon",6);
carddata["darkness"]=new Card("darkness","crypt-entrance","Darkness","dungeon",2);
carddata["door"]=new Card("door","wooden-door","Door","dungeon",1);
carddata["door_locked"]=new Card("door_locked","closed-doors","Locked Door","dungeon",3);
carddata["exit"]=new Card("exit","exit-door","Exit","dungeon",1);
carddata["fairy"]=new Card("fairy","fairy","Mischievous Fairy","dungeon",1);
carddata["ghost"]=new Card("ghost","ghost","Ghost","dungeon",1);
carddata["goblin"]=new Card("goblin","goblin-head","Goblin","dungeon",1);
carddata["golem"]=new Card("golem","rock-golem","Stone Golem","dungeon",2);
carddata["gravestone"]=new Card("gravestone","tombstone","Tombstone","dungeon",1);
carddata["horror"]=new Card("horror","screaming","Horror","dungeon",1);
carddata["injury"]=new Card("injury","bleeding-wound","Injury","dungeon",1);
carddata["mushrooms"]=new Card("mushrooms","grass-mushroom","Mushroom Ring","dungeon",1);
carddata["orc"]=new Card("orc","orc-head","Filthy Orc","dungeon",2);
carddata["rescue_soldier"]=new Card("rescue_soldier","pikeman","Human Soldier","dungeon",3);
carddata["skeleton"]=new Card("skeleton","skeleton","Skeleton","dungeon",1);
carddata["spectre"]=new Card("spectre","spectre","Ancient Spectre","dungeon",2);
carddata["spider"]=new Card("spider","long-legged-spider","Giant Spider","dungeon",1);
carddata["statue"]=new Card("statue","stone-bust","Statue","dungeon",2);
carddata["traphall"]=new Card("traphall","dungeon-gate","Trapped Hallway","dungeon",3);
carddata["tree"]=new Card("tree","beech","Tree","dungeon",1);
carddata["tree_village"]=new Card("tree_village","baobab","Very Tall Tree","dungeon",3);
carddata["web"]=new Card("web","spider-web","Spider Web","dungeon",2);
carddata["well"]=new Card("well","well","Well","dungeon",3);
carddata["wolf"]=new Card("wolf","wolf-head","Ravenous Wolf","dungeon",2);
carddata["zombie"]=new Card("zombie","shambling-zombie","Zombie","dungeon",1);
carddata["zombiearm"]=new Card("zombiearm","raise-zombie","Zombie Arm","dungeon",1);


carddata["skeleton"].damage=1; // injury is digit 0
carddata["zombie"].damage=1;
carddata["ghost"].damage=10; // horror is digit 1
carddata["boar"].damage=1;
carddata["spider"].damage=11;
carddata["fairy"].damage=10;
carddata["goblin"].damage=1;
carddata["bandit"].damage=1;
carddata["spectre"].damage=10;
carddata["caster"].damage=11;
carddata["wolf"].damage=1;
carddata["golem"].damage=1;
carddata["orc"].damage=1;
carddata["darklord"].damage=33;

// class selection


carddata["class11"]=new Card("class11","swordman","Warrior","class",2);
carddata["class112"]=new Card("class112","mounted-knight","Knight","class",3);
carddata["class1122"]=new Card("class1122","templar-shield","Anointed Paladin","class",4);
carddata["class11223"]=new Card("class11223","winged-sword","Holy Champion","class",5);
carddata["class112233"]=new Card("class112233","third-eye","Demigod","class",6);
carddata["class1123"]=new Card("class1123","dwarf-face","Grizzled Veteran","class",4);
carddata["class11233"]=new Card("class11233","ninja-mask","Ninja Master","class",5);
carddata["class113"]=new Card("class113","caveman","Barbarian","class",3);
carddata["class1133"]=new Card("class1133","hooded-assassin","Master Assassin","class",4);
carddata["class12"]=new Card("class12","hiking","Adventurer","class",2);
carddata["class122"]=new Card("class122","magnet-man","Metal Mage","class",3);
carddata["class1223"]=new Card("class1223","crown-of-thorns","Wise Druid","class",4);
carddata["class12233"]=new Card("class12233","vampire-dracula","Vampire Lord","class",5);
carddata["class123"]=new Card("class123","miner","Archaeologist","class",3);
carddata["class1233"]=new Card("class1233","hooded-figure","Elusive Rogue","class",4);
carddata["class13"]=new Card("class13","crow-nest","Pirate","class",2);
carddata["class133"]=new Card("class133","archer","Ranger","class",3);
carddata["class1a"]=new Card("class1a","farmer","Laborer","class",1);
carddata["class1b"]=new Card("class1b","pikeman","Soldier","class",1);
carddata["class22"]=new Card("class22","fire-silhouette","Wizard","class",2);
carddata["class223"]=new Card("class223","fomorian","Necromancer","class",3);
carddata["class2233"]=new Card("class2233","cultist","Demon Cultist","class",4);
carddata["class23"]=new Card("class23","public-speaker","Charlatan","class",2);
carddata["class233"]=new Card("class233","suspicious","Illusionist","class",3);
carddata["class2a"]=new Card("class2a","read","Scholar","class",1);
carddata["class2b"]=new Card("class2b","wisdom","Sage","class",1);
carddata["class33"]=new Card("class33","robber","Thief","class",2);
carddata["class3a"]=new Card("class3a","hoodie","Dirtbag","class",1);
carddata["class3b"]=new Card("class3b","ringmaster","Scoundrel","class",1);

// place selection

carddata["banditcamp"]=new Card("banditcamp","palisade","Bandit Camp","place",2);
carddata["barrow"]=new Card("barrow","tumulus","Ancient Barrow","place",2);
carddata["battlefield"]=new Card("battlefield","castle-ruins","Ancient Battlefield","place",3);
carddata["catacomb"]=new Card("catacomb","crypt-entrance","Catacomb","place",2);
carddata["cave"]=new Card("cave","cave-entrance","Cave","place",1);
carddata["darkcitadel"]=new Card("darkcitadel","castle","The Dark Citadel","place",4);
carddata["darkforest"]=new Card("darkforest","forest-entrance","Dark Forest","place",2);
carddata["dungeon"]=new Card("dungeon","dungeon-gate","Dungeon","place",2);
carddata["graves"]=new Card("graves","graveyard","Cemetery","place",1);
carddata["mausoleum"]=new Card("mausoleum","triple-gate","Mausoleum","place",2);
carddata["necropolis"]=new Card("necropolis","egyptian-temple","Necropolis","place",3);
carddata["orcfortress"]=new Card("orcfortress","hill-fort","Orc Stronghold","place",3);
carddata["taintedforest"]=new Card("taintedforest","dead-wood","Tainted Forest","place",3);
carddata["village"]=new Card("village","village","Village","place",1);
carddata["woods"]=new Card("woods","forest","Woods","place",1);