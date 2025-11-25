const MOVIES = [
    // 1970s
    { title: "The Godfather", year: 1972, rating: "R", description: "A powerful crime dynasty patriarch transfers control of his clandestine empire to his reluctant youngest son." },
    { title: "The Godfather Part II", year: 1974, rating: "R", description: "The rise and fall of a mafia dynasty told through parallel stories of Vito's past and Michael's present ruthlessness." },
    { title: "A Clockwork Orange", year: 1971, rating: "R", description: "A disturbing exploration of free will and societal control through the eyes of a charismatic young ultraviolent criminal." },
    { title: "Apocalypse Now", year: 1979, rating: "R", description: "A surreal military mission upriver reveals the horrifying madness lurking beneath the surface of the Vietnam War." },
    { title: "Rocky", year: 1976, rating: "PG", description: "An underdog Philadelphia boxer gets an unlikely shot at the heavyweight championship and a chance to prove himself" },
    { title: "Jaws", year: 1975, rating: "PG", description: "A beach resort town is terrorized by a colossal shark, forcing a police chief, marine biologist, and grizzled hunter to confront it." },
    { title: "Star Wars: Episode IV – A New Hope", year: 1977, rating: "PG", description: "A young farm boy joins a rebellion against an evil galactic empire with the help of a wise mentor and charismatic smugglers." },
    { title: "Alien", year: 1979, rating: "R", description: "A spaceship crew awakens an unstoppable extraterrestrial creature that hunts them one by one in the darkness of space." },
    { title: "Taxi Driver", year: 1976, rating: "R", description: "A disturbed NYC cabbie's loneliness and obsessions spiral into violence as he navigates the city's seedy underbelly." },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: "R", description: "A charming con man fakes insanity to escape prison but challenges the oppressive system of a mental institution." },
    { title: "The Exorcist", year: 1973, rating: "R", description: "Two priests attempt to save a young girl possessed by a terrifying demonic force in this groundbreaking horror masterpiece." },
    { title: "Halloween", year: 1978, rating: "R", description: "An escaped mental patient returns to his hometown on Halloween night to kill a group of unsuspecting teenagers." },
    { title: "Close Encounters of the Third Kind", year: 1977, rating: "PG", description: "An ordinary man becomes obsessed with mysterious UFO sightings and joins scientists investigating extraterrestrial contact." },
    { title: "The Deer Hunter", year: 1978, rating: "R", description: "Three Pennsylvania steelworkers are forever changed when captured by the Viet Cong in this haunting war drama." },
    { title: "Monty Python and the Holy Grail", year: 1975, rating: "PG", description: "King Arthur and his knights embark on an absurdist quest for the Holy Grail filled with ridiculous obstacles and anarchic humor." },
    { title: "Serpico", year: 1973, rating: "R", description: "An honest cop fights corruption in the NYPD while battling institutional resistance and personal isolation." },
    { title: "Chinatown", year: 1974, rating: "R", description: "A cynical private detective uncovers a dark web of corruption, murder, and family secrets in 1930s Los Angeles." },
    { title: "The French Connection", year: 1971, rating: "R", description: "Two NYPD detectives pursue heroin smugglers through the streets of New York in this gritty cops-and-criminals thriller." },
    { title: "Young Frankenstein", year: 1974, rating: "PG", description: "A young scientist follows in his grandfather's footsteps and creates a monster in this hilarious classic monster comedy." },
    { title: "Network", year: 1976, rating: "R", description: "A desperate news anchor's emotional breakdown becomes a TV sensation in this scathing satire of media manipulation." },
    { title: "Rocky II", year: 1979, rating: "PG", description: "Rocky returns for a rematch with Apollo Creed while struggling with personal challenges and proving he's a true contender." },
    { title: "Smokey and the Bandit", year: 1977, rating: "PG", description: "A charming outlaw and his accomplice race across the South in a high-speed game of cat-and-mouse with a relentless truck driver." },
    { title: "Willy Wonka & the Chocolate Factory", year: 1971, rating: "G", description: "A poor boy wins a golden ticket to tour a magical chocolate factory and its eccentric, candy-crafting owner." },
    { title: "Superman", year: 1978, rating: "PG", description: "An alien orphan with incredible powers hides among humans while fighting to save his adopted city from destruction." },
    { title: "Saturday Night Fever", year: 1977, rating: "R", description: "A blue-collar disco dancer dreams of escape through dance competitions in this gritty look at 1970s New York nightlife." },
    { title: "The Omen", year: 1976, rating: "R", description: "An ambassador and his wife discover their adopted son may be the Antichrist in this demonic horror thriller." },
    { title: "All the President's Men", year: 1976, rating: "PG", description: "Two Washington Post reporters uncover the Watergate scandal through dogged investigative journalism and risky sources." },
    { title: "The Warriors", year: 1979, rating: "R", description: "A street gang falsely accused of murder must fight their way home across hostile NYC neighborhoods in a single night." },
    { title: "Mean Streets", year: 1973, rating: "R", description: "A small-time mobster navigates the violent and corrupt underworld of New York's Little Italy with conflicted morality." },
    { title: "The Last Picture Show", year: 1971, rating: "R", description: "A high school football star's coming-of-age summer in a dying Texas town becomes a bittersweet farewell to innocence." },
    { title: "The Conversation", year: 1974, rating: "PG", description: "A paranoid surveillance expert becomes entangled in a dangerous conspiracy after recording a mysterious couple's conversation." },
    { title: "Assault on Precinct 13", year: 1976, rating: "R", description: "A police station under siege by a violent street gang must unite its cops and criminals to survive the night." },
    { title: "Carrie", year: 1976, rating: "R", description: "A bullied teenage girl with telekinetic powers unleashes terrifying revenge on her tormentors at prom night." },
    { title: "Enter the Dragon", year: 1973, rating: "R", description: "A martial arts master goes undercover to infiltrate a crime lord's island fortress in this Bruce Lee classic." },
    { title: "Dog Day Afternoon", year: 1975, rating: "R", description: "A desperate man's bank robbery to pay for his partner's sex change surgery spirals into an intense hostage crisis." },
    { title: "Patton", year: 1970, rating: "PG", description: "The life and military campaigns of the legendary WWII general George Patton, told through his bold leadership and controversial tactics." },
    { title: "The Sting", year: 1973, rating: "PG", description: "Two con artists team up to pull off an elaborate revenge scam against a ruthless mob boss in 1930s Chicago." },
    { title: "The Bad News Bears", year: 1976, rating: "PG", description: "A gruff former baseball player coaches a ragtag group of misfit kids to surprisingly competitive levels." },
    { title: "Logan's Run", year: 1976, rating: "PG", description: "In a futuristic domed city, people are executed at 30, but one man rebels and escapes to discover the truth outside." },
    { title: "Westworld", year: 1973, rating: "PG", description: "A theme park where guests can live out their fantasies with robot cowboys and gunslinger adventures turns deadly." },
    { title: "The Andromeda Strain", year: 1971, rating: "G", description: "A team of scientists race to contain a deadly extraterrestrial microorganism before it destroys humanity." },
    { title: "The Taking of Pelham 123", year: 1974, rating: "R", description: "Subway hijackers holding hostages negotiate with a transit cop in this tense cat-and-mouse thriller set in NYC." },
    { title: "The Towering Inferno", year: 1974, rating: "PG", description: "Residents and firefighters battle a catastrophic fire in the world's tallest building in this disaster epic." },
    { title: "Papillon", year: 1973, rating: "PG", description: "A wrongly convicted man endures brutal prison conditions while planning his escape across the treacherous Devil's Island." },
    { title: "Annie Hall", year: 1977, rating: "PG", description: "A neurotic New York comedian's on-and-off romance with a quirky woman unfolds in this romantic comedy masterpiece." },
    { title: "American Graffiti", year: 1973, rating: "PG", description: "Four teenagers spend their last night before college cruising, racing, and falling in love in 1960s California." },
    { title: "Jabberwocky", year: 1977, rating: "PG", description: "A bumbling peasant accidentally stumbles into the role of hero when a fearsome monster threatens a medieval kingdom." },
    { title: "The Pink Panther Strikes Again", year: 1976, rating: "PG", description: "The bumbling Inspector Clouseau hunts a fugitive with a vendetta to kill him across exotic locations worldwide." },
  
    // 1980s
    { title: "The Empire Strikes Back", year: 1980, rating: "PG", description: "The Rebel Alliance faces devastating defeats as Darth Vader pursues Luke Skywalker across the galaxy in this epic sequel." },
    { title: "Raiders of the Lost Ark", year: 1981, rating: "PG", description: "An adventurous archaeologist races against Nazis to find the legendary Ark of the Covenant hidden in exotic locations worldwide." },
    { title: "E.T. the Extra-Terrestrial", year: 1982, rating: "PG", description: "A lonely boy befriends a stranded alien and helps it phone home while evading government authorities." },
    { title: "The Shining", year: 1980, rating: "R", description: "A family isolated in a snowbound hotel descends into madness as the building's evil supernatural forces take hold." },
    { title: "Blade Runner", year: 1982, rating: "R", description: "A retired cop hunts rogue humanoid androids in a neon-soaked futuristic Los Angeles while questioning his own humanity." },
    { title: "Back to the Future", year: 1985, rating: "PG", description: "A teenage boy accidentally travels back in time and must reunite his parents before he's erased from existence." },
    { title: "The Terminator", year: 1984, rating: "R", description: "A cyborg assassin travels through time to kill the mother of humanity's future leader in this sci-fi action thriller." },
    { title: "Die Hard", year: 1988, rating: "R", description: "A cop battles terrorists who've taken hostages in a high-rise office building on Christmas Eve." },
    { title: "Ghostbusters", year: 1984, rating: "PG", description: "Four misfits start a ghost-catching business and face an apocalyptic supernatural threat in New York City." },
    { title: "The Goonies", year: 1985, rating: "PG", description: "A group of kids embark on a treasure hunt to save their neighborhood from foreclosure and discover pirate gold." },
    { title: "Aliens", year: 1986, rating: "R", description: "A soldier returns to a space colony to fight a horde of extraterrestrial creatures in this action-packed horror sequel." },
    { title: "Raging Bull", year: 1980, rating: "R", description: "The violent rise and fall of boxer Jake LaMotta told through brutal fight sequences and personal turmoil." },
    { title: "Scarface", year: 1983, rating: "R", description: "A ruthless Colombian cocaine dealer claws his way to power in Miami's drug underworld with bloody determination." },
    { title: "Top Gun", year: 1986, rating: "PG", description: "Elite Navy pilots compete for status while one hotshot pilot learns to work as a team during Cold War tensions." },
    { title: "The Breakfast Club", year: 1985, rating: "R", description: "Five high school students from different cliques bond during Saturday detention and reveal their hidden vulnerabilities." },
    { title: "Ferris Bueller's Day Off", year: 1986, rating: "PG-13", description: "A charming teenager fakes illness to skip school and takes Chicago on an unforgettable adventure with friends." },
    { title: "The Thing", year: 1982, rating: "R", description: "An alien shapeshifter infiltrates an isolated Antarctic research station, forcing paranoid soldiers to trust no one." },
    { title: "The Princess Bride", year: 1987, rating: "PG", description: "A fairy tale adventure with swordplay, giants, and true love as a young man rescues his beloved from captors." },
    { title: "Who Framed Roger Rabbit", year: 1988, rating: "PG", description: "A detective uncovers a conspiracy while investigating a murder in a world where cartoons and humans coexist." },
    { title: "Stand by Me", year: 1986, rating: "R", description: "Four boys embark on a coming-of-age journey to find a dead body and discover themselves along the way." },
    { title: "Indiana Jones and the Temple of Doom", year: 1984, rating: "PG", description: "An adventurer infiltrates a death cult and rescues enslaved children in the Indian jungle." },
    { title: "Indiana Jones and the Last Crusade", year: 1989, rating: "PG-13", description: "Indiana Jones teams with his estranged father to find the Holy Grail before the Nazis do." },
    { title: "The Karate Kid", year: 1984, rating: "PG", description: "A bullied boy learns martial arts from an elderly master and gains confidence through discipline and mentorship." },
    { title: "The NeverEnding Story", year: 1984, rating: "PG", description: "A boy reading a magical book discovers he's part of the story and must save a fantasy world from destruction." },
    { title: "Beverly Hills Cop", year: 1984, rating: "R", description: "A wise-cracking Detroit cop chases a case to Beverly Hills and clashes with upscale law enforcement culture." },
    { title: "Gremlins", year: 1984, rating: "PG", description: "A young man's Christmas gift of a mysterious creature spawns destructive chaos when care instructions are violated." },
    { title: "Platoon", year: 1986, rating: "R", description: "A young American soldier arrives in Vietnam and witnesses the moral corruption of war firsthand." },
    { title: "Predator", year: 1987, rating: "R", description: "Elite soldiers are hunted in the jungle by an alien creature with advanced technology and deadly weapons." },
    { title: "Full Metal Jacket", year: 1987, rating: "R", description: "A brutal look at Marine training and the Vietnam War through the eyes of a cynical recruit and his friend." },
    { title: "Big", year: 1988, rating: "PG", description: "A child magically transforms into an adult and navigates corporate life and romance while longing to return home." },
    { title: "Labyrinth", year: 1986, rating: "PG", description: "A girl enters a magical maze to rescue her baby brother from a goblin king in this fantastical musical adventure." },
    { title: "Dirty Dancing", year: 1987, rating: "PG-13", description: "A sheltered girl falls for a dance instructor at a summer resort and discovers independence through passion and movement." },
    { title: "When Harry Met Sally", year: 1989, rating: "R", description: "Two friends debate whether men and women can be platonic as they slowly realize they're perfect for each other." },
    { title: "The Outsiders", year: 1983, rating: "PG", description: "Rival gangs clash in 1960s Oklahoma as a teenager faces hardship while searching for identity and belonging." },
    { title: "Coming to America", year: 1988, rating: "R", description: "An African prince travels to Queens to find a bride and discovers America while working an ordinary job." },
    { title: "Footloose", year: 1984, rating: "PG", description: "A teen brings dancing to a small conservative town where it's been banned, challenging the community's traditions." },
    { title: "The Lost Boys", year: 1987, rating: "R", description: "A family moves to a beach town unaware it's a haven for vampires in this stylish horror-comedy." },
    { title: "Stand and Deliver", year: 1988, rating: "PG", description: "An inspiring teacher motivates struggling Latino students to excel in calculus and prove their potential." },
    { title: "Bill & Ted's Excellent Adventure", year: 1989, rating: "PG", description: "Two dim-witted high school friends travel through time to gather historical figures for their history project." },
    { title: "Little Shop of Horrors", year: 1986, rating: "PG-13", description: "A timid florist's assistant secretly cultivates a man-eating plant that grows increasingly carnivorous and demanding." },
    { title: "WarGames", year: 1983, rating: "PG", description: "A teenage hacker accidentally launches a U.S. defense computer system threatening nuclear war with the Soviet Union." },
    { title: "The Untouchables", year: 1987, rating: "R", description: "Federal agents battle Chicago's most ruthless Prohibition-era gangster in this violent crime drama." },
    { title: "The Fly", year: 1986, rating: "R", description: "A scientist's teleportation experiment goes horribly wrong, gradually transforming him into a grotesque insect hybrid." },
    { title: "Poltergeist", year: 1982, rating: "PG", description: " A family experiences terrifying supernatural phenomena in their suburban home caused by angry spirits underneath." },
    { title: "The Color Purple", year: 1985, rating: "PG-13", description: "A Black woman's journey from oppression to self-discovery and love set in the American South." },
    { title: "Rain Man", year: 1988, rating: "R", description: "A selfish man discovers his autistic brother is a savant with incredible mathematical abilities during a cross-country journey." },
    { title: "First Blood", year: 1982, rating: "R", description: "A Vietnam vet hunted by police in a small town fights for survival in the forest." },
    { title: "Planes, Trains, and Automobiles", year: 1987, rating: "R", description: "Two strangers stuck together during holiday travel transform their antagonism into an unlikely friendship." },
    { title: "The Abyss", year: 1989, rating: "PG-13", description: "Workers at an underwater drilling platform encounter a mysterious phenomenon while government forces close in." },
    { title: "RoboCop", year: 1987, rating: "R", description: "A slain cop is resurrected as an unstoppable cyborg enforcer in a dystopian crime-ridden future Detroit." },
    { title: "Flashdance", year: 1983, rating: "R", description: "A welder with dreams of professional dancing works multiple jobs to afford a prestigious dance academy audition." },
    { title: "My Neighbor Totoro", year: 1988, rating: "G", description: "Two sisters move to the countryside and encounter friendly forest spirits in this whimsical Studio Ghibli classic." },
    { title: "The Dark Crystal", year: 1982, rating: "PG", description: "A young creature embarks on a quest to heal a shattered crystal and restore light to a dark fantasy realm." },
    { title: "Escape from New York", year: 1981, rating: "R", description: "A hardened criminal is sent into a walled-off Manhattan island prison to rescue the U.S. President." },
    { title: "Revenge of the Nerds", year: 1984, rating: "R", description: "Bullied nerds take on the jocks by creating their own fraternity and gaining social respect." },
    { title: "An American Werewolf in London", year: 1981, rating: "R", description: "An American tourist is bitten by a werewolf and transforms into a monster while haunted by his friend's ghost." },
    { title: "Beetlejuice", year: 1988, rating: "PG", description: "A recently deceased couple hires a crude ghost to haunt the new inhabitants of their house." },
    { title: "The Great Outdoors", year: 1988, rating: "PG", description: "Two families clash at a lakeside vacation resort in this comedy of nature, mishaps, and unexpected bonding." },
    { title: "Spaceballs", year: 1987, rating: "PG", description: "A rogue space captain and his crew parody Star Wars while battling an evil villain in this comedic sci-fi adventure." },
    { title: "The Running Man", year: 1987, rating: "R", description: "A man falsely imprisoned in a dystopian future must survive a deadly televised game show or die trying." },
    { title: "Trading Places", year: 1983, rating: "R", description: "Two wealthy men wager that social status is irrelevant by swapping the lives of a rich snob and a street hustler." },
    { title: "Tootsie", year: 1982, rating: "PG", description: "An unemployed actor disguises himself as a woman to land a television role and falls in love with his co-star." },
    { title: "Field of Dreams", year: 1989, rating: "PG", description: "A farmer builds a baseball diamond in his cornfield based on a mysterious voice and reunites with his late father." },
    { title: "The Burbs", year: 1989, rating: "PG-13", description: "Suburban neighbors grow suspicious of their new mysterious next-door residents during a summer of escalating paranoia." },
    { title: "The Color of Money", year: 1986, rating: "R", description: "An aging pool player mentors a brash young talent and returns to the game he once dominated." },
    { title: "The Hitcher", year: 1986, rating: "R", description: "A motorist picks up a mysterious hitchhiker who turns out to be a relentless serial killer terrorizing the highway." },
    { title: "The NeverEnding Story II: The Next Chapter", year: 1989, rating: "PG", description: "A boy and a girl enter the magical realm again to stop a vengeful sorceress from destroying Fantasia." },
    { title: "The Secret of NIMH", year: 1982, rating: "PG", description: "A mother mouse seeks help from intelligent lab rats to save her family from a farmer's plow." },
    { title: "Big Trouble in Little China", year: 1986, rating: "PG-13", description: "A trucker helps his friend's fiancée escape a powerful sorcerer in San Francisco's magical Chinatown." },
    { title: "The Adventures of Baron Munchausen", year: 1988, rating: "PG", description: "An eccentric adventurer tells fantastical tales of his impossible exploits across exotic lands." },
    { title: "Weird Science", year: 1985, rating: "PG-13", description: "Two nerdy teenagers use a computer to create the perfect woman, only to face magical chaos and personal growth." },
    { title: "Teen Wolf", year: 1985, rating: "PG-13", description: "A high school basketball player discovers he's a werewolf and uses his newfound powers to gain popularity." },
    { title: "Scanners", year: 1981, rating: "R", description: "Humans with telepathic and telekinetic powers clash as a secret organization hunts them down." },
    { title: "St. Elmo's Fire", year: 1985, rating: "R", description: "Seven young professionals navigate love, ambition, and friendship in Washington D.C. after college." },
    { title: "Red Dawn", year: 1984, rating: "PG-13", description: "American teenagers fight Soviet and Cuban invaders in an alternate history scenario of occupied Colorado." },
    { title: "The Dead Zone", year: 1983, rating: "R", description: "A man awakens from a coma with psychic powers and must decide whether to kill an ambitious politician." },
    { title: "The Elephant Man", year: 1980, rating: "PG", description: "A severely deformed man finds compassion and dignity when rescued by a sympathetic doctor in Victorian London." },
    { title: "The Last Starfighter", year: 1984, rating: "PG", description: "A video game champion is recruited to fight an intergalactic war with advanced alien technology." },
    { title: "Risky Business", year: 1983, rating: "R", description: "A suburban teen throws a wild party that spirals out of control and jeopardizes his college future." },
    { title: "The Blues Brothers", year: 1980, rating: "R", description: "Two brother musicians reunite to save the orphanage they grew up in by putting together a band and touring." },
    { title: "The Golden Child", year: 1986, rating: "PG-13", description: "A detective rescues a mystical child from an evil sorcerer in this action-adventure fantasy." },
    { title: "Caddyshack", year: 1980, rating: "R", description: "Golfers, groundskeepers, and club members clash at an exclusive country club in this comedy of errors and eccentrics." },
    { title: "Heathers", year: 1989, rating: "R", description: "A clique of popular teenagers are mysteriously killed one by one in this dark satire of high school culture." },
    { title: "The Natural", year: 1984, rating: "PG", description: "A talented baseball player makes an unlikely comeback and chases his dream of glory during a magical season." },
    { title: "Flash Gordon", year: 1980, rating: "PG", description: "A space adventurer battles a tyrannical alien emperor to save Earth in this colorful campy sci-fi adventure." },
    { title: "Dirty Rotten Scoundrels", year: 1988, rating: "PG", description: "Two con artists compete over who can swindle a wealthy American heiress in a French Riviera scheme." },
    { title: "Romancing the Stone", year: 1984, rating: "PG", description: "A timid romance novelist is pulled into a real adventure in the jungle with a roguish fortune hunter." },
    { title: "Working Girl", year: 1988, rating: "R", description: "An ambitious secretary from Staten Island uses deception to climb the corporate ladder in 1980s Manhattan." },
    { title: "My Dinner with Andre", year: 1981, rating: "PG", description: "Two friends share an introspective conversation over dinner about life, theater, and existence in this philosophical film." },
    { title: "Terms of Endearment", year: 1983, rating: "PG", description: "Three generations of women navigate love, motherhood, and loss in this emotional family drama." },
    { title: "Purple Rain", year: 1984, rating: "R", description: "A Minneapolis musician battles rivals while pursuing fame and falling in love in this rock-music drama." },
    { title: "Child's Play", year: 1988, rating: "R", description: "A boy receives a possessed doll as a gift that murders people around him in this horror classic." },
    { title: "The Fog", year: 1980, rating: "R", description: "A mysterious fog rolls into a California coastal town, releasing vengeful supernatural forces from the past." },
    { title: "Scrooged", year: 1988, rating: "PG-13", description: "A cynical TV executive is visited by ghosts on Christmas Eve and given a chance to redeem his life." },
    { title: "Airplane!", year: 1980, rating: "PG", description: "A nervous pilot with a fear of flying must land a plane during an emergency in this slapstick comedy." },
    { title: "The Fox and the Hound", year: 1981, rating: "G", description: "A young fox and hound dog form an unlikely friendship despite being natural enemies." },
    { title: "The Little Mermaid", year: 1989, rating: "G", description: "A mermaid princess falls for a human prince and makes a dangerous deal with a sea witch to become human." },
    { title: "Short Circuit", year: 1986, rating: "PG", description: "A military robot gains sentience and escapes, searching for love and acceptance while evading capture." },
    { title: "The Black Cauldron", year: 1985, rating: "PG", description: "A young pig herder and a princess battle a dark lord to prevent an evil cauldron from corrupting the world." },
    { title: "The Secret of My Success", year: 1987, rating: "PG-13", description: "A young man from Kansas schemes his way up the corporate ladder while hiding his true identity." },
    { title: "All Dogs Go to Heaven", year: 1989, rating: "G", description: "A gambling dog escapes heaven to reunite with a girl he loved and exacts revenge on his killer." },
    { title: "Time Bandits", year: 1981, rating: "PG", description: "A boy joins a group of dwarf time travelers on adventures through history while evading an evil presence." },
    { title: "National Lampoon's Vacation", year: 1983, rating: "R", description: "A bumbling family's cross-country road trip to an amusement park becomes a hilarious disaster." },
    { title: "Police Academy", year: 1984, rating: "R", description: "Misfits and oddballs enter police academy training and somehow graduate to protect society." },
    { title: "Back to the Future Part II", year: 1989, rating: "PG", description: "Time travelers battle Biff's evil alternate timeline while jumping between the past, present, and future." },
    { title: "Robocop 2", year: 1990, rating: "R", description: "A cyborg cop battles a drug kingpin and a giant enforcement robot in a crime-ridden Detroit." },
  
    // 1990s
    { title: "Goodfellas", year: 1990, rating: "R", description: "A mobster recounts his rise through the ranks of organized crime, revealing the glamour and violence of mafia life." },
    { title: "The Silence of the Lambs", year: 1991, rating: "R", description: "An FBI trainee seeks help from a brilliant cannibalistic psychiatrist imprisoned to catch a serial killer." },
    { title: "Terminator 2: Judgment Day", year: 1991, rating: "R", description: "A reprogrammed cyborg protects a boy destined to lead humanity's resistance against machines." },
    { title: "Jurassic Park", year: 1993, rating: "PG-13", description: "Scientists create a theme park with cloned dinosaurs that escape, forcing visitors to survive prehistoric terror." },
    { title: "Pulp Fiction", year: 1994, rating: "R", description: "Interconnected stories of criminals, gangsters, and boxers collide in this nonlinear crime masterpiece." },
    { title: "The Shawshank Redemption", year: 1994, rating: "R", description: "An innocent man imprisoned for murder forms a lifelong friendship and plans an elaborate escape." },
    { title: "Forrest Gump", year: 1994, rating: "PG-13", description: "A simpleton with a heart of gold witnesses and influences major historical events throughout his extraordinary life." },
    { title: "The Lion King", year: 1994, rating: "G", description: "A young lion prince flees after his father's death, unaware of his uncle's treachery, and must reclaim his throne." },
    { title: "Toy Story", year: 1995, rating: "G", description: "A cowboy doll and space ranger action figure compete for a boy's affection while accidentally getting lost." },
    { title: "Se7en", year: 1995, rating: "R", description: "Two detectives hunt a serial killer who commits murders based on the seven deadly sins in this grim thriller." },
    { title: "Braveheart", year: 1995, rating: "R", description: "A Scottish warrior leads a rebellion against English occupation to free his country in this epic historical drama." },
    { title: "The Matrix", year: 1999, rating: "R", description: "A hacker discovers reality is a simulation created by sentient machines enslaving humanity." },
    { title: "Fight Club", year: 1999, rating: "R", description: "An insomniac office worker and a charismatic soap salesman start an underground bare-knuckle fighting club with dark consequences." },
    { title: "Saving Private Ryan", year: 1998, rating: "R", description: "American soldiers storm the beaches of Normandy and then search for one private to bring him home." },
    { title: "Titanic", year: 1997, rating: "PG-13", description: "A poor artist and upper-class woman fall in love aboard the RMS Titanic before it sinks in this epic romance." },
    { title: "The Sixth Sense", year: 1999, rating: "PG-13", description: "A child psychologist helps a frightened boy who can see dead people uncover the truth about his mysterious patient." },
    { title: "Beauty and the Beast", year: 1991, rating: "G", description: "A young woman falls in love with a cursed prince and discovers true beauty lies within." },
    { title: "Home Alone", year: 1990, rating: "PG", description: "A forgotten boy defends his home from burglars using creative booby traps while his family is on vacation." },
    { title: "The Big Lebowski", year: 1998, rating: "R", description: "A laid-back bowling bum gets entangled in a kidnapping plot involving mistaken identity and eccentric characters." },
    { title: "Groundhog Day", year: 1993, rating: "PG", description: "A cynical weatherman relives the same day repeatedly and gradually transforms into a better person." },
    { title: "Aladdin", year: 1992, rating: "G", description: "A street urchin finds a magic lamp, befriends a genie, and falls for a princess while battling a sorcerer." },
    { title: "The Green Mile", year: 1999, rating: "R", description: "Death row inmates experience miracles through a guard with supernatural healing powers on the Green Mile." },
    { title: "The Fugitive", year: 1993, rating: "PG-13", description: "A doctor wrongly convicted of murdering his wife escapes and hunts down the real killer while evading capture." },
    { title: "Scream", year: 1996, rating: "R", description: "A masked killer targets teenagers in a small town, forcing survivors to decode his horror movie rules." },
    { title: "Apollo 13", year: 1995, rating: "PG-13", description: "Astronauts attempt a dangerous moon mission that becomes a fight for survival after an explosion cripples their spacecraft." },
    { title: "The Truman Show", year: 1998, rating: "PG-13", description: "An unaware man discovers his entire world is a massive television show controlled by a hidden creator." },
    { title: "The Rock", year: 1996, rating: "R", description: "A team of commandos teams with a chemistry expert to stop rogue soldiers holding San Francisco hostage with nerve gas." },
    { title: "Léon: The Professional", year: 1994, rating: "R", description: "A lonely hitman protects a young orphan girl and teaches her his lethal skills while hunted by her family's killers." },
    { title: "Speed", year: 1994, rating: "R", description: "A cop must keep a bomb-rigged bus moving above 50 mph to prevent it from exploding on Los Angeles streets." },
    { title: "Twister", year: 1996, rating: "PG-13", description: "Storm chasers pursue dangerous tornadoes to deploy tracking devices while battling an obsessed rival." },
    { title: "Men in Black", year: 1997, rating: "PG-13", description: "A cop joins a secret agency that monitors and regulates alien activity living secretly on Earth." },
    { title: "Mission: Impossible", year: 1996, rating: "PG-13", description: "An agent framed for his team's death goes rogue to uncover the real traitor before he's killed." },
    { title: "Starship Troopers", year: 1997, rating: "R", description: "Soldiers fight giant alien insects in a militaristic future where citizenship is earned through service." },
    { title: "Independence Day", year: 1996, rating: "PG-13", description: "Aliens invade Earth, and a ragtag team of pilots, scientists, and civilians unite to fight them off." },
    { title: "Heat", year: 1995, rating: "R", description: "A master thief and obsessive detective engaged in a professional rivalry finally face off directly." },
    { title: "The Fifth Element", year: 1997, rating: "PG-13", description: "A retired soldier helps a mysterious alien woman and a taxi driver stop an evil dark planet from destroying Earth." },
    { title: "Toy Story 2", year: 1999, rating: "G", description: "Woody is stolen by a toy collector, forcing Buzz and friends to rescue him before he's sold at auction." },
    { title: "The Iron Giant", year: 1999, rating: "PG", description: "A boy befriends a mysterious giant robot and helps it hide from the military during the Cold War." },
    { title: "American Beauty", year: 1999, rating: "R", description: "A suburban man's midlife crisis unravels his family's repressed secrets in this dark character study." },
    { title: "The Blair Witch Project", year: 1999, rating: "R", description: "Three filmmakers vanish in the woods while documenting a local legend in this found-footage horror film." },
    { title: "Clueless", year: 1995, rating: "PG-13", description: "A wealthy teenage matchmaker navigates high school social hierarchies while discovering love herself." },
    { title: "Casper", year: 1995, rating: "PG", description: "A friendly ghost helps a paranormal expert's daughter adjust to a haunted mansion while seeking his own purpose." },
    { title: "A Bug's Life", year: 1998, rating: "G", description: "An inventive ant rebels against the colony's oppressive grasshopper overlords in this animated adventure." },
    { title: "Armageddon", year: 1998, rating: "PG-13", description: "Oil drillers are trained as astronauts to land on an asteroid and nuke it before it destroys Earth." },
    { title: "The Mummy", year: 1999, rating: "PG-13", description: "An adventurer awakens an ancient cursed mummy in Egypt and races to stop its supernatural rampage." },
    { title: "Hook", year: 1991, rating: "PG", description: "An aging Peter Pan returns to Neverland to rescue his children from Captain Hook in this fantasy adventure." },
    { title: "Point Break", year: 1991, rating: "R", description: "An FBI agent goes undercover as a surfer to infiltrate a gang of intelligent bank robbers." },
    { title: "Bad Boys", year: 1995, rating: "R", description: "Two Miami detectives clash on their styles while protecting a witness from ruthless drug dealers." },
    { title: "Star Trek: First Contact", year: 1996, rating: "PG-13", description: "The Enterprise crew battles the Borg in the past to prevent aliens from conquering Earth." },
    { title: "The Crow", year: 1994, rating: "R", description: "A murdered musician is resurrected and takes revenge on those who killed him and his fiancée." },
    { title: "As Good as It Gets", year: 1997, rating: "PG-13", description: "A misanthropic writer and waitress form an unlikely bond while dealing with personal demons." },
    { title: "Dumb and Dumber", year: 1994, rating: "PG-13", description: "Two dim-witted friends road trip to Aspen to return money to a woman one of them loves." },
    { title: "The Mask", year: 1994, rating: "PG-13", description: "A meek banker puts on a magical mask that transforms him into a wisecracking green cartoon character." },
    { title: "Die Hard with a Vengeance", year: 1995, rating: "R", description: "John McClane teams with a Black electrician to stop a terrorist planning bombings across New York City." },
    { title: "Waterworld", year: 1995, rating: "PG-13", description: "In a flooded future Earth, a drifter helps a girl and woman survive tyrannical marauders." },
    { title: "The Nightmare Before Christmas", year: 1993, rating: "PG", description: "The Pumpkin King stumbles into Christmas Town and attempts to make Christmas his own macabre holiday." },
    { title: "Space Jam", year: 1996, rating: "PG", description: "Michael Jordan joins cartoon characters to play basketball against alien invaders for their freedom." },
    { title: "Big Daddy", year: 1999, rating: "PG-13", description: "A man raises his friend's abandoned daughter and falls in love while fighting for custody." },
    { title: "Austin Powers: International Man of Mystery", year: 1997, rating: "PG-13", description: "A groovy 1960s secret agent awakens in the 1990s to battle his arch-nemesis Dr. Evil." },
    { title: "The English Patient", year: 1996, rating: "R", description: "A burned man's mysterious past is revealed through flashbacks of forbidden romance during WWII." },
    { title: "Jerry Maguire", year: 1996, rating: "R", description: "A sports agent starts over after being fired and finds redemption through client loyalty and love." },
    { title: "A Few Good Men", year: 1992, rating: "R", description: "Military lawyers defend a Marine accused of murder while uncovering a deadly cover-up conspiracy." },
    { title: "The Usual Suspects", year: 1995, rating: "R", description: "Five criminals are brought together and one admits to being the notorious criminal mastermind Keyser Söze." },
    { title: "Trainspotting", year: 1996, rating: "R", description: "Scottish heroin addicts navigate addiction, friendship, and betrayal in this gritty drama." },
    { title: "Philadelphia", year: 1993, rating: "PG-13", description: "A lawyer with AIDS sues his firm for wrongful termination in this landmark drama about discrimination." },
    { title: "Good Will Hunting", year: 1997, rating: "R", description: "A brilliant janitor with emotional trauma works with a psychologist to unlock his potential." },
    { title: "The Birdcage", year: 1996, rating: "R", description: "Two gay men pretend to be straight for their son's fiancée's conservative family in this comedy." },
    { title: "The Mummy Returns", year: 1999, rating: "PG-13", description: "The adventurer and mummy-hunter face new supernatural threats and a cursed artifact in ancient Egypt." },
    { title: "Dark City", year: 1998, rating: "R", description: "Citizens of a perpetually dark city discover their memories are being manipulated by mysterious beings." },
    { title: "Fear and Loathing in Las Vegas", year: 1998, rating: "R", description: "A journalist and his lawyer embark on a drug-fueled road trip to Las Vegas." },
    { title: "Mission: Impossible 2", year: 2000, rating: "PG-13", description: "An agent goes rogue to stop a former colleague from unleashing a bioweapon virus." },
    { title: "Fargo", year: 1996, rating: "R", description: "A car salesman's kidnapping scheme goes horribly wrong in this Coen Brothers crime masterpiece." },
    { title: "American History X", year: 1998, rating: "R", description: "A former white supremacist fights to prevent his younger brother from following his hateful path." },
    { title: "The Thin Red Line", year: 1998, rating: "R", description: "Soldiers battle over a strategic island while contemplating the meaning of war and life." },
    { title: "Sling Blade", year: 1996, rating: "R", description: "A mentally ill man returns home after decades in an institution and forms a protective bond with a boy." },
    { title: "Seven Years in Tibet", year: 1997, rating: "PG-13", description: "An Austrian mountaineer's obsession with climbing Everest evolves into friendship with a Tibetan lama." },
    { title: "The Game", year: 1997, rating: "R", description: "A wealthy man's brother gives him a mysterious game that blurs reality and games with psychological intensity." },
    { title: "The Hunchback of Notre Dame", year: 1996, rating: "G", description: "A disfigured bellringer falls for a gypsy girl while fighting injustice in medieval Paris." },
    { title: "The Lost World: Jurassic Park", year: 1997, rating: "PG-13", description: "Scientists and hunters navigate an island of dinosaurs in this sequel to Jurassic Park." },
    { title: "Anastasia", year: 1997, rating: "G", description: "An orphan girl may be a lost Russian princess in this animated musical adventure." },
    { title: "The Saint", year: 1997, rating: "PG-13", description: "A master thief falls in love with a brilliant scientist while working for a mysterious employer." },
    { title: "The Devil's Advocate", year: 1997, rating: "R", description: "A hotshot lawyer realizes his powerful mentor may actually be the Devil himself." },
    { title: "The Negotiator", year: 1998, rating: "R", description: "A respected cop becomes a hostage negotiator forced to take hostages himself to prove his innocence." },
    { title: "Rounders", year: 1998, rating: "R", description: "A reformed poker player returns to the high-stakes gambling world to save a friend from Russian mobsters." },
    { title: "Pleasantville", year: 1998, rating: "PG-13", description: "Two siblings transported into a 1950s sitcom begin changing the black-and-white world through rebellion." },
    { title: "Jackie Brown", year: 1997, rating: "R", description: "A flight attendant and arms dealer plays multiple sides against each other to escape with her freedom." },
    { title: "Outbreak", year: 1995, rating: "R", description: "Medical experts race to stop a deadly virus from spreading through a California town." },
    { title: "The Frighteners", year: 1996, rating: "R", description: "A con artist uses supernatural abilities to communicate with ghosts and catch a vengeful spirit." },
    { title: "Event Horizon", year: 1997, rating: "R", description: "A rescue crew investigates a mysterious reappeared spaceship that harbors terrifying supernatural forces." },
    { title: "Broken Arrow", year: 1996, rating: "R", description: "Fighter pilots in possession of nuclear warheads must stop terrorists in this action thriller." },
    { title: "The Cable Guy", year: 1996, rating: "PG-13", description: "A lonely cable installer becomes obsessively attached to his customer in this dark comedy." },
    { title: "Demolition Man", year: 1993, rating: "R", description: "A cop from the past awakens in a peaceful future and must stop a villain from his former time." },
    { title: "The Pelican Brief", year: 1993, rating: "PG-13", description: "A law student discovers a conspiracy behind a Supreme Court assassination in this thriller." },
    { title: "Ghost", year: 1990, rating: "PG-13", description: "A murdered man's spirit protects his fiancée from his killer with the help of a psychic medium." },
    { title: "The Bodyguard", year: 1992, rating: "R", description: "A Secret Service agent falls for the pop star he's hired to protect from a stalker." },
    { title: "Thelma & Louise", year: 1991, rating: "R", description: "Two friends embark on a road trip that becomes an escape from the law and patriarchal oppression." },
    { title: "Sister Act", year: 1992, rating: "PG", description: "A nightclub singer hides as a nun in a convent and revitalizes the choir in this comedy." },
    { title: "The Rocketeer", year: 1991, rating: "PG", description: "A stunt pilot discovers a jetpack and becomes a hero while battling Nazis and gangsters." },
    { title: "Babe", year: 1995, rating: "G", description: "A pig raised by sheepdogs dreams of becoming a sheepdog himself in this charming family film." },
    { title: "The Long Kiss Goodnight", year: 1996, rating: "R", description: "A retired assassin recovers her memory and must protect her daughter from her violent past." },
    { title: "The Insider", year: 1999, rating: "R", description: "A tobacco scientist leaks damaging information and faces corporate retaliation in this legal thriller." },
    { title: "The Parent Trap", year: 1998, rating: "PG", description: "Twin girls separated at birth reunite and scheme to get their divorced parents back together." },
    { title: "The Prince of Egypt", year: 1998, rating: "PG", description: "An Egyptian prince discovers his Hebrew heritage and leads his people to freedom in this animated epic." },
    { title: "Scream 2", year: 1997, rating: "R", description: "The killings resume at a college where survivors of the original massacre study film." },
    { title: "Liar Liar", year: 1997, rating: "PG-13", description: "A lawyer cursed to tell only truth for 24 hours must reevaluate his life and values." },
    { title: "Boys Don't Cry", year: 1999, rating: "R", description: "A transgender man navigates rural Nebraska while hiding his identity from new friends." },
    { title: "Flubber", year: 1997, rating: "PG", description: "An absent-minded professor invents a rubber-like substance that bounces and causes chaos." },
    { title: "The Horse Whisperer", year: 1998, rating: "PG-13", description: "A magazine editor falls for a Montana horse rancher while working on a story in this romance." },
    { title: "Wild Wild West", year: 1999, rating: "PG-13", description: " Two Secret Service agents team up to stop a madman's steam-powered contraption in the Old West." },
    { title: "Air Force One", year: 1997, rating: "R", description: "The President fights hijackers aboard his aircraft to save his family and country." },
    { title: "Four Weddings and a Funeral", year: 1994, rating: "R", description: "A group of British friends navigate romantic chaos through weddings and a funeral." },
    { title: "The Piano", year: 1993, rating: "R", description: "A mute woman communicates through her piano and falls into a passionate affair in colonial New Zealand." },
    { title: "Mulan", year: 1998, rating: "G", description: "A young woman disguises herself as a man to fight in the Chinese army and save her country." },
    { title: "Jumanji", year: 1995, rating: "PG", description: "A boy who rolls magical dice unleashes jungle chaos in his suburban home." },
    { title: "The Hunt for Red October", year: 1990, rating: "PG", description: "A Soviet submarine captain defects and teams with an American to evade both navies." },
    { title: "The Boondock Saints", year: 1999, rating: "R", description: " Irish-American brothers become vigilante assassins eliminating criminals in Boston." },
    { title: "The Rainmaker", year: 1997, rating: "PG-13", description: "A newly graduated lawyer takes on a corrupt insurance company to help a dying boy." },
    { title: "A Time to Kill", year: 1996, rating: "R", description: "A Black man guns down his daughter's rapists, forcing the town to confront racial justice." },
    { title: "The Quick and the Dead", year: 1995, rating: "R", description: "A woman enters a dueling competition seeking revenge against the gunslinger who destroyed her life." },
    { title: "Crimson Tide", year: 1995, rating: "R", description: "A submarine captain and executive officer clash over whether to launch nuclear missiles." },
    { title: "Galaxy Quest", year: 1999, rating: "PG", description: "Washed-up TV actors are recruited by aliens who think their show is a historical documentary." },
    { title: "Bowfinger", year: 1999, rating: "PG-13", description: "A struggling director cons a paranoid movie star into appearing in his low-budget film." },
    { title: "Deep Impact", year: 1998, rating: "PG-13", description: "A comet threatens Earth and ordinary people band together to prevent catastrophe." },
    { title: "The General's Daughter", year: 1999, rating: "R", description: "Investigators uncover military secrets while solving a general's daughter's murder." },
    { title: "The Thomas Crown Affair", year: 1999, rating: "R", description: "A wealthy art thief and insurance investigator engage in romance and a cat-and-mouse heist game." },
    { title: "Contact", year: 1997, rating: "PG", description: "A scientist receives alien signals and travels through a wormhole on a journey of faith and discovery." },
    { title: "Ronin", year: 1998, rating: "R", description: "Former spies are hired to steal a mysterious briefcase, leading to action and betrayal." },
    { title: "Scream 3", year: 2000, rating: "R", description: "The original survivors face a new killer targeting a movie franchise based on their story." },
    { title: "Three Kings", year: 1999, rating: "R", description: "Soldiers discover gold during the Gulf War and attempt to smuggle it out while helping civilians." },
    { title: "Eyes Wide Shut", year: 1999, rating: "R", description: "An upper-class doctor explores sexuality and jealousy after his wife admits a fantasy about another man." },
  
    // 2000s
    { title: "Gladiator", year: 2000, rating: "R", description: "A betrayed Roman general becomes a slave fighter and seeks revenge against the emperor who murdered his family." },
    { title: "Memento", year: 2000, rating: "R", description: "A man with short-term memory loss uses tattoos and notes to track down his wife's killer in reverse chronological order." },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: "PG-13", description: "A young hobbit and his companions embark on a quest to destroy a powerful ring in the fires of Mount Doom." },
    { title: "The Lord of the Rings: The Two Towers", year: 2002, rating: "PG-13", description: "The fellowship splits as they battle toward Mordor while defending against an army of orcs and treachery." },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: "PG-13", description: "The final confrontation approaches as hobbits journey to destroy the ring while allies defend against invasion." },
    { title: "Spider-Man", year: 2002, rating: "PG-13", description: "A teen bitten by a radioactive spider gains powers and becomes a vigilante while balancing love and responsibility." },
    { title: "Spider-Man 2", year: 2004, rating: "PG-13", description: "Spider-Man battles a mad scientist with mechanical arms while struggling with his secret identity and romance." },
    { title: "The Dark Knight", year: 2008, rating: "PG-13", description: "Batman faces a brilliant anarchist clown terrorist who pushes Gotham into chaos while testing moral boundaries." },
    { title: "Batman Begins", year: 2005, rating: "PG-13", description: "A traumatized billionaire trains to become a vigilante and fights his city's corruption and a sinister plot." },
    { title: "Iron Man", year: 2008, rating: "PG-13", description: "A weapons manufacturer builds a high-tech suit and becomes a superhero while confronting his past weapons sales." },
    { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, rating: "PG-13", description: "A pirate and a blacksmith join forces to rescue a cursed captain and break an ancient curse on his crew." },
    { title: "The Incredibles", year: 2004, rating: "PG", description: "A retired superhero family is drawn back into action to save the world from a vengeful former fan." },
    { title: "Finding Nemo", year: 2003, rating: "G", description: "A clownfish searches the ocean for his captured son with help from a friendly but forgetful companion." },
    { title: "Shrek", year: 2001, rating: "PG", description: "An ogre and a wisecracking donkey rescue a princess from a tower in this subversive fairy tale comedy." },
    { title: "Monsters, Inc.", year: 2001, rating: "G", description: "A scaredy-cat monster and his furry friend hide a human girl while uncovering corporate corruption." },
    { title: "The Bourne Identity", year: 2002, rating: "PG-13", description: "An amnesiac assassin hunted by his former agency must uncover his true identity while evading capture." },
    { title: "The Departed", year: 2006, rating: "R", description: "A cop and a mobster planted as moles in each other's organizations clash in this Boston crime thriller." },
    { title: "No Country for Old Men", year: 2007, rating: "R", description: "A hunter stumbles upon drug money and is hunted by a relentless killer in a neo-western crime drama." },
    { title: "There Will Be Blood", year: 2007, rating: "R", description: "An ambitious oilman's ruthless climb in the California frontier creates conflict with a charismatic preacher." },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: "R", description: "A man discovers his ex-lover erased him from her memory and undergoes the same procedure with bittersweet consequences." },
    { title: "Kill Bill: Vol. 1", year: 2003, rating: "R", description: "A pregnant bride left for dead awakens from a coma and begins hunting down her assassins in stylish fashion." },
    { title: "Kill Bill: Vol. 2", year: 2004, rating: "R", description: "The Bride continues her revenge quest, confronting her former lover and the final architect of her fate." },
    { title: "Casino Royale", year: 2006, rating: "PG-13", description: "A new James Bond infiltrates a high-stakes poker game to stop a terrorist financier in this gritty reboot." },
    { title: "The Hangover", year: 2009, rating: "R", description: "Four friends lose their groom during a Vegas bachelor party and must retrace their crazy night to find him." },
    { title: "Superbad", year: 2007, rating: "R", description: "Two teenage best friends attempt to score alcohol for a party and learn about friendship and growing up." },
    { title: "Harry Potter and the Sorcerer's Stone", year: 2001, rating: "PG", description: "A young wizard attends magical school and discovers a plot to steal an immortality stone." },
    { title: "Harry Potter and the Prisoner of Azkaban", year: 2004, rating: "PG", description: "An escaped prisoner returns while a dangerous creature hunts Harry, revealing shocking truths about his past." },
    { title: "Pan's Labyrinth", year: 2006, rating: "R", description: "A girl in Spanish Civil War-era Spain finds a magical creature leading her into a dangerous fantasy world." },
    { title: "Oldboy", year: 2003, rating: "R", description: "A man imprisoned for 15 years seeks revenge on his mysterious captor in this brutal Korean thriller." },
    { title: "Donnie Darko", year: 2001, rating: "R", description: "A troubled teen experiences visions of a strange figure and time manipulation in this mind-bending drama." },
    { title: "300", year: 2006, rating: "R", description: "Spartan warriors make a heroic last stand against a massive Persian army in this stylized historical epic." },
    { title: "Avatar", year: 2009, rating: "PG-13", description: "A human infiltrates a blue-skinned alien civilization and joins them against his own people's conquest." },
    { title: "District 9", year: 2009, rating: "R", description: "An alien insect-like species lands in South Africa, creating conflict and exposing human prejudice." },
    { title: "I Am Legend", year: 2007, rating: "PG-13", description: "The last human survivor navigates a post-apocalyptic New York filled with vampire-like creatures." },
    { title: "Tropic Thunder", year: 2008, rating: "R", description: "Method-acting actors on a war film shoot are dropped into actual combat in this satirical action comedy." },
    { title: "Up", year: 2009, rating: "PG", description: "An elderly widower ties balloons to his house and accidentally takes a young boy on an adventure to South America." },
    { title: "WALL·E", year: 2008, rating: "G", description: "A trash-collecting robot discovers love and helps humanity reclaim an abandoned Earth in this silent romance." },
    { title: "Monsters vs Aliens", year: 2009, rating: "PG", description: "A woman transformed by a meteorite joins a team of monsters to fight an alien invasion." },
    { title: "Hulk", year: 2003, rating: "PG-13", description: "A scientist turns into a green monster when angered, grappling with his transformation and his father's past." },
    { title: "Troy", year: 2004, rating: "R", description: "Greek warriors lay siege to Troy in this epic retelling of the Trojan War featuring Achilles and Hector." },
    { title: "Hot Fuzz", year: 2007, rating: "R", description: "A London cop transferred to a quiet village uncovers a murderous conspiracy in this action-comedy." },
    { title: "Shaun of the Dead", year: 2004, rating: "R", description: "A lazy Londoner and his friend survive a zombie apocalypse while protecting loved ones in this horror-comedy." },
    { title: "Cloverfield", year: 2008, rating: "PG-13", description: "Found footage of a massive monster attacking New York City as friends search for a missing loved one." },
    { title: "Ocean's Eleven", year: 2001, rating: "PG-13", description: "A charismatic thief assembles a team to pull off an impossible heist on Las Vegas casinos." },
    { title: "Fantastic Four", year: 2005, rating: "PG-13", description: "A team of superheroes with cosmic powers battles a sinister scientist bent on global domination." },
    { title: "The Hurt Locker", year: 2008, rating: "R", description: "A bomb disposal expert becomes addicted to the adrenaline of defusing explosives in Iraq." },
    { title: "Gran Torino", year: 2008, rating: "R", description: "A Korean War veteran confronts gang violence and his own prejudices to protect his Asian neighbors." },
    { title: "The Reader", year: 2008, rating: "R", description: "A man reconnects with his former lover, a woman hiding shameful secrets about her past in Nazi Germany." },
    { title: "The Last Samurai", year: 2003, rating: "R", description: "An American soldier leads samurai warriors against Japan's modernization and discovers honor in battle." },
    { title: "School of Rock", year: 2003, rating: "PG-13", description: "A failed musician poses as a teacher and inspires students through rock and roll." },
    { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, rating: "PG-13", description: "A chauvinist news anchor's world changes when a talented female reporter joins his team." },
    { title: "V for Vendetta", year: 2005, rating: "R", description: "A masked vigilante fights a totalitarian government in a dystopian future while recruiting a reluctant ally." },
    { title: "The Prestige", year: 2006, rating: "PG-13", description: "Two magicians engage in a deadly competition to create the ultimate illusion with shocking twists." },
    { title: "Slumdog Millionaire", year: 2008, rating: "R", description: "A poor Indian teen from the slums wins a game show, flashbacks revealing how he knew each answer." },
    { title: "The Wrestler", year: 2008, rating: "R", description: "An aging pro wrestler struggling with health issues faces his mortality and estrangement from his daughter." },
    { title: "American Gangster", year: 2007, rating: "R", description: "A drug dealer rises to power while a determined cop pursues him in 1970s Harlem." },
    { title: "Wanted", year: 2008, rating: "R", description: "An assassin organization recruits a cubicle worker into their ranks to fulfill an assassination prophecy." },
    { title: "King Kong", year: 2005, rating: "PG-13", description: "Explorers encounter a giant ape on a mysterious island and capture it, leading to tragedy and chaos." },
    { title: "Cinderella Man", year: 2005, rating: "PG-13", description: "A Depression-era boxer makes an unlikely comeback to support his struggling family." },
    { title: "The Bourne Ultimatum", year: 2007, rating: "PG-13", description: "A hunted amnesiac assassin confronts his past and the organization that created him in this espionage thriller." },
    { title: "The Curious Case of Benjamin Button", year: 2008, rating: "PG-13", description: "A man born old ages in reverse, experiencing life backward while falling in love with a woman aging normally." },
    { title: "American Psycho", year: 2000, rating: "R", description: "A wealthy Manhattan investment banker hides a secret life as a serial killer in this dark satire." },
    { title: "8 Mile", year: 2002, rating: "R", description: "An aspiring rapper battles rivals and personal demons in Detroit rap battle competitions." },
    { title: "Cast Away", year: 2000, rating: "PG-13", description: "A plane crash survivor must adapt to life on a remote island for years with only a volleyball for company." },
    { title: "Minority Report", year: 2002, rating: "PG-13", description: "A cop in a precrime unit discovers he's been framed for a murder he hasn't committed yet." },
    { title: "Collateral", year: 2004, rating: "R", description: "A taxi driver spends a night with a contract killer hunting witnesses while questioning his own life choices." },
    { title: "Inside Man", year: 2006, rating: "R", description: "A brilliant bank robber and a detective engage in an intellectual battle of wits during a hostage standoff." },
    { title: "Zombieland", year: 2009, rating: "R", description: "Survivors of a zombie apocalypse form an unlikely family while heading to a rumored safe zone." },
    { title: "Watchmen", year: 2009, rating: "R", description: "Retired superheroes are pulled back when one of their own is murdered in this dark alternative history." },
    { title: "Star Trek", year: 2009, rating: "PG-13", description: "A young Kirk and Spock become starship captains and face a vengeful time traveler threatening the Federation." },
    { title: "Children of Men", year: 2006, rating: "R", description: "In a dystopian future where humans can't reproduce, a refugee becomes humanity's last hope." },
    { title: "The Others", year: 2001, rating: "PG-13", description: "A woman in a mysterious mansion with her children encounters eerie supernatural occurrences." },
    { title: "The 40-Year-Old Virgin", year: 2005, rating: "R", description: "Friends help an inexperienced man find love while learning about themselves in this raunchy comedy." },
    { title: "Wedding Crashers", year: 2005, rating: "R", description: "Two divorce mediators crash weddings to meet women until they fall for sisters at a family gathering." },
    { title: "The Pursuit of Happyness", year: 2006, rating: "PG-13", description: "A struggling salesman and his son face homelessness while pursuing a better life in San Francisco." },
    { title: "Matchstick Men", year: 2003, rating: "PG-13", description: "A con artist with psychological issues pulls off elaborate scams while searching for his daughter." },
    { title: "The Terminal", year: 2004, rating: "PG-13", description: "A foreign traveler becomes stuck in an airport terminal and builds a life within its confines." },
    { title: "Road to Perdition", year: 2002, rating: "R", description: "A mobster and his son flee after being betrayed, leading to a violent quest for revenge." },
    { title: "Man on Fire", year: 2004, rating: "R", description: "A former assassin becomes a bodyguard for a girl and takes brutal revenge when she's kidnapped." },
    { title: "The Assassination of Jesse James by the Coward Robert Ford", year: 2007, rating: "R", description: "A delusional outlaw admirer betrays Jesse James for glory in this slow-burn Western." },
    { title: "Ocean's Twelve", year: 2004, rating: "PG-13", description: "The Ocean's crew reunites to pull off a heist in Europe while being pursued by a former victim." },
    { title: "Ocean's Thirteen", year: 2007, rating: "PG-13", description: "The crew takes down a casino owner who betrays one of their own in Las Vegas." },
    { title: "The Illusionist", year: 2006, rating: "PG-13", description: "A magician uses illusions to stop an abusive crown prince from marrying his true love." },
    { title: "The Lincoln Lawyer", year: 2011, rating: "R", description: "A defense attorney working from his car takes a case that could expose powerful enemies." },
    { title: "I, Robot", year: 2004, rating: "PG-13", description: "A cop investigating robot crimes uncovers a conspiracy involving artificial intelligence and free will." },
    { title: "Ladder 49", year: 2004, rating: "PG-13", description: "A firefighter's greatest rescue attempt goes wrong, leading to flashbacks of his life and service." },
    { title: "Reign of Fire", year: 2002, rating: "PG-13", description: "Dragons awakened in medieval times return in modern times and devastate civilization." },
    { title: "Gone Baby Gone", year: 2007, rating: "R", description: "Boston detectives investigate a kidnapping and uncover moral complexities in their working-class neighborhood." },
    { title: "Enemy at the Gates", year: 2001, rating: "R", description: "A Soviet sniper and a German counterpart face off during the Battle of Stalingrad." },
    { title: "Blood Diamond", year: 2006, rating: "R", description: "A journalist, mercenary, and African native fight for a rare diamond amid Sierra Leone's brutal civil war." },
    { title: "Hot Rod", year: 2007, rating: "PG-13", description: "A stunt-loving slacker builds a hot rod to challenge his abusive stepfather to a fight." },
    { title: "Death Proof", year: 2007, rating: "R", description: "A stunt driver uses his car as a weapon to kill women, until he meets his match." },
    { title: "The Italian Job", year: 2003, rating: "PG-13", description: "A team of thieves orchestrates an elaborate heist in Los Angeles to steal gold from their betrayer." },
    { title: "The Road", year: 2009, rating: "R", description: "A father and son journey through a post-apocalyptic wasteland searching for survival and safety." },
    { title: "Constantine", year: 2005, rating: "R", description: "A demon hunter battles angels and demons while investigating supernatural crimes in modern Los Angeles." },
    { title: "The Patriot", year: 2000, rating: "R", description: "A reluctant farmer leads a militia against the British during the American Revolution." },
    { title: "Mean Girls", year: 2004, rating: "PG-13", description: "A homeschooled girl navigates high school social politics and exposes the cruelty of popular cliques." },
    { title: "The Da Vinci Code", year: 2006, rating: "PG-13", description: "A professor and a cryptographer race to solve a murder and uncover religious secrets in Europe." },
    { title: "The Blind Side", year: 2009, rating: "PG-13", description: "A wealthy family takes in a homeless athlete and helps him become a football star while changing his life." },
    { title: "The Day After Tomorrow", year: 2004, rating: "PG-13", description: "A climatologist must save his son as a sudden ice age descends on the world." },
    { title: "Hidalgo", year: 2004, rating: "PG-13", description: "An American horse rider and his Arabian stallion race across the desert in this exotic adventure." },
    { title: "The Ring", year: 2002, rating: "PG-13", description: "A reporter investigates a cursed videotape that kills viewers seven days after watching." },
    { title: "The Village", year: 2004, rating: "PG-13", description: "Villagers isolated from the world discover dangerous truths about their sheltered existence." },
    { title: "Van Helsing", year: 2004, rating: "PG-13", description: "A monster hunter battles Dracula, Werewolves, and Frankenstein's monster in this action adventure." },
    { title: "Tears of the Sun", year: 2003, rating: "R", description: "A Navy SEAL team rescues a nun from African warlords in this action-driven military drama." },
    { title: "House of Flying Daggers", year: 2004, rating: "PG-13", description: "A cop infiltrates a rebel group in Tang Dynasty China, caught between duty and love." },
    { title: "The Machinist", year: 2004, rating: "R", description: "An insomniac factory worker's grip on reality unravels while he investigates a workplace accident." },
    { title: "The Bourne Supremacy", year: 2004, rating: "PG-13", description: "An amnesiac assassin is framed for a CIA operation and hunted across Europe." },
    { title: "Phone Booth", year: 2002, rating: "R", description: "A man trapped in a phone booth by a sniper must confess his sins or be killed." },
    { title: "Rescue Dawn", year: 2006, rating: "PG-13", description: "A Vietnam War pilot survives being shot down and must escape from Laotian captors." },
    { title: "Shutter Island", year: 2010, rating: "R", description: "A detective investigates a disappearance at a mental hospital with shocking psychological twists." },
    { title: "The Book of Eli", year: 2010, rating: "R", description: "A lone wanderer protects a sacred book in a post-apocalyptic wasteland filled with danger." },
    { title: "The Hangover Part II", year: 2011, rating: "R", description: "The buddies reunite in Bangkok and recreate mayhem trying to find their missing friend." },
    { title: "Poseidon", year: 2006, rating: "PG-13", description: "Passengers must escape a capsized cruise ship in this disaster action thriller." },
    { title: "Alpha Dog", year: 2006, rating: "R", description: "A wealthy teen kidnaps a rival's younger brother, leading to tragic consequences in this dark crime drama." },
    { title: "The Mist", year: 2007, rating: "R", description: "Mysterious creatures emerge from a mist trapping shoppers in a supermarket with dwindling supplies." },
    { title: "30 Days of Night", year: 2007, rating: "R", description: "A town in Alaska experiences 30 days of darkness and becomes hunted by vampires." },
    { title: "The Taking of Pelham 123", year: 2009, rating: "R", description: "A hijacker and a transit dispatcher engage in a battle of wits over a New York City subway train." },
    { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, rating: "PG", description: "Children discover a magical world through a wardrobe and help a lion stop eternal winter." },
    { title: "Dreamgirls", year: 2006, rating: "PG-13", description: "Three girls rise to stardom in the music industry while navigating love, betrayal, and ambition." },
    { title: "The Town", year: 2010, rating: "R", description: "Boston bank robbers plan one final heist while being pursued by an obsessive FBI agent." },
    { title: "Clash of the Titans", year: 2010, rating: "PG-13", description: "A demigod and his warriors battle mythical creatures to save humanity from the gods' wrath." },
    { title: "Hancock", year: 2008, rating: "PG-13", description: "A drunk, irresponsible superhero reforms after helping a man change his public image." },
    { title: "National Treasure", year: 2004, rating: "PG", description: "A treasure hunter and his friends pursue clues to find a legendary national treasure." },
    { title: "National Treasure: Book of Secrets", year: 2007, rating: "PG", description: "A treasure hunter clears his family's name by finding a secret book hidden throughout American history." },
    { title: "Pirates of the Caribbean: Dead Man's Chest", year: 2006, rating: "PG-13", description: "Jack Sparrow owes a blood debt to a cursed sea captain and must find a mystical heart." },
    { title: "Pirates of the Caribbean: At World's End", year: 2007, rating: "PG-13", description: "Pirates band together to fight a fearless captain rising from the depths in the final adventure." },
    { title: "Stardust", year: 2007, rating: "PG-13", description: "A young man ventures beyond his world to find a falling star and discovers an enchanted realm." },
    { title: "Sunshine", year: 1999, rating: "R", description: "A Jewish family's three-generation saga unfolds across Hungary's tumultuous 20th century history." },
  
    // 2010s
    { title: "Inception", year: 2010, rating: "PG-13", description: "A thief specializing in stealing secrets from dreams is offered a chance to erase his past by performing the impossible task of inception." },
    { title: "The Social Network", year: 2010, rating: "PG-13", description: "A Harvard student creates Facebook and becomes a billionaire while facing legal battles over its ownership and founding." },
    { title: "Mad Max: Fury Road", year: 2015, rating: "R", description: "A drifter and a rebellious captain battle across a post-apocalyptic wasteland in vehicles during a high-octane chase." },
    { title: "Interstellar", year: 2014, rating: "PG-13", description: "Astronauts travel through a wormhole near Saturn to find humanity a new home world as Earth dies." },
    { title: "The Avengers", year: 2012, rating: "PG-13", description: "Superheroes assemble to stop an alien invasion and protect Earth from destruction." },
    { title: "Avengers: Infinity War", year: 2018, rating: "PG-13", description: "Heroes unite against a powerful titan intent on collecting infinity stones to reshape the universe." },
    { title: "Avengers: Endgame", year: 2019, rating: "PG-13", description: "Remaining heroes use time travel to undo a villain's devastating snap and restore their fallen teammates." },
    { title: "Guardians of the Galaxy", year: 2014, rating: "PG-13", description: "Misfits and criminals band together as space outlaws to save the galaxy from destruction." },
    { title: "Black Panther", year: 2018, rating: "PG-13", description: "A king inherits a hidden African nation and must protect its secrets from those seeking its power." },
    { title: "Joker", year: 2019, rating: "R", description: "A struggling comedian with mental health issues spirals into madness and violence in a decaying Gotham City." },
    { title: "Get Out", year: 2017, rating: "R", description: "A Black man visits his white girlfriend's family and discovers a horrifying conspiracy targeting him." },
    { title: "Hereditary", year: 2018, rating: "R", description: "A family unravels as they discover a dark supernatural curse connected to their grandmother's death." },
    { title: "It", year: 2017, rating: "R", description: "A group of bullied kids band together to fight a shapeshifting evil creature that feeds on fear." },
    { title: "Frozen", year: 2013, rating: "PG", description: "Sisters with magical powers must reconcile to save their kingdom from eternal winter." },
    { title: "Moana", year: 2016, rating: "PG", description: "A sea-faring girl voyages across the ocean with a demigod to restore balance to the world." },
    { title: "Inside Out", year: 2015, rating: "PG", description: "Personified emotions guide an 11-year-old girl through life changes and emotional growth." },
    { title: "Toy Story 3", year: 2010, rating: "G", description: "Woody and his toy friends escape a daycare center and confront their mortality as their owner grows up." },
    { title: "Toy Story 4", year: 2019, rating: "G", description: "Woody discovers there's more to life than being owned when he's separated from Andy." },
    { title: "La La Land", year: 2016, rating: "PG-13", description: "A jazz musician and actress fall in love while pursuing their dreams in modern-day Los Angeles." },
    { title: "Whiplash", year: 2014, rating: "R", description: "A young drummer's obsession with perfection is pushed to dangerous extremes by his abusive instructor." },
    { title: "Django Unchained", year: 2012, rating: "R", description: "A freed slave and a bounty hunter search for his wife in the pre-Civil War South." },
    { title: "The Wolf of Wall Street", year: 2013, rating: "R", description: "A young broker builds a corrupt financial empire based on fraud and excess before facing consequences." },
    { title: "Skyfall", year: 2012, rating: "PG-13", description: "James Bond hunts a mysterious cyber-terrorist with a personal vendetta against MI6." },
    { title: "The Raid: Redemption", year: 2011, rating: "R", description: "An Indonesian police unit fights through a high-rise apartment building controlled by a drug lord." },
    { title: "John Wick", year: 2014, rating: "R", description: "A retired assassin is drawn back into his violent past when a criminal kills his dog." },
    { title: "Logan", year: 2017, rating: "R", description: "An aging Wolverine cares for a dying Professor X while protecting a young mutant girl." },
    { title: "Parasite", year: 2019, rating: "R", description: "A poor family scheme their way into employment with a wealthy household in this twisty social thriller." },
    { title: "1917", year: 2019, rating: "R", description: "Two soldiers race against time across No Man's Land in WWI to deliver a crucial message." },
    { title: "The Grand Budapest Hotel", year: 2014, rating: "R", description: "A concierge and his lobby boy navigate a theft and treasure hunt in a fantastical European hotel." },
    { title: "Captain America: The Winter Soldier", year: 2014, rating: "PG-13", description: "Captain America uncovers SHIELD corruption and fights a mysterious assassin from his past." },
    { title: "Thor: Ragnarok", year: 2017, rating: "PG-13", description: "Thor must escape a planet and save Asgard from destruction by an ancient force." },
    { title: "Deadpool", year: 2016, rating: "R", description: "A wisecracking assassin with regenerative powers hunts the man who disfigured him." },
    { title: "The Hunger Games", year: 2012, rating: "PG-13", description: "Teens are forced to fight to the death on live television in a dystopian future." },
    { title: "The Fault in Our Stars", year: 2014, rating: "PG-13", description: "Two cancer patients fall in love and embark on a life-changing journey together." },
    { title: "Arrival", year: 2016, rating: "PG-13", description: "A linguist attempts to communicate with aliens and discovers their language changes human perception." },
    { title: "The Conjuring", year: 2013, rating: "R", description: "Paranormal investigators help a family haunted by dark forces in their farmhouse." },
    { title: "Bird Box", year: 2018, rating: "R", description: "A mother blindfolded to survive must navigate a dangerous world of invisible death with her children." },
    { title: "The Imitation Game", year: 2014, rating: "PG-13", description: "A brilliant mathematician codes machines to break Nazi encryption during World War II." },
    { title: "Hacksaw Ridge", year: 2016, rating: "R", description: "A medic refuses to kill but saves lives on the front lines of the Battle of Okinawa." },
    { title: "Zootopia", year: 2016, rating: "PG", description: "A rabbit cop and fox con artist team up to solve a case in a city of anthropomorphic animals." },
    { title: "Rogue One: A Star Wars Story", year: 2016, rating: "PG-13", description: "Rebel spies team up to steal the Death Star plans in this prequel to the original Star Wars." },
    { title: "Star Wars: The Force Awakens", year: 2015, rating: "PG-13", description: "A new generation faces the rise of a dark side faction while seeking a legendary Jedi." },
    { title: "Frozen II", year: 2019, rating: "PG", description: "Elsa discovers the source of her powers and confronts ancient magic threatening her kingdom." },
    { title: "Baby Driver", year: 2017, rating: "R", description: "A getaway driver with tinnitus synchronized to music must escape his criminal connections." },
    { title: "The Maze Runner", year: 2014, rating: "PG-13", description: "Teens trapped in a deadly maze must uncover the truth about their mysterious prison." },
    { title: "The Martian", year: 2015, rating: "PG-13", description: "An astronaut stranded on Mars must use science and ingenuity to survive and signal rescue." },
    { title: "Jojo Rabbit", year: 2019, rating: "PG-13", description: "A boy with an imaginary Hitler friend befriends a Jewish girl hiding in his attic during WWII." },
    { title: "Doctor Sleep", year: 2019, rating: "R", description: "A man with psychic abilities confronts a cult harvesting people like him for immortality." },
    { title: "American Hustle", year: 2013, rating: "R", description: "Two con artists and an FBI agent engage in elaborate schemes and deception in the 1970s." },
    { title: "Creed", year: 2015, rating: "PG-13", description: "A boxer trains under Rocky Balboa to become a champion while honoring his father's legacy." },
    { title: "Creed II", year: 2018, rating: "PG-13", description: "Adonis Creed faces the son of Apollo Creed's former rival in the boxing ring." },
    { title: "Ford v Ferrari", year: 2019, rating: "PG-13", description: "A designer and driver team up to beat Ferrari at Le Mans with an experimental Ford GT40." },
    { title: "Spotlight", year: 2015, rating: "R", description: "Boston journalists investigate and expose the Catholic Church's priest abuse cover-up." },
    { title: "The Hateful Eight", year: 2015, rating: "R", description: "Eight strangers trapped in a cabin during a blizzard reveal dark secrets and suspicions." },
    { title: "Moonlight", year: 2016, rating: "R", description: "A Black man's life is told across three chapters as he discovers his identity and sexuality." },
    { title: "Hidden Figures", year: 2016, rating: "PG", description: "Black female mathematicians calculate crucial trajectories for NASA's space race missions." },
    { title: "A Star Is Born", year: 2018, rating: "R", description: "A famous musician helps a talented unknown singer launch her career while battling his own demons." },
    { title: "Split", year: 2016, rating: "PG-13", description: "A man with dissociative identity disorder kidnaps three girls, revealing a dangerous new personality." },
    { title: "Sicario", year: 2015, rating: "R", description: "An FBI agent is recruited for a dark mission in the Mexican drug war with hidden agendas." },
    { title: "The Shape of Water", year: 2017, rating: "R", description: "A mute woman falls for a captured amphibious creature in a Cold War-era government facility." },
    { title: "Minions", year: 2015, rating: "PG", description: "Tiny yellow creatures search for the world's most evil master to serve." },
    { title: "The Disaster Artist", year: 2017, rating: "R", description: "Two aspiring actors make the infamous cult-classic film 'The Room' in this comedic behind-the-scenes story." },
    { title: "The King's Speech", year: 2010, rating: "PG-13", description: "A British king with a stutter works with a speech therapist to find his voice as war approaches." },
    { title: "Lincoln", year: 2012, rating: "PG-13", description: "President Lincoln pursues abolishing slavery while navigating the Civil War and his fractured government." },
    { title: "Gravity", year: 2013, rating: "PG-13", description: "An astronaut stranded in space must survive colliding debris while returning to Earth." },
    { title: "The Nice Guys", year: 2016, rating: "R", description: "A tough enforcer and a private detective team up to solve a murder in 1970s Los Angeles." },
    { title: "The Babadook", year: 2014, rating: "Not Rated", description: "A widow and son confront a mysterious creature born from a mysterious children's book." },
    { title: "Edge of Tomorrow", year: 2014, rating: "PG-13", description: "A soldier gains the ability to relive the same day repeatedly to stop an alien invasion." },
    { title: "The Peanut Butter Falcon", year: 2019, rating: "PG-13", description: "A man with Down syndrome escapes a care facility to become a professional wrestler with a drifter's help." },
    { title: "Spider-Man: Far From Home", year: 2019, rating: "PG-13", description: "Spider-Man battles a mysterious elemental villain while on a school trip across Europe." },
    { title: "Doctor Strange", year: 2016, rating: "PG-13", description: "A brilliant surgeon becomes a sorcerer and protects Earth from mystical threats." },
    { title: "The Revenant", year: 2015, rating: "R", description: "A frontiersman survives a bear attack and brutal wilderness to seek revenge on those who wronged him." },
    { title: "The Fighter", year: 2010, rating: "R", description: "A boxer overcomes family dysfunction and his brother's management to become a champion." },
    { title: "The Accountant", year: 2016, rating: "R", description: "An autistic accountant with deadly skills works for criminals while a Treasury agent hunts him." },
    { title: "The Founder", year: 2016, rating: "PG-13", description: "A businessman builds McDonald's empire by exploiting the original founders' franchise concept." },
    { title: "The Big Short", year: 2015, rating: "R", description: "Investors recognize the 2008 financial crisis and profit while the economy collapses." },
    { title: "Snowden", year: 2016, rating: "R", description: "An NSA contractor reveals massive government surveillance programs, becoming a fugitive and whistleblower." },
    { title: "The Gift", year: 2015, rating: "R", description: "A mysterious man from the past resurfaces in a couple's life with disturbing intentions and secrets." },
    { title: "The Equalizer", year: 2014, rating: "R", description: "A retired agent emerges from anonymity to save a young girl from human traffickers." },
    { title: "The Meg", year: 2018, rating: "PG-13", description: "A rescue diver must battle a prehistoric megalodon shark threatening a seaside community." },
    { title: "13 Hours", year: 2016, rating: "R", description: "Private security contractors defend a U.S. compound during a terrorist attack in Libya." },
    { title: "Glass", year: 2019, rating: "PG-13", description: "A superhero, a split-personality man, and an unbreakable human are institutionalized together with dark consequences." },
    { title: "John Wick: Chapter 2", year: 2017, rating: "R", description: "The retired assassin is forced back into action to fulfill an old debt across European cities." },
    { title: "John Wick: Chapter 3 - Parabellum", year: 2019, rating: "R", description: "John Wick flees assassins across the globe after breaking the rules of the underground hitman organization." },
    { title: "Three Billboards Outside Ebbing, Missouri", year: 2017, rating: "R", description: "A woman rents billboards demanding justice for her daughter's murder, confronting a small town." },
    { title: "Call Me by Your Name", year: 2017, rating: "R", description: "Two men discover a sensual and transformative love affair during an Italian summer." },
    { title: "Blade Runner 2049", year: 2017, rating: "R", description: "A replicant blade runner searches for a long-lost child that could alter society's balance." },
    { title: "Dunkirk", year: 2017, rating: "PG-13", description: "Allied soldiers fight to survive and escape enemy forces at the beaches of Dunkirk in WWII." },
    { title: "Wonder Woman", year: 2017, rating: "PG-13", description: "An Amazonian warrior princess is trained to be the ultimate weapon against war." },
    { title: "Thor: The Dark World", year: 2013, rating: "PG-13", description: "Thor battles dark elves seeking an ancient weapon to reclaim their realm." },
    { title: "Captain America: The First Avenger", year: 2011, rating: "PG-13", description: "A weak soldier is transformed into a super-soldier to fight Nazis and stop a powerful weapon." },
    { title: "Captain America: Civil War", year: 2016, rating: "PG-13", description: "Superheroes are divided over government oversight in a conflict that tears the team apart." },
    { title: "Doctor Strange in the Multiverse of Madness", year: 2022, rating: "PG-13", description: "A sorcerer explores alternate realities and battles threats across multiple dimensions." },
    { title: "Ant-Man", year: 2015, rating: "PG-13", description: "A reformed thief uses a shrinking suit to pull off a heist and become a superhero." },
    { title: "Ant-Man and the Wasp", year: 2018, rating: "PG-13", description: "Ant-Man and the Wasp team up to rescue a missing scientist from the quantum realm." },
    { title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, rating: "PG-13", description: "A martial artist must confront his past and powerful father leading a secret organization." },
    { title: "Eternals", year: 2021, rating: "PG-13", description: "Ancient immortal beings emerge from hiding to fight an alien threat threatening humanity." },
    { title: "Black Widow", year: 2021, rating: "PG-13", description: "An assassin confronts her past with a dangerous spy organization while protecting her sister." },
  
    // 2020s
    // 2020s
    { title: "Dune", year: 2021, rating: "PG-13", description: "A young nobleman embarks on a dangerous mission on a desert planet filled with spice and political intrigue." },
    { title: "Dune: Part Two", year: 2024, rating: "PG-13", description: "Paul Atreides joins a desert rebellion and confronts his destiny while navigating betrayal and power." },
    { title: "Top Gun: Maverick", year: 2022, rating: "PG-13", description: "An aging pilot trains a new generation for a dangerous mission while confronting his past failures." },
    { title: "Spider-Man: No Way Home", year: 2021, rating: "PG-13", description: "Spider-Man's identity is exposed and villains from alternate dimensions tear apart his world." },
    { title: "Everything Everywhere All at Once", year: 2022, rating: "R", description: "A woman explores infinite universes to stop a being destroying all realities across dimensions." },
    { title: "Oppenheimer", year: 2023, rating: "R", description: "A physicist leads the Manhattan Project to create the atomic bomb with moral consequences." },
    { title: "Barbie", year: 2023, rating: "PG-13", description: "Barbie and Ken escape their plastic world and discover the real world's complexity and identity." },
    { title: "The Batman", year: 2022, rating: "PG-13", description: "A younger Batman hunts a serial killer murdering Gotham's elite while uncovering corruption." },
    { title: "A Quiet Place Part II", year: 2021, rating: "PG-13", description: "Survivors of silent creatures must continue their survival while discovering the monsters' origins." },
    { title: "The Invisible Man", year: 2020, rating: "R", description: "A woman is stalked by her abusive ex who becomes invisible, forcing her to prove his existence." },
    { title: "Soul", year: 2020, rating: "PG", description: "A musician's soul is separated from his body in the afterlife and must reconnect before his gig." },
    { title: "Turning Red", year: 2022, rating: "PG", description: "A girl transforms into a giant red panda and bonds with her mother over family secrets." },
    { title: "Encanto", year: 2021, rating: "PG", description: "A girl without magical powers must save her magical family and their enchanted house." },
    { title: "No Time to Die", year: 2021, rating: "PG-13", description: "James Bond retires but is pulled back for a final mission involving a mysterious villain." },
    { title: "Mission: Impossible – Dead Reckoning Part One", year: 2023, rating: "PG-13", description: "Ethan Hunt hunts a dangerous AI and battles former allies in a globe-trotting spy thriller." },
    { title: "The Suicide Squad", year: 2021, rating: "R", description: "Imprisoned villains are sent on a suicide mission to stop a government conspiracy." },
    { title: "Knives Out", year: 2019, rating: "PG-13", description: "A detective investigates a wealthy family after their patriarch's death revealing twisted secrets." },
    { title: "Glass Onion: A Knives Out Mystery", year: 2022, rating: "PG-13", description: "Detective Blanc returns to solve a murder among billionaires on a private island." },
    { title: "A Quiet Place", year: 2018, rating: "PG-13", description: "A family survives creatures that hunt by sound in a post-apocalyptic world." },
    { title: "Nope", year: 2022, rating: "R", description: "Ranch siblings encounter a mysterious threat in the sky above their property." },
    { title: "Luca", year: 2021, rating: "PG", description: "A sea monster boy hides his true form while befriending a human and pursuing adventures." },
    { title: "Wonka", year: 2023, rating: "PG", description: "A young Willy Wonka dreams of opening a chocolate factory despite obstacles from rivals." },
    { title: "King Richard", year: 2021, rating: "PG-13", description: "A father coaches his daughters into tennis champions despite growing up in poverty and crime." },
    { title: "The Whale", year: 2022, rating: "R", description: "An isolated recluse tries reconnecting with his estranged daughter after health complications." },
    { title: "The Menu", year: 2022, rating: "R", description: "Diners at an exclusive restaurant discover the chef has sinister intentions for his guests." },
    { title: "The Mitchells vs the Machines", year: 2021, rating: "PG", description: "A chaotic family unites to stop an AI uprising threatening to eliminate human relationships." },
    { title: "Evil Dead Rise", year: 2023, rating: "R", description: "A woman battles demonic forces that possess those around her in a cursed apartment building." },
    { title: "Smile", year: 2022, rating: "R", description: "A psychiatrist witnesses horrific events and becomes tormented by a sinister spreading curse." },
    { title: "Uncharted", year: 2022, rating: "PG-13", description: "A thief and fortune hunter search for treasure based on historical clues and adventure." },
    { title: "Red Notice", year: 2021, rating: "PG-13", description: "An FBI agent and art thief team up to catch a dangerous criminal in a globe-trotting heist." },
    { title: "The Adam Project", year: 2022, rating: "PG-13", description: "A pilot from the future travels back in time and teams with his younger self to save reality." },
    { title: "The Gray Man", year: 2022, rating: "PG-13", description: "A CIA assassin goes rogue and is hunted by former colleagues and mercenaries worldwide." },
    { title: "Tenet", year: 2020, rating: "PG-13", description: "A spy manipulates the flow of time to prevent a catastrophic attack on the world." },
    { title: "The Little Things", year: 2021, rating: "R", description: "A former detective teams with a young cop to hunt a serial killer in Los Angeles." },
    { title: "Creed III", year: 2023, rating: "PG-13", description: "Adonis Creed faces his childhood friend turned rival in a personal battle inside the ring." },
    { title: "Elvis", year: 2022, rating: "PG-13", description: "The life and career of Elvis Presley is told through his relationship with his manager." },
    { title: "Bullet Train", year: 2022, rating: "R", description: "Assassins with conflicting missions battle on a speeding Japanese bullet train." },
    { title: "Judas and the Black Messiah", year: 2021, rating: "R", description: "A Black Panther leader is betrayed by an FBI informant during the civil rights era." },
    { title: "Free Guy", year: 2021, rating: "PG-13", description: "An NPC in a video game becomes sentient and fights to save his world from deletion." },
    { title: "Jungle Cruise", year: 2021, rating: "PG-13", description: "A riverboat captain and a researcher search for a healing tree in the Amazon jungle." },
    { title: "Dungeons & Dragons: Honor Among Thieves", year: 2023, rating: "PG-13", description: "A rogue and her companions embark on a fantasy quest to save the world from resurrection." },
    { title: "The Creator", year: 2023, rating: "PG-13", description: "A soldier hunts artificial intelligence but discovers a child AI that could change everything." },
    { title: "The Tomorrow War", year: 2021, rating: "PG-13", description: "A man is drafted to fight an alien war in the future and returns to save humanity." },
    { title: "Killers of the Flower Moon", year: 2023, rating: "R", description: "Oil wealth brings murder to an Osage tribe as a man investigates crimes in 1920s Oklahoma." },
    { title: "Past Lives", year: 2023, rating: "PG-13", description: "A woman reconnects with a childhood love and contemplates fate, family, and alternate paths." },
    { title: "Talk to Me", year: 2022, rating: "R", description: "Teenagers play with a possessed hand and discover it channels malevolent supernatural forces." },
    { title: "M3GAN", year: 2023, rating: "PG-13", description: "An AI doll becomes dangerously protective of the girl she's designed to care for." },
    { title: "Cocaine Bear", year: 2023, rating: "R", description: "A bear intoxicated by cocaine becomes a rampaging predator in the Georgia wilderness." },
    { title: "Maestro", year: 2023, rating: "R", description: "A composer's obsession with perfection strains his marriage and personal relationships." },
    { title: "American Fiction", year: 2023, rating: "R", description: "A novelist writes a satire of Black literature that unexpectedly becomes a bestseller." },
    { title: "Anatomy of a Fall", year: 2023, rating: "R", description: "A woman is accused of murdering her husband, revealing secrets in their marriage." },
    { title: "Poor Things", year: 2023, rating: "R", description: "A woman created through science explores the world and challenges societal expectations." },
    { title: "Aftersun", year: 2022, rating: "PG-13", description: "A father and daughter spend a vacation together, revealing unspoken tensions and love." },
    { title: "All Quiet on the Western Front", year: 2022, rating: "R", description: "German soldiers experience the horrors of World War I and the loss of youth and innocence." },
    { title: "Close", year: 2022, rating: "Not Rated", description: "Two boys share an intense friendship that becomes complicated as they grow older." },
    { title: "Tár", year: 2022, rating: "R", description: "A renowned conductor's life unravels when her abusive behavior catches up with her." },
    { title: "Avatar: The Way of Water", year: 2022, rating: "PG-13", description: "The Sully family escapes their home and adapts to ocean life on Pandora." },
    { title: "Aquaman and the Lost Kingdom", year: 2023, rating: "PG-13", description: "Aquaman teams with his rival to save his kingdom from an ancient underwater threat." },
    { title: "Aquaman", year: 2018, rating: "PG-13", description: "An underwater kingdom's half-human heir must claim his throne and prevent a war." },
    { title: "Deadpool & Wolverine", year: 2024, rating: "R", description: "A wisecracking mercenary and a gruff mutant team up across multiverses for chaos and laughs." },
    { title: "Inside Out 2", year: 2024, rating: "PG", description: "New emotions emerge as a teenager navigates high school relationships and growing up." },
    { title: "Twisters", year: 2024, rating: "PG-13", description: "Storm chasers hunt tornadoes while their past rivalry resurfaces amid dangerous weather." }
];

