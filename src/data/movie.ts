export interface Movie {
  title: string;
  year: number;
  clues: string[];
  category: 'Bollywood' | 'Hollywood' | 'Trending';
  poster?: string;
}

export const movies: Movie[] = [
  // Bollywood (40)
  { title: "3 Idiots", year: 2009, clues: ["if(pressure == 'extreme') say('All is well');", "🎓👨‍🎓👨‍🎓👨‍🎓 + 🧠 = ❤️", "Rancho + Engineering + Life Lessons"], category: "Bollywood" },
  { title: "Dangal", year: 2016, clues: ["while(!gold) { train(daughters); }", "🤼‍♀️👧👧 + 🥇 = 🇮🇳", "Mahavir + Wrestling + Olympics"], category: "Bollywood" },
  { title: "PK", year: 2014, clues: ["if(god.exists()) return earth.religion;", "👽❓🙏 = 🤔", "Alien + Remote Control + Religion"], category: "Bollywood" },
  { title: "Sholay", year: 1975, clues: ["friendship.level = 'legendary'; villain = 'Gabbar';", "🐴🔫👬 vs 😈", "Jai + Veeru + Basanti"], category: "Bollywood" },
  { title: "DDLJ", year: 1995, clues: ["train.palat() ? love : missed_connection;", "🚂💃🕺 + 🇨🇭 = ❤️", "Raj + Simran + Mustard Fields"], category: "Bollywood" },
  { title: "Lagaan", year: 2001, clues: ["if(cricket.win()) tax = 0;", "🏏🌾 vs 🇬🇧 = 🏆", "Bhuvan + Cricket + British Raj"], category: "Bollywood" },
  { title: "Gangs of Wasseypur", year: 2012, clues: ["for(generation in family) { revenge++; }", "⚔️👨‍👦‍👦 + 🔥 = 💀", "Sardar + Coal + Revenge Saga"], category: "Bollywood" },
  { title: "Andhadhun", year: 2018, clues: ["blind ? fake : real; crime.witnessed();", "🎹👁️🔪 = 🤯", "Pianist + Murder + Twist"], category: "Bollywood" },
  { title: "Drishyam", year: 2015, clues: ["memory.fabricate(); alibi.perfect();", "👨‍👩‍👧‍👦 + 📺 = 🕵️", "Cable TV + Perfect Crime"], category: "Bollywood" },
  { title: "Pushpa", year: 2021, clues: ["smuggler.rise(); flower.power++;", "🪵🌸 + 💪 = 🔥", "Allu + Red Sanders + Icon Star"], category: "Bollywood" },
  { title: "Jawan", year: 2023, clues: ["soldier.disguise(); revenge.serve();", "🦸‍♂️👴 + ⚔️ = 🇮🇳", "Shah Rukh + Bald + Vigilante"], category: "Bollywood" },
  { title: "Stree 2", year: 2024, clues: ["ghost.returns(); village.panic++;", "👻💃 + 😱 = 😂", "Chanderi + Horror Comedy"], category: "Bollywood" },
  { title: "RRR", year: 2022, clues: ["friendship.forge(fire, water);", "🔥💧 + 🇮🇳 = 🦁", "Bheem + Ram + Naatu Naatu"], category: "Bollywood" },
  { title: "Kabir Singh", year: 2019, clues: ["love.obsessive = true; anger.issues++;", "💔🍺😤 = 💕", "Surgeon + Toxic Love"], category: "Bollywood" },
  { title: "Gully Boy", year: 2019, clues: ["street.rap(); dream.chase();", "🎤🚇 + 💭 = 🌟", "Apna Time Aayega + Mumbai"], category: "Bollywood" },
  { title: "ZNMD", year: 2011, clues: ["roadtrip.spain(); bucket.list++;", "🚗🇪🇸👬 = 🎉", "Three Friends + Spain + Life"], category: "Bollywood" },
  { title: "YJHD", year: 2013, clues: ["friends.manali(); love.discovered();", "⛰️🎉❄️ = 💕", "Bunny + Naina + Manali Trip"], category: "Bollywood" },
  { title: "Chak De India", year: 2007, clues: ["coach.redemption(); hockey.win();", "🏑👨‍🏫🇮🇳 = 🥇", "Shah Rukh + Hockey + 70 Minutes"], category: "Bollywood" },
  { title: "Rang De Basanti", year: 2006, clues: ["students.transform(); revolution.spark();", "🎓✈️🇮🇳 = 🔥", "Documentary + Freedom Fighters"], category: "Bollywood" },
  { title: "Taare Zameen Par", year: 2007, clues: ["child.dyslexia = true; teacher.understand();", "👦🎨📚 = ⭐", "Ishaan + Art + Special Needs"], category: "Bollywood" },
  { title: "Barfi", year: 2012, clues: ["deaf.mute = true; love.pure();", "🧏‍♂️❤️😇 = 🥹", "Ranbir + Silence + Pure Love"], category: "Bollywood" },
  { title: "Queen", year: 2014, clues: ["honeymoon.solo(); confidence.grow();", "👰✈️🗼 = 💪", "Rani + Paris + Self Discovery"], category: "Bollywood" },
  { title: "Bajrangi Bhaijaan", year: 2015, clues: ["hanuman.bhakt(); child.lost(); border.cross();", "🙏👧🇵🇰 = ❤️", "Salman + Munni + India-Pakistan"], category: "Bollywood" },
  { title: "Uri", year: 2019, clues: ["surgical.strike(); josh.high();", "🪖💥🇮🇳 = 🔥", "How's The Josh + Army"], category: "Bollywood" },
  { title: "Dil Chahta Hai", year: 2001, clues: ["friends.goa(); life.different_paths();", "👬👬🏖️ = 🎉", "Akash + Sid + Sameer + Goa"], category: "Bollywood" },
  { title: "Munna Bhai MBBS", year: 2003, clues: ["gunda.becomes_doctor(); jaadu_ki_jhappi();", "🤗👊💉 = 😂", "Sanjay + Circuit + Medical College"], category: "Bollywood" },
  { title: "Om Shanti Om", year: 2007, clues: ["actor.reborn(); revenge.glamorous();", "🎬🔥👻 = ⭐", "Om + Shanti + Reincarnation"], category: "Bollywood" },
  { title: "Jodhaa Akbar", year: 2008, clues: ["mughal.marry(rajput); love.bloom();", "👑❤️🏰 = 🕊️", "Akbar + Jodhaa + Empire"], category: "Bollywood" },
  { title: "Padmaavat", year: 2018, clues: ["queen.honor(); jauhar.brave();", "👸🔥⚔️ = 🏰", "Deepika + Ranveer + Rajput Pride"], category: "Bollywood" },
  { title: "War", year: 2019, clues: ["mentor.vs.student(); spy.action();", "🕵️💥✈️ = 🔥", "Hrithik + Tiger + RAW"], category: "Bollywood" },
  { title: "Animal", year: 2023, clues: ["daddy.issues.extreme(); violence++;", "🐺👨‍👦💔 = 😈", "Ranbir + Father + Dark"], category: "Bollywood" },
  { title: "Pathaan", year: 2023, clues: ["spy.return(); nation.save();", "🕵️🇮🇳💪 = 🔥", "Shah Rukh + RAW + Comeback"], category: "Bollywood" },
  { title: "Brahmastra", year: 2022, clues: ["astra.awaken(); shiva.fire();", "🔥💎✨ = ⚡", "Ranbir + Alia + Astraverse"], category: "Bollywood" },
  { title: "KGF", year: 2018, clues: ["slave.become_king(); gold.empire();", "⛏️👑🔥 = 💀", "Rocky + Kolar + Rise"], category: "Bollywood" },
  { title: "Singham", year: 2011, clues: ["cop.honest(); aata_majhi_satakli();", "👮💪😤 = ⚖️", "Ajay + Police + Goa"], category: "Bollywood" },
  { title: "Ghajini", year: 2008, clues: ["memory.loss(15_minutes); revenge.tattoo();", "🧠💀📝 = 💔", "Aamir + Amnesia + Love"], category: "Bollywood" },
  { title: "Dhoom 2", year: 2006, clues: ["thief.stylish(); heist.impossible();", "🏍️💎🎭 = 😎", "Hrithik + Robbery + Style"], category: "Bollywood" },
  { title: "Chennai Express", year: 2013, clues: ["train.wrong(); south.adventure();", "🚂😂🌶️ = ❤️", "Shah Rukh + Deepika + Comedy"], category: "Bollywood" },
  { title: "Golmaal", year: 2006, clues: ["friends.chaos(); comedy.slapstick();", "👨‍👨‍👦‍👦😂🏠 = 🤣", "Ajay + Tusshar + Blind"], category: "Bollywood" },
  { title: "Hera Pheri", year: 2000, clues: ["money.scheme(); babu_bhaiya();", "💰😂📞 = 🤣", "Babu Rao + Raju + Shyam"], category: "Bollywood" },

  // Hollywood (40)
  { title: "The Shawshank Redemption", year: 1994, clues: ["hope.never_die(); prison.escape();", "🏛️🔨🕳️ = 🕊️", "Andy + Red + Zihuatanejo"], category: "Hollywood" },
  { title: "The Godfather", year: 1972, clues: ["offer.cant_refuse(); family.business();", "🎩🔫🇮🇹 = 👑", "Corleone + Mafia + Respect"], category: "Hollywood" },
  { title: "The Dark Knight", year: 2008, clues: ["why_so_serious(); chaos.agent();", "🦇🃏💥 = 🌃", "Batman + Joker + Gotham"], category: "Hollywood" },
  { title: "Inception", year: 2010, clues: ["dream.within(dream); totem.spin();", "🌀💭🎯 = 🤯", "Cobb + Dreams + Reality"], category: "Hollywood" },
  { title: "Forrest Gump", year: 1994, clues: ["life == box_of_chocolates; run.forever();", "🏃🍫🦐 = ❤️", "Run + History + Simple"], category: "Hollywood" },
  { title: "Interstellar", year: 2014, clues: ["love.transcend(dimensions); time.relative();", "🚀🕳️❤️ = 🌌", "Cooper + Murph + Black Hole"], category: "Hollywood" },
  { title: "Fight Club", year: 1999, clues: ["rule_1: dont_talk(); tyler.durden();", "👊🧼💣 = 🤫", "Brad Pitt + Soap + Anarchy"], category: "Hollywood" },
  { title: "Pulp Fiction", year: 1994, clues: ["timeline.shuffle(); royale_with_cheese();", "💼🍔🩹 = 🎬", "Vincent + Jules + Briefcase"], category: "Hollywood" },
  { title: "The Matrix", year: 1999, clues: ["red_pill || blue_pill; neo.chosen();", "💊🖥️🥋 = 🤖", "Neo + Morpheus + Simulation"], category: "Hollywood" },
  { title: "Avengers Endgame", year: 2019, clues: ["whatever.it_takes(); snap.reverse();", "🦸‍♂️🦸‍♀️💎 = ♾️", "Iron Man + Thanos + Time Heist"], category: "Hollywood" },
  { title: "Spider-Man No Way Home", year: 2021, clues: ["multiverse.open(); peter_x3();", "🕷️🕷️🕷️🌀 = 🤯", "Three Peters + Villains + Memory"], category: "Hollywood" },
  { title: "Titanic", year: 1997, clues: ["door.space = insufficient; ship.sink();", "🚢❄️💔 = 🎻", "Jack + Rose + Iceberg"], category: "Hollywood" },
  { title: "La La Land", year: 2016, clues: ["dream.chase(); love.sacrifice();", "🎹💃🌟 = 💔", "Sebastian + Mia + Los Angeles"], category: "Hollywood" },
  { title: "The Lion King", year: 1994, clues: ["hakuna.matata(); uncle.evil();", "🦁👑🌅 = 🎵", "Simba + Scar + Pride Rock"], category: "Hollywood" },
  { title: "Joker", year: 2019, clues: ["society.ignore(); clown.transform();", "🤡😢➡️😈 = 🔥", "Arthur + Gotham + Stairs"], category: "Hollywood" },
  { title: "Gladiator", year: 2000, clues: ["general.become_slave(); arena.fight();", "⚔️🏛️👑 = 🦁", "Maximus + Rome + Revenge"], category: "Hollywood" },
  { title: "The Prestige", year: 2006, clues: ["magic.obsession(); twist.double();", "🎩✨👯 = 🤯", "Tesla + Rival Magicians"], category: "Hollywood" },
  { title: "Whiplash", year: 2014, clues: ["tempo.not_my_fucking(); jazz.blood();", "🥁😤🩸 = 🎵", "Fletcher + Drums + Perfection"], category: "Hollywood" },
  { title: "Get Out", year: 2017, clues: ["girlfriend.family.sus(); sunken_place();", "👀🧠🫖 = 😱", "Chris + Hypnosis + Horror"], category: "Hollywood" },
  { title: "Parasite", year: 2019, clues: ["class.divide(); family.infiltrate();", "🏠⬆️⬇️ = 💀", "Kim + Park + Basement"], category: "Hollywood" },
  { title: "Oppenheimer", year: 2023, clues: ["atom.split(); regret.eternal();", "💣🔬😔 = 🌍", "Nuclear + Manhattan Project"], category: "Hollywood" },
  { title: "Dune", year: 2021, clues: ["spice.must_flow(); chosen_one();", "🏜️🪱🌀 = 👑", "Paul + Arrakis + Sandworm"], category: "Hollywood" },
  { title: "Avatar", year: 2009, clues: ["blue.alien(); nature.connect();", "🔵🌳🦋 = 🌍", "Jake + Pandora + Navi"], category: "Hollywood" },
  { title: "The Avengers", year: 2012, clues: ["heroes.assemble(); loki.invade();", "🦸‍♂️🦸‍♀️🦸 = 💥", "Iron Man + Thor + Hulk"], category: "Hollywood" },
  { title: "Iron Man", year: 2008, clues: ["if(hero == 'billionaire' && suit == 'metal') save(world);", "🦸‍♂️💰 → 🛡️🔴", "Tony Stark + Arc Reactor"], category: "Hollywood" },
  { title: "Black Panther", year: 2018, clues: ["wakanda.forever(); vibranium.power();", "🐆👑🌍 = 💜", "TChalla + Killmonger + Tech"], category: "Hollywood" },
  { title: "Guardians of the Galaxy", year: 2014, clues: ["outlaws.space(); groot.am();", "🚀🌳🦝 = 🎵", "Star Lord + Groot + Rocket"], category: "Hollywood" },
  { title: "John Wick", year: 2014, clues: ["dog.killed(); rampage.begin();", "🐕💀🔫 = 😡", "Keanu + Continental + Pencil"], category: "Hollywood" },
  { title: "Mad Max Fury Road", year: 2015, clues: ["witness.me(); chrome.shiny();", "🚗💥🏜️ = 🔥", "Max + Furiosa + War Rig"], category: "Hollywood" },
  { title: "The Social Network", year: 2010, clues: ["friend.request_denied(); billion.dollars();", "💻👥💰 = 😤", "Zuckerberg + Harvard + Facebook"], category: "Hollywood" },
  { title: "Inglourious Basterds", year: 2009, clues: ["nazi.hunt(); cinema.burn();", "🎬🔥⚔️ = 💀", "Tarantino + WWII + Revenge"], category: "Hollywood" },
  { title: "Django Unchained", year: 2012, clues: ["slave.free(); bounty.hunt();", "🤠⛓️💥 = 🔫", "Django + Schultz + Candyland"], category: "Hollywood" },
  { title: "Shutter Island", year: 2010, clues: ["detective.investigate(); reality.question();", "🏝️🧠💊 = 🤯", "Teddy + Asylum + Twist"], category: "Hollywood" },
  { title: "Memento", year: 2000, clues: ["memory.reverse(); tattoo.clue();", "📝🔄🧠 = 🤯", "Leonard + Amnesia + Revenge"], category: "Hollywood" },
  { title: "Se7en", year: 1995, clues: ["sins.seven(); box.whats_in();", "📦😱🔫 = 💀", "Mills + Somerset + Doe"], category: "Hollywood" },
  { title: "The Silence of the Lambs", year: 1991, clues: ["fava_beans.chianti(); quid_pro_quo();", "🧠🍷👅 = 😱", "Clarice + Hannibal + Buffalo"], category: "Hollywood" },
  { title: "Schindlers List", year: 1993, clues: ["list.save_lives(); factory.refuge();", "📜✡️🏭 = 💔", "Schindler + Jews + Holocaust"], category: "Hollywood" },
  { title: "Saving Private Ryan", year: 1998, clues: ["brothers.died(); ryan.find();", "🪖🏖️🇺🇸 = 💔", "Omaha + WWII + Rescue"], category: "Hollywood" },
  { title: "The Departed", year: 2006, clues: ["mole.double(); rat.everywhere();", "🐀👮🔫 = 💀", "Boston + Mob + Undercover"], category: "Hollywood" },
  { title: "No Country for Old Men", year: 2007, clues: ["coin.flip(); evil.relentless();", "🪙💀🤠 = 😱", "Chigurh + Drug Money + Fate"], category: "Hollywood" },

  // Trending 2025 (20)
  { title: "Avatar Fire and Ash", year: 2025, clues: ["pandora.fire_tribe(); new_element();", "🔥🔵🌋 = 🌍", "Jake + Fire Na'vi + Ash"], category: "Trending" },
  { title: "Knives Out 3", year: 2025, clues: ["detective.blanc(); mystery.new();", "🔪🕵️❓ = 🎭", "Daniel Craig + Murder Mystery"], category: "Trending" },
  { title: "Jurassic World Rebirth", year: 2025, clues: ["dinosaur.return(); chaos.theory();", "🦖🌍🔬 = 😱", "Dinos + New Era + Survival"], category: "Trending" },
  { title: "Superman Legacy", year: 2025, clues: ["krypton.son(); hope.symbol();", "🦸‍♂️☀️🌍 = 💙", "Clark + Metropolis + DCU"], category: "Trending" },
  { title: "Mission Impossible 8", year: 2025, clues: ["ethan.final(); impossible.last();", "🕵️💣🏃 = 🔥", "Tom Cruise + Final Chapter"], category: "Trending" },
  { title: "Anaconda", year: 2025, clues: ["snake.giant(); jungle.terror();", "🐍🌴😱 = 💀", "Amazon + Reboot + Horror"], category: "Trending" },
  { title: "F1", year: 2025, clues: ["race.formula1(); speed.max();", "🏎️🏁💨 = 🏆", "Brad Pitt + Racing + Speed"], category: "Trending" },
  { title: "Thunderbolts", year: 2025, clues: ["antiheroes.assemble(); redemption.seek();", "⚡👥💪 = 🦸", "Marvel + Villains + Team"], category: "Trending" },
  { title: "Captain America 4", year: 2025, clues: ["sam.shield(); new_world_order();", "🛡️🦅🇺🇸 = 🦸", "Sam Wilson + Red Hulk"], category: "Trending" },
  { title: "Fantastic Four", year: 2025, clues: ["family.cosmic(); four.powers();", "4️⃣🚀🔥 = 👨‍👩‍👧‍👦", "Reed + Sue + MCU"], category: "Trending" },
  { title: "Wicked", year: 2024, clues: ["witch.green(); defying_gravity();", "💚🧹🎵 = ✨", "Elphaba + Glinda + Oz"], category: "Trending" },
  { title: "Gladiator 2", year: 2024, clues: ["arena.return(); rome.falls();", "⚔️🏛️👑 = 🦁", "Lucius + Empire + Sequel"], category: "Trending" },
  { title: "Beetlejuice 2", year: 2024, clues: ["ghost.with_most(); say_name_x3();", "👻😈🪦 = 😂", "Burton + Keaton + Afterlife"], category: "Trending" },
  { title: "Venom 3", year: 2024, clues: ["symbiote.final(); eddie.goodbye();", "🖤👅💀 = 👾", "Tom Hardy + Last Dance"], category: "Trending" },
  { title: "Moana 2", year: 2024, clues: ["ocean.calls_again(); wayfinder();", "🌊🚣‍♀️🐷 = 🏝️", "Moana + Maui + New Journey"], category: "Trending" },
  { title: "Deadpool 3", year: 2024, clues: ["fourth_wall.break(); wolverine.buddy();", "💀🔴🐺 = 😂", "Reynolds + Jackman + MCU"], category: "Trending" },
  { title: "Inside Out 2", year: 2024, clues: ["emotions.puberty(); anxiety.new();", "😊😢😡😨🤢 = 🧠", "Riley + Teenage + New Emotions"], category: "Trending" },
  { title: "Kung Fu Panda 4", year: 2024, clues: ["dragon_warrior.new_threat(); skadoosh();", "🐼🥋🐉 = 💪", "Po + Chameleon + Legend"], category: "Trending" },
  { title: "Godzilla x Kong", year: 2024, clues: ["titans.team_up(); hollow_earth();", "🦖🦍💥 = 👑", "Monsters + Alliance + Battle"], category: "Trending" },
  { title: "Alien Romulus", year: 2024, clues: ["xenomorph.terror(); space.horror();", "👽🚀😱 = 💀", "Ripley + New Gen + Sci-Fi"], category: "Trending" }
];

export const getDailyMovie = (): Movie => {
  const dayIndex = Math.floor(Date.now() / 86400000) % movies.length;
  return movies[dayIndex];
};

export const getRandomMovie = (): Movie => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};