const DINNER = [
    // Italian Cuisine
    { name: "Spaghetti Carbonara", category: "Italian" },
    { name: "Lasagna", category: "Italian" },
    { name: "Fettuccine Alfredo", category: "Italian" },
    { name: "Penne Arrabbiata", category: "Italian" },
    { name: "Risotto Mushroom", category: "Italian" },
    { name: "Osso Buco", category: "Italian" },
    { name: "Tiramisu", category: "Italian Dessert" },
    { name: "Eggplant Parmesan", category: "Italian" },
    { name: "Ravioli with Pesto", category: "Italian" },
    { name: "Minestrone Soup", category: "Italian" },
    
    // Mexican Cuisine
    { name: "Chicken Enchiladas", category: "Mexican" },
    { name: "Beef Tacos", category: "Mexican" },
    { name: "Chile Relleno", category: "Mexican" },
    { name: "Carne Asada", category: "Mexican" },
    { name: "Chiles en Nogada", category: "Mexican" },
    { name: "Pollo con Mole", category: "Mexican" },
    { name: "Street Tacos", category: "Mexican" },
    { name: "Quesadillas with Cheese", category: "Mexican" },
    { name: "Pozole Rojo", category: "Mexican" },
    { name: "Chiles Stuffed with Queso", category: "Mexican" },
    
    // American Cuisine
    { name: "Grilled Hamburgers", category: "American" },
    { name: "BBQ Ribs", category: "American" },
    { name: "Fried Chicken", category: "American" },
    { name: "Meatloaf with Mashed Potatoes", category: "American" },
    { name: "Mac and Cheese", category: "American" },
    { name: "Pulled Pork Sandwich", category: "American" },
    { name: "Pot Roast", category: "American" },
    { name: "Grilled Steak", category: "American" },
    { name: "Chicken and Dumplings", category: "American" },
    { name: "New York Cheesecake", category: "American Dessert" },
    
    // Asian Cuisine
    { name: "Kung Pao Chicken", category: "Asian" },
    { name: "Pad Thai", category: "Asian" },
    { name: "Beef Teriyaki", category: "Asian" },
    { name: "Fried Rice", category: "Asian" },
    { name: "Sushi Rolls", category: "Asian" },
    { name: "Ramen Noodles", category: "Asian" },
    { name: "Sesame Chicken", category: "Asian" },
    { name: "Pho", category: "Asian" },
    { name: "General Tso's Chicken", category: "Asian" },
    { name: "Lo Mein Noodles", category: "Asian" },
    
    // Mediterranean/Greek
    { name: "Moussaka", category: "Mediterranean" },
    { name: "Souvlaki", category: "Mediterranean" },
    { name: "Greek Salad with Feta", category: "Mediterranean" },
    { name: "Spanakopita", category: "Mediterranean" },
    { name: "Falafel Wraps", category: "Mediterranean" },
    { name: "Tzatziki with Pita", category: "Mediterranean" },
    { name: "Hummus Platter", category: "Mediterranean" },
    { name: "Tabbouleh Salad", category: "Mediterranean" },
    { name: "Grilled Octopus", category: "Mediterranean" },
    { name: "Baklava", category: "Mediterranean Dessert" },
    
    // Indian Cuisine
    { name: "Butter Chicken", category: "Indian" },
    { name: "Chicken Tikka Masala", category: "Indian" },
    { name: "Saag Paneer", category: "Indian" },
    { name: "Biryani", category: "Indian" },
    { name: "Tandoori Chicken", category: "Indian" },
    { name: "Chana Masala", category: "Indian" },
    { name: "Aloo Gobi", category: "Indian" },
    { name: "Samosas", category: "Indian" },
    { name: "Naan Bread", category: "Indian" },
    { name: "Gulab Jamun", category: "Indian Dessert" },
    
    // French Cuisine
    { name: "Coq au Vin", category: "French" },
    { name: "Beef Bourguignon", category: "French" },
    { name: "Sole Meunière", category: "French" },
    { name: "Duck Confit", category: "French" },
    { name: "Crème Brûlée", category: "French Dessert" },
    { name: "Cassoulet", category: "French" },
    { name: "Escargot", category: "French" },
    { name: "Filet Mignon", category: "French" },
    { name: "Ratatouille", category: "French" },
    { name: "French Onion Soup", category: "French" },
    
    // Seafood
    { name: "Grilled Salmon", category: "Seafood" },
    { name: "Shrimp Scampi", category: "Seafood" },
    { name: "Fish and Chips", category: "Seafood" },
    { name: "Lobster Tails", category: "Seafood" },
    { name: "Crab Cakes", category: "Seafood" },
    { name: "Mussels in White Wine", category: "Seafood" },
    { name: "Clam Chowder", category: "Seafood" },
    { name: "Tuna Steak", category: "Seafood" },
    { name: "Paella", category: "Seafood" },
    { name: "Baked Cod", category: "Seafood" },
    
    // Vegetarian/Vegan
    { name: "Vegetable Stir Fry", category: "Vegetarian" },
    { name: "Bean Chili", category: "Vegetarian" },
    { name: "Stuffed Bell Peppers", category: "Vegetarian" },
    { name: "Veggie Burger", category: "Vegetarian" },
    { name: "Tofu Pad Thai", category: "Vegetarian" },
    { name: "Quinoa Bowl", category: "Vegetarian" },
    { name: "Caprese Salad", category: "Vegetarian" },
    { name: "Veggie Pizza", category: "Vegetarian" },
    { name: "Lentil Soup", category: "Vegetarian" },
    { name: "Buddha Bowl", category: "Vegetarian" },
    
    // Comfort Food
    { name: "Grilled Cheese Sandwich", category: "Comfort Food" },
    { name: "Tomato Soup", category: "Comfort Food" },
    { name: "Baked Beans", category: "Comfort Food" },
    { name: "Cornbread", category: "Comfort Food" },
    { name: "Biscuits and Gravy", category: "Comfort Food" },
    { name: "Turkey Meatballs", category: "Comfort Food" },
    { name: "Chicken Noodle Soup", category: "Comfort Food" },
    { name: "French Toast", category: "Comfort Food" },
    { name: "Pancakes", category: "Comfort Food" },
    { name: "Fried Egg Sandwich", category: "Comfort Food" },
    
    // BBQ/Grilled
    { name: "BBQ Chicken", category: "BBQ" },
    { name: "Grilled Vegetables", category: "BBQ" },
    { name: "Hot Dogs", category: "BBQ" },
    { name: "Beef Brisket", category: "BBQ" },
    { name: "Grilled Corn", category: "BBQ" },
    { name: "BBQ Pulled Chicken", category: "BBQ" },
    { name: "Tri-Tip Steak", category: "BBQ" },
    { name: "Grilled Lamb Chops", category: "BBQ" },
    { name: "Chicken Skewers", category: "BBQ" },
    { name: "Smoked Turkey", category: "BBQ" },
    
    // World Cuisine
    { name: "Shawarma", category: "Middle Eastern" },
    { name: "Falafel", category: "Middle Eastern" },
    { name: "Kimchi and Rice", category: "Korean" },
    { name: "Korean BBQ", category: "Korean" },
    { name: "Bibimbap", category: "Korean" },
    { name: "Tacos al Pastor", category: "Mexican" },
    { name: "Empanadas", category: "Latin American" },
    { name: "Ceviche", category: "Latin American" },
    { name: "Goulash", category: "European" },
    { name: "Schnitzel", category: "European" },
    
    // Breakfast for Dinner
    { name: "Scrambled Eggs with Toast", category: "Breakfast" },
    { name: "Breakfast Burritos", category: "Breakfast" },
    { name: "Waffle and Bacon", category: "Breakfast" },
    { name: "Omelette", category: "Breakfast" },
    { name: "Hash Browns with Eggs", category: "Breakfast" },
    { name: "Breakfast Pizza", category: "Breakfast" },
    { name: "Pancakes and Sausage", category: "Breakfast" },
    { name: "Eggs Benedict", category: "Breakfast" },
    { name: "Breakfast Sandwich", category: "Breakfast" },
    { name: "Shakshuka", category: "Breakfast" },
    
    // Pizza & Pasta Variations
    { name: "Margherita Pizza", category: "Italian" },
    { name: "Pepperoni Pizza", category: "Italian" },
    { name: "Supreme Pizza", category: "Italian" },
    { name: "White Pizza", category: "Italian" },
    { name: "Tortellini Alfredo", category: "Italian" },
    { name: "Gnocchi", category: "Italian" },
    { name: "Baked Ziti", category: "Italian" },
    { name: "Penne Primavera", category: "Italian" },
    { name: "Macaroni and Cheese", category: "Italian-American" },
    { name: "Spaghetti with Meatballs", category: "Italian-American" },
    
    // Light/Healthy Options
    { name: "Grilled Chicken Breast", category: "Healthy" },
    { name: "Steamed Broccoli", category: "Healthy" },
    { name: "Turkey Meatloaf", category: "Healthy" },
    { name: "Salmon with Lemon", category: "Healthy" },
    { name: "Veggie Spring Rolls", category: "Healthy" },
    { name: "Chickpea Salad", category: "Healthy" },
    { name: "Kale Caesar Salad", category: "Healthy" },
    { name: "Turkey Burger", category: "Healthy" },
    { name: "Grilled Fish Tacos", category: "Healthy" },
    { name: "Lean Ground Beef", category: "Healthy" },
    
    // Slow Cooker/Easy Meals
    { name: "Slow Cooker Chili", category: "Easy" },
    { name: "Pulled Pork", category: "Easy" },
    { name: "Slow Cooker Stew", category: "Easy" },
    { name: "Crockpot Chicken", category: "Easy" },
    { name: "Beef Stew", category: "Easy" },
    { name: "Slow Cooker Tacos", category: "Easy" },
    { name: "Crockpot Roast", category: "Easy" },
    { name: "Slow Cooker Curry", category: "Easy" },
    { name: "Crockpot Soup", category: "Easy" },
    { name: "Slow Cooker Ribs", category: "Easy" },
    
    // Spicy Options
    { name: "Spicy Chicken Wings", category: "Spicy" },
    { name: "Spicy Sriracha Noodles", category: "Spicy" },
    { name: "Hot and Spicy Curry", category: "Spicy" },
    { name: "Jalapeño Chicken", category: "Spicy" },
    { name: "Spicy Korean Stew", category: "Spicy" },
    { name: "Ghost Pepper Chili", category: "Spicy" },
    { name: "Spicy Shrimp Pasta", category: "Spicy" },
    { name: "Thai Red Curry", category: "Spicy" },
    { name: "Habanero Tacos", category: "Spicy" },
    { name: "Spicy Beef Satay", category: "Spicy" }
];

const SNACKS = [
    // Classic Movie Snacks
    { name: "Buttered Popcorn", category: "Popcorn" },
    { name: "Caramel Popcorn", category: "Popcorn" },
    { name: "Cheese Popcorn", category: "Popcorn" },
    { name: "Spicy Popcorn", category: "Popcorn" },
    { name: "Kettle Corn", category: "Popcorn" },
    { name: "Movie Theater Popcorn", category: "Popcorn" },
    { name: "Sriracha Popcorn", category: "Popcorn" },
    { name: "Dill Pickle Popcorn", category: "Popcorn" },
    { name: "White Chocolate Popcorn", category: "Popcorn" },
    { name: "Cinnamon Sugar Popcorn", category: "Popcorn" },
    
    // Chocolate Treats
    { name: "Chocolate Chip Cookies", category: "Chocolate" },
    { name: "Brownie", category: "Chocolate" },
    { name: "Chocolate Covered Almonds", category: "Chocolate" },
    { name: "Chocolate Truffles", category: "Chocolate" },
    { name: "Chocolate Fudge", category: "Chocolate" },
    { name: "Chocolate Mousse", category: "Chocolate" },
    { name: "Cocoa Dusted Almonds", category: "Chocolate" },
    { name: "Chocolate Caramels", category: "Chocolate" },
    { name: "Chocolate Pudding", category: "Chocolate" },
    { name: "Chocolate Granola Bars", category: "Chocolate" },
    
    // Candy & Sweets
    { name: "Gummy Bears", category: "Candy" },
    { name: "Sour Gummy Worms", category: "Candy" },
    { name: "Jelly Beans", category: "Candy" },
    { name: "Skittles", category: "Candy" },
    { name: "M&Ms", category: "Candy" },
    { name: "Lollipops", category: "Candy" },
    { name: "Hard Candy", category: "Candy" },
    { name: "Taffy Candy", category: "Candy" },
    { name: "Licorice Twists", category: "Candy" },
    { name: "Sour Patch Kids", category: "Candy" },
    
    // Nuts & Seeds
    { name: "Almonds", category: "Nuts" },
    { name: "Cashews", category: "Nuts" },
    { name: "Pecans", category: "Nuts" },
    { name: "Walnuts", category: "Nuts" },
    { name: "Pistachios", category: "Nuts" },
    { name: "Mixed Nuts", category: "Nuts" },
    { name: "Candied Pecans", category: "Nuts" },
    { name: "Honey Roasted Almonds", category: "Nuts" },
    { name: "Spiced Cashews", category: "Nuts" },
    { name: "Sunflower Seeds", category: "Seeds" },
    
    // Salty Snacks
    { name: "Potato Chips", category: "Salty" },
    { name: "Tortilla Chips", category: "Salty" },
    { name: "Pretzels", category: "Salty" },
    { name: "Cheese Crackers", category: "Salty" },
    { name: "Saltines", category: "Salty" },
    { name: "Goldfish Crackers", category: "Salty" },
    { name: "Chex Mix", category: "Salty" },
    { name: "Wasabi Peas", category: "Salty" },
    { name: "Roasted Chickpeas", category: "Salty" },
    { name: "Dried Seaweed Snack", category: "Salty" },
    
    // Fruit Snacks
    { name: "Apple with Peanut Butter", category: "Fruit" },
    { name: "Banana Chips", category: "Fruit" },
    { name: "Dried Cranberries", category: "Fruit" },
    { name: "Dried Mango", category: "Fruit" },
    { name: "Raisins", category: "Fruit" },
    { name: "Dried Apricots", category: "Fruit" },
    { name: "Dried Blueberries", category: "Fruit" },
    { name: "Fruit Leather", category: "Fruit" },
    { name: "Fresh Strawberries", category: "Fruit" },
    { name: "Orange Slices", category: "Fruit" },
    
    // Dairy Snacks
    { name: "Cheese Cubes", category: "Dairy" },
    { name: "String Cheese", category: "Dairy" },
    { name: "Cheese and Crackers", category: "Dairy" },
    { name: "Yogurt", category: "Dairy" },
    { name: "Greek Yogurt Parfait", category: "Dairy" },
    { name: "Milk and Cookies", category: "Dairy" },
    { name: "Cottage Cheese", category: "Dairy" },
    { name: "Mozzarella Sticks", category: "Dairy" },
    { name: "Cheddar Cheese", category: "Dairy" },
    { name: "Parmesan Crisps", category: "Dairy" },
    
    // Homemade Treats
    { name: "Homemade Trail Mix", category: "Homemade" },
    { name: "Granola Bars", category: "Homemade" },
    { name: "Energy Balls", category: "Homemade" },
    { name: "Banana Bread", category: "Homemade" },
    { name: "Zucchini Bread", category: "Homemade" },
    { name: "Homemade Granola", category: "Homemade" },
    { name: "Cookies and Cream Bites", category: "Homemade" },
    { name: "No-Bake Cheesecake Bites", category: "Homemade" },
    { name: "Homemade Beef Jerky", category: "Homemade" },
    { name: "Date and Almond Bars", category: "Homemade" },
    
    // Dips and Spreads
    { name: "Hummus and Veggies", category: "Dips" },
    { name: "Guacamole and Chips", category: "Dips" },
    { name: "Salsa and Chips", category: "Dips" },
    { name: "Spinach Artichoke Dip", category: "Dips" },
    { name: "Ranch Dip and Veggies", category: "Dips" },
    { name: "Peanut Butter and Crackers", category: "Dips" },
    { name: "Almond Butter and Apple", category: "Dips" },
    { name: "Cream Cheese and Pepperoni", category: "Dips" },
    { name: "Queso Dip and Chips", category: "Dips" },
    { name: "Hummus Wrap", category: "Dips" },
    
    // Soda and Drinks (pairing suggestions)
    { name: "Coca-Cola", category: "Drink" },
    { name: "Sprite", category: "Drink" },
    { name: "Orange Fanta", category: "Drink" },
    { name: "Root Beer Float", category: "Drink" },
    { name: "Lemonade", category: "Drink" },
    { name: "Iced Tea", category: "Drink" },
    { name: "Ginger Ale", category: "Drink" },
    { name: "Hot Chocolate", category: "Drink" },
    { name: "Coffee", category: "Drink" },
    { name: "Milkshake", category: "Drink" },
    
    // Ice Cream & Frozen Treats
    { name: "Vanilla Ice Cream", category: "Frozen" },
    { name: "Chocolate Ice Cream", category: "Frozen" },
    { name: "Strawberry Ice Cream", category: "Frozen" },
    { name: "Mint Chocolate Chip", category: "Frozen" },
    { name: "Cookie Dough Ice Cream", category: "Frozen" },
    { name: "Salted Caramel Ice Cream", category: "Frozen" },
    { name: "Rocky Road Ice Cream", category: "Frozen" },
    { name: "Butter Pecan Ice Cream", category: "Frozen" },
    { name: "Ice Cream Sandwich", category: "Frozen" },
    { name: "Frozen Yogurt", category: "Frozen" },
    
    // Baked Goods
    { name: "Sugar Cookie", category: "Baked" },
    { name: "Oatmeal Raisin Cookie", category: "Baked" },
    { name: "Peanut Butter Cookie", category: "Baked" },
    { name: "Double Chocolate Chip", category: "Baked" },
    { name: "Shortbread Cookie", category: "Baked" },
    { name: "Snickerdoodle", category: "Baked" },
    { name: "Molasses Cookie", category: "Baked" },
    { name: "Biscotti", category: "Baked" },
    { name: "Donuts", category: "Baked" },
    { name: "Cinnamon Roll", category: "Baked" },
    
    // Spicy Snacks
    { name: "Spicy Chips", category: "Spicy" },
    { name: "Ghost Pepper Peanuts", category: "Spicy" },
    { name: "Jalapeño Poppers", category: "Spicy" },
    { name: "Spicy Beef Jerky", category: "Spicy" },
    { name: "Sriracha Almonds", category: "Spicy" },
    { name: "Spicy Pumpkin Seeds", category: "Spicy" },
    { name: "Habanero Cashews", category: "Spicy" },
    { name: "Spicy Popcorn Seasoning", category: "Spicy" },
    { name: "Thai Chili Peanuts", category: "Spicy" },
    { name: "Spicy Wasabi Mix", category: "Spicy" },
    
    // Protein Snacks
    { name: "Protein Bar", category: "Protein" },
    { name: "Trail Mix with Protein", category: "Protein" },
    { name: "Beef Jerky", category: "Protein" },
    { name: "Turkey Jerky", category: "Protein" },
    { name: "Protein Chips", category: "Protein" },
    { name: "Roasted Chickpeas", category: "Protein" },
    { name: "Hard Boiled Eggs", category: "Protein" },
    { name: "Nuts and Seeds Mix", category: "Protein" },
    { name: "Cottage Cheese with Fruit", category: "Protein" },
    { name: "Peanut Butter Bites", category: "Protein" },
    
    // Gourmet/Fancy Snacks
    { name: "Chocolate Mousse", category: "Gourmet" },
    { name: "Brie and Crackers", category: "Gourmet" },
    { name: "Aged Cheddar", category: "Gourmet" },
    { name: "Prosciutto and Melon", category: "Gourmet" },
    { name: "Caviar and Blini", category: "Gourmet" },
    { name: "Smoked Salmon and Cream Cheese", category: "Gourmet" },
    { name: "Pâté and Toast", category: "Gourmet" },
    { name: "Truffle Oil Popcorn", category: "Gourmet" },
    { name: "Goat Cheese and Honey", category: "Gourmet" },
    { name: "Dark Chocolate and Sea Salt", category: "Gourmet" },
    
    // Vegan Snacks
    { name: "Vegan Trail Mix", category: "Vegan" },
    { name: "Vegan Granola Bars", category: "Vegan" },
    { name: "Coconut Chips", category: "Vegan" },
    { name: "Almond Flour Cookies", category: "Vegan" },
    { name: "Tahini Cookies", category: "Vegan" },
    { name: "Chia Seed Pudding", category: "Vegan" },
    { name: "Dates Stuffed with Almonds", category: "Vegan" },
    { name: "Vegan Protein Balls", category: "Vegan" },
    { name: "Cashew Cream", category: "Vegan" },
    { name: "Matcha Energy Bites", category: "Vegan" },
    
    // Seasonal Snacks
    { name: "Pumpkin Seeds", category: "Seasonal" },
    { name: "Gingerbread Cookies", category: "Seasonal" },
    { name: "Candy Corn", category: "Seasonal" },
    { name: "Eggnog", category: "Seasonal" },
    { name: "Pumpkin Spice Everything", category: "Seasonal" },
    { name: "Pecan Pie Bites", category: "Seasonal" },
    { name: "Candy Canes", category: "Seasonal" },
    { name: "Holiday Fudge", category: "Seasonal" },
    { name: "Cranberry Muffin", category: "Seasonal" },
    { name: "Candied Pecans", category: "Seasonal" },
    
    // Fun Mix Options
    { name: "Sweet and Salty Mix", category: "Mix" },
    { name: "Trail Mix Deluxe", category: "Mix" },
    { name: "Chocolate and Pretzel Mix", category: "Mix" },
    { name: "Candy and Popcorn", category: "Mix" },
    { name: "Nuts and Chocolate", category: "Mix" },
    { name: "Fruit and Nut Combo", category: "Mix" },
    { name: "Chip and Dip Combo", category: "Mix" },
    { name: "Sweet Breakfast Mix", category: "Mix" },
    { name: "Savory Party Mix", category: "Mix" },
    { name: "Dessert Medley", category: "Mix" }
];



let pickBtn, pickAgainBtn, movieCard, movieTitle, movieMeta, movieDescription;
let dinnerBtn, dinnerAgainBtn, dinnerCard, dinnerName, dinnerDescription;
let snackBtn, snackAgainBtn, snackCard, snackName, snackDescription;


function pickRandomMovie() {
    try {
        if (!MOVIES || !Array.isArray(MOVIES) || MOVIES.length === 0) {
            console.error('❌ MOVIES array not found');
            if (movieTitle) movieTitle.textContent = 'Error: Movie list not loaded';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }
        const randomIndex = Math.floor(Math.random() * MOVIES.length);
        const selectedMovie = MOVIES[randomIndex];
        if (!selectedMovie || !selectedMovie.title) {
            console.error('❌ Invalid movie object');
            if (movieTitle) movieTitle.textContent = 'Error: Invalid movie data';
            if (movieCard) movieCard.classList.remove('hidden');
            return;
        }
        updateMovieCard(selectedMovie);
        if (movieCard) movieCard.classList.remove('hidden');
        console.log('✅ Movie selected:', selectedMovie.title);
    } catch (error) {
        console.error('❌ Error in pickRandomMovie:', error);
        if (movieTitle) movieTitle.textContent = 'Error: ' + error.message;
        if (movieCard) movieCard.classList.remove('hidden');
    }
}

function updateMovieCard(movie) {
    try {
        if (!movieTitle || !movieMeta || !movieDescription) {
            console.error('❌ Movie card elements not initialized');
            return;
        }
        movieTitle.textContent = movie.title || 'Unknown Title';
        const year = movie.year || 'N/A';
        const rating = movie.rating || 'Not Rated';
        movieMeta.innerHTML = `<span class="movie-year">${year}</span><span class="movie-rating">${rating}</span>`;
        movieDescription.textContent = movie.description && movie.description.trim() ? movie.description : 'Short description coming soon.';
    } catch (error) {
        console.error('❌ Error updating movie card:', error);
    }
}

function pickRandomDinner() {
    try {
        if (!DINNER || !Array.isArray(DINNER) || DINNER.length === 0) {
            console.error('❌ DINNER array not found');
            if (dinnerName) dinnerName.textContent = 'Error: Dinner list not loaded';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }
        const randomIndex = Math.floor(Math.random() * DINNER.length);
        const selectedDinner = DINNER[randomIndex];
        if (!selectedDinner || !selectedDinner.name) {
            console.error('❌ Invalid dinner object');
            if (dinnerName) dinnerName.textContent = 'Error: Invalid dinner data';
            if (dinnerCard) dinnerCard.classList.remove('hidden');
            return;
        }
        updateDinnerCard(selectedDinner);
        if (dinnerCard) dinnerCard.classList.remove('hidden');
        console.log('✅ Dinner selected:', selectedDinner.name);
    } catch (error) {
        console.error('❌ Error in pickRandomDinner:', error);
        if (dinnerName) dinnerName.textContent = 'Error: ' + error.message;
        if (dinnerCard) dinnerCard.classList.remove('hidden');
    }
}

function updateDinnerCard(dinner) {
    try {
        if (!dinnerName || !dinnerDescription) {
            console.error('❌ Dinner card elements not initialized', {dinnerName, dinnerDescription});
            return;
        }
        dinnerName.textContent = dinner.name || 'Unknown Dinner';
        dinnerDescription.textContent = `Category: ${dinner.category || 'General'} • Perfect for movie night!`;
    } catch (error) {
        console.error('❌ Error updating dinner card:', error);
    }
}

function pickRandomSnack() {
    try {
        if (!SNACKS || !Array.isArray(SNACKS) || SNACKS.length === 0) {
            console.error('❌ SNACKS array not found');
            if (snackName) snackName.textContent = 'Error: Snack list not loaded';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }
        const randomIndex = Math.floor(Math.random() * SNACKS.length);
        const selectedSnack = SNACKS[randomIndex];
        if (!selectedSnack || !selectedSnack.name) {
            console.error('❌ Invalid snack object');
            if (snackName) snackName.textContent = 'Error: Invalid snack data';
            if (snackCard) snackCard.classList.remove('hidden');
            return;
        }
        updateSnackCard(selectedSnack);
        if (snackCard) snackCard.classList.remove('hidden');
        console.log('✅ Snack selected:', selectedSnack.name);
    } catch (error) {
        console.error('❌ Error in pickRandomSnack:', error);
        if (snackName) snackName.textContent = 'Error: ' + error.message;
        if (snackCard) snackCard.classList.remove('hidden');
    }
}

function updateSnackCard(snack) {
    try {
        if (!snackName || !snackDescription) {
            console.error('❌ Snack card elements not initialized', {snackName, snackDescription});
            return;
        }
        snackName.textContent = snack.name || 'Unknown Snack';
        snackDescription.textContent = `Category: ${snack.category || 'General'} • The perfect movie snack!`;
    } catch (error) {
        console.error('❌ Error updating snack card:', error);
    }
}

function attachEventListeners() {
    if (pickBtn) {
        pickBtn.addEventListener('click', () => {
            pickRandomMovie();
            pickBtn.style.transform = 'scale(0.95)';
            setTimeout(() => { pickBtn.style.transform = 'scale(1)'; }, 100);
        });
    }
    if (pickAgainBtn) {
        pickAgainBtn.addEventListener('click', () => {
            if (movieCard) movieCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomMovie();
                if (movieCard) movieCard.style.opacity = '1';
            }, 300);
        });
    }
    if (dinnerBtn) {
        dinnerBtn.addEventListener('click', () => {
            pickRandomDinner();
            dinnerBtn.style.transform = 'scale(0.95)';
            setTimeout(() => { dinnerBtn.style.transform = 'scale(1)'; }, 100);
        });
    }
    if (dinnerAgainBtn) {
        dinnerAgainBtn.addEventListener('click', () => {
            if (dinnerCard) dinnerCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomDinner();
                if (dinnerCard) dinnerCard.style.opacity = '1';
            }, 300);
        });
    }
    if (snackBtn) {
        snackBtn.addEventListener('click', () => {
            pickRandomSnack();
            snackBtn.style.transform = 'scale(0.95)';
            setTimeout(() => { snackBtn.style.transform = 'scale(1)'; }, 100);
        });
    }
    if (snackAgainBtn) {
        snackAgainBtn.addEventListener('click', () => {
            if (snackCard) snackCard.style.opacity = '0.5';
            setTimeout(() => {
                pickRandomSnack();
                if (snackCard) snackCard.style.opacity = '1';
            }, 300);
        });
    }
    console.log('✅ All event listeners attached successfully');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Movie Picker Initializing...');
    pickBtn = document.getElementById('pickBtn');
    pickAgainBtn = document.getElementById('pickAgainBtn');
    movieCard = document.getElementById('movieCard');
    movieTitle = document.getElementById('movie-title');
    movieMeta = document.getElementById('movie-meta');
    movieDescription = document.getElementById('movie-description');
    dinnerBtn = document.getElementById('dinnerBtn');
    dinnerAgainBtn = document.getElementById('dinnerAgainBtn');
    dinnerCard = document.getElementById('dinnerCard');
    dinnerName = document.getElementById('dinner-name');
    dinnerDescription = document.getElementById('dinner-description');
    snackBtn = document.getElementById('snackBtn');
    snackAgainBtn = document.getElementById('snackAgainBtn');
    snackCard = document.getElementById('snackCard');
    snackName = document.getElementById('snack-name');
    snackDescription = document.getElementById('snack-description');
    console.log(`✅ MOVIES loaded: ${MOVIES.length} movies`);
    console.log(`✅ DINNER loaded: ${DINNER.length} dinners`);
    console.log(`✅ SNACKS loaded: ${SNACKS.length} snacks`);
    attachEventListeners();
    console.log('🎉 Movie Picker Ready!');
});