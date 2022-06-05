/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

/* 
 NOTE for Professor:
 There will be many characters like '’' throughout the document because 
 I wrote all the product information inside MS Word first and then moved it into the JSON file. 
 Also, please forgive any grammatical errors because I am sure you will find many throughout the descriptions 
*/

window.products = [
  {
    id: "P1",
    title: "Sony PlayStation 2",
    description:
      "Released in 2001, Sony PlayStation 2 is the best-selling video game console ever. On its release, it not only stormed the markets but also revolutionized the world of gaming by having a huge impact on how future gaming consoles and games would be developed!",
    price: 7999,
    discontinued: true,
    categories: ["c1"],
    imageURL: ""
  },
  {
    id: "P2",
    title: "Sony PlayStation 3",
    description:
      "Released in 2006, Sony PlayStation 3 is the successor of Sony PS2, which was a huge success. Although it was not as big a success as its predecessor, it still stands out as one of the best gaming consoles ever launched in the market with masterpiece titles like God of War 3 released for this console specifically.",
    price: 14999,
    discontinued: true,
    categories: ["c1"],
    imageURL: ""
  },
  {
    id: "P3",
    title: "Sony PlayStation 4",
    description:
      "Sony PlayStation 4 was released after 7 years of its predecessor and was instantly a huge success since its launch. It was designed so well that its technology has not been rendered obsolete even today. After Sony's PS2, this console was sold the most units and is considered the best console from Sony and even overall, sometimes.",
    price: 29999,
    discontinued: false,
    categories: ["c1"],
    imageURL: "./Images/ps4.jpg"
  },
  {
    id: "P4",
    title: "Sony PlayStation 5",
    description:
      "PlayStation 5 is the latest gaming console from Sony, just released at the end of last year (2020). The demand for this console is huge and is expected to be an even bigger success than its predecessors by many experts, owing to the announcement of huge titles like God of War 5, Horizon Forbidden West, and many more!",
    price: 49999,
    discontinued: false,
    categories: ["c1"],
    imageURL: "./Images/ps5.jpg"
  },
  {
    id: "P5",
    title: "XBOX 360",
    description:
      "One of the most prominent gaming consoles released by Microsoft which was a prime competitor of Sony’s PS3 and according to many critics, was better than a PS3. This was the only console that could break Sony’s monopoly in the gaming market at that time and helped Microsoft make its entry into the console market, even though they already enjoyed the biggest market in PC gaming due to the fact that most computers in the world run on Windows.",
    price: 10999,
    discontinued: false,
    categories: ["c1"],
    imageURL: "./Images/xbox360.jpg"
  },
  {
    id: "P6",
    title: "XBOX ONE",
    description:
      "Microsoft released this console as a successor of XBOX 360 and it was a huge upgrade both in terms of gameplay as well as technology. XBOX One was, and still, is the closest competitor of Sony’s PS4. It offers many exclusive titles, which cannot run on other consoles, including any PlayStation like Sea of Thieves, Halo Series and many more.",
    price: 17999,
    discontinued: false,
    categories: ["c1"],
    imageURL: "./Images/xboxOne.jpg"
  },
  {
    id: "P12",
    title: "God of War 2",
    description:
      "God of War 2 is an action, adventure which revolves around a guy named Kratos who becomes the Greek mythology’s God of War from being a simple man. After killing the original God of War at Zeus’ request, he is betrayed and killed by Zeus himself. However, Kratos defies his death and returns to life with the aid of a Titan named Gaia and sets out on his journey to go back in time with the help of Sisters of Fate and finally, destroy Zeus, the Greek King of Gods.",
    price: 599,
    discontinued: false,
    categories: ["c3"],
    imageURL: "https://upload.wikimedia.org/wikipedia/en/3/3c/Gow2-2.jpg"
  },
  {
    id: "P13",
    title: "God of War (2018)",
    description:
      "God of War (2018), also known as God of War 4 is a comeback of the God of War series 7 years after Kratos killed himself by thrusting the infamous 'Blade of Olympus’ in his abdomen soon after he succeeded in killing Zeus and his quest of Vengeance. This time Kratos is traveling in the world of Norse Mythology and his purpose is yet unknown. To know more, buy and play the game yourself.",
    price: 1999,
    discontinued: false,
    categories: ["c3"],
    imageURL: "./Images/God_of_War_4.jpg"
  },
  {
    id: "P14",
    title: "Ghost of Tsushima",
    description:
      "Discover Tsushima's hidden treasures in this open-world action-adventure from Sucker Punch Productions and PlayStation Studios, available for PlayStation 5 and PlayStation 4. Forge a new path and fight an unorthodox war for Tsushima's liberation. On Iki Island, test your katana against opponents, perfect the bow to eliminate distant dangers, create stealth methods to ambush enemies, and discover a new adventure.",
    price: 5999,
    discontinued: false,
    categories: ["c3"],
    imageURL: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"
  },
  {
    id: "P15",
    title: "Fortnite",
    description:
      "Released in 2017 by Epic Games, Fortnite has been one of the most influential games in the world of Gaming. It has achieved such huge successes that it is no more a game, instead, it has become a brand since other games (and I am talking about big titles) choose Fortnite as a platform for advertisement simply because of its popularity and massive player base. However, it is not recommended to ever play this game since it causes serious harm to your mental health and life. This game is so toxic that a person can, for once, survive King Cobra’s Venom, but the same person can die because of the sweats and toxic players who play this game since its release.",
    price: 0,
    discontinued: false,
    categories: ["c3"],
    imageURL:
      "https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg?width=300&crop=1%3A1%2Csmart&dpr=2"
  },
  {
    id: "P16",
    title: "Counter-Strike Global Offensive",
    description:
      "CSGO, originally counterstrike, traces its origins back from the year of 2001 and is the only game in the market which has survived for more than 20 years and still has a decent player base. The main mode of this game is based on a concept where 2 teams, terrorists and counter-terrorists, play on opposite teams with a simple objective for both sides. Terrorists must plant a bomb and defend it until it blows off, or simply kill all the enemies in the CT team. On the other hand, Counter-Terrorists must either kill all the terrorists or defuse the bomb if it’s already planted before it blows off. Today, this game has evolved to have many different types of game modes which you can choose from depending on your mood like Team Deathmatch, War games, Flying Scouts-man with 20 different maps to play on.",
    price: 999,
    discontinued: false,
    categories: ["c3"],
    imageURL: "https://www.gamblingsites.org/wp-content/uploads/2021/01/CSGO-Betting-1.jpg"
  },
  {
    id: "P17",
    title: "Intel i7 10750h",
    description:
      "This processor is meant only for users who want to squeeze every single bit of performance from a computer and want to either build a beast PC for gaming or run programs which significantly consume resources. It is the best performing Intel CPU after the Intel i9 series with 6 dedicated cores, 12 threads, and runs on a base clock of 2.6Ghz with a maximum frequency of 5Ghz.",
    price: 39499,
    discontinued: false,
    categories: ["c4"],
    imageURL: "./Images/coreI7.jpg"
  },
  {
    id: "P18",
    title: "AMD Ryzen 7",
    description:
      "This processor comes with 8 cores, 16 threads and runs on a base clock of 2.9Ghz with 4.2Ghz as the maximum frequency. The Ryzen series has always been the best choice for gamers because these processors can squeeze better performance than their Intel counterparts at the same price. However, people often disregard the fact that Intel processors are shipped with better thermal optimization and power efficiency.",
    price: 44999,
    discontinued: false,
    categories: ["c4"],
    imageURL: "./Images/ryzen7.jpg"
  },
  {
    id: "P19",
    title: "Nvidia GeForce GTX 1650ti",
    description:
      "The GTX 1650ti is an entry-level to mid-range GPU meant for geeks, who want to game at the best price. It is based on the Turing architecture and 4GB dedicated graphics memory. It is a replacement for the old generation GTX 1050ti, which was the mid-range king of the previous generation, with considerable performance boost over the latter.",
    price: 35499,
    discontinued: false,
    categories: ["c4"],
    imageURL: "./Images/gtx.jpg"
  },
  {
    id: "P20",
    title: "Nvidia GeForce RTX  3070ti",
    description:
      "The GeForce RTX  3070ti falls under the category of 'Big Boy league’ in the world of Graphics processors. Broadly speaking, this GPU is capable of handling the most graphic-intensive tasks you can imagine and there is, realistically, no need to go beyond this GPU, unless considering the future perspective. In the context of gaming, it will give more than 100 fps in any game you can think of, currently in the market at ultra-settings (PS: RTX off).",
    price: 81999,
    discontinued: false,
    categories: ["c4"],
    imageURL: "./Images/rtx.jpg"
  },
  {
    id: "P7",
    title: "Dell G3 15",
    description:
      "Dell G3 15 is an excellent budget gaming laptop recently released in Dell’s latest G series in 2020. This laptop comes with a GTX1650 4GB which is an entry-level GPU but can run most of the games in the market with decent performance, which is made possible by Intel’s 10thgen i5 processor and 8 gigs of 2933Mhz of DDR4 RAM.",
    price: 141599,
    discontinued: false,
    categories: ["c2", "c4"],
    imageURL: "./Images/g3.jpg"
  },
  {
    id: "P8",
    title: "Dell G5 SE",
    description:
      "Dell G5 SE was also released with the latest G series of Dell. This laptop is a step up from Dell’s G3 since it comes with an intel i7 10th gen processor accompanied with a GTX1660 4GB GPU and 16 GB DDR4 RAM, which means a massive increase in performance from a Dell G3 laptop.",
    price: 199999,
    discontinued: false,
    categories: ["c2", "c4"],
    imageURL: "./Images/g315.jpg"
  },
  {
    id: "P9",
    title: "Dell G15 (2021)”",
    description:
      "This laptop was released as an upgrade for the DELL G3 15 with many of the design defects experienced by customers fixed in this model. Not only this, but it also comes with an RTX3050 GPU with Nvidia’s latest Ray Tracing technology instead of a plain old GTX1650. Even though this improvement sounds huge, it only makes a marginal difference with fingerprint lock offered in G3 model also gone.",
    price: 119999,
    discontinued: false,
    categories: ["c2", "c4"],
    imageURL: "./Images/g315.jpg"
  },
  {
    id: "P10",
    title: "HP Pavilion 15",
    description:
      "HP Pavilion 15 does not need any introduction because of how famous the series is in the laptop market. This laptop is suitable for only regular users who just want to do their work and need a laptop with good design, feel and performance (Not suitable for gaming). It comes with an Intel Core i5-1135G7 processor, 8 Gigs of DDR4 RAM with a 512GB high-speed SSD.",
    price: 99999,
    discontinued: false,
    categories: ["c2", "c4"],
    imageURL: "./Images/omen.jpg"
  },
  {
    id: "P11",
    title: "HP Omen 15",
    description:
      "HP Omen 15 is currently the best option (opinions may vary) for gaming in the market. It comes with an Intel Core i7-10750H, Nvidia RTX 3060 GPU, and 16GB DDR4 RAM, which makes it a truly monstrous beast.",
    price: 149999,
    discontinued: false,
    categories: ["c2", "c4"],
    imageURL: "./Images/omen.jpg"
  },
  {
    id: "P23",
    title: "Logitech G432 Headsets",
    description:
      "The Logitech G432 Headsets are the best headsets in the market a gamer could get under $100. These headsets have excellent quality built-in DTS: 7.1 Surround Sound technology with leatherette ear cups. Not only this, but it also comes with a 6 mm flip-to-mute mic with volume control at your fingertips",
    price: 7463,
    discontinued: false,
    categories: ["c5"],
    imageURL: "./Images/headsets.jpg"
  },
  {
    id: "P25",
    title: "Logitech G203 Gaming Mouse",
    description:
      "Looking for a budget gaming mouse, that will allow you to win fps combat. This mouse will give you a premium experience and with its impressive responsive nature and light-weight, it won’t let you down in intense battles!",
    price: 3999,
    discontinued: false,
    categories: ["c5"],
    imageURL: "./Images/mouse.jpg"
  },
  {
    id: "P21",
    title: "Redgear MP35 Mousepad",
    description:
      "Need a reliable, smooth, and cheap mousepad for gaming. We got you covered. This is the only quality mousepad in the market under $5 and comes in two versions- Control Type and Speed Type and gamers can choose according to their play style. Suits gamers who need to hit targets faster and straight on the head!",
    price: 399,
    discontinued: false,
    categories: ["c5"],
    imageURL: "./Images/mousePad.jpg"
  },
  {
    id: "P22",
    title: "Blue-light filter lenses",
    description:
      "Do you game all day long? Are you worried about your eyes and vision? If yes, then this is the best product for you right now. These lenses are built with the latest and most efficient blue light filtering technology and will allow you to game for hours without any strain on your eyes. Frames are provided with the lenses.",
    price: 9999,
    discontinued: false,
    categories: ["c5"],
    imageURL: "./Images/lenses.jpg"
  },
  {
    id: "P24",
    title: "ZINQ Laptop Coolpad",
    description:
      "Does your laptop often overheat, when playing games? Are you troubled with the thermal throttling of your system? Then it’s high time you got a cooling pad for your laptop. The ZINQ Technologies offer an excellent Cooling Pad that prevents your CPU and GPU from over-heating and lets you play for hours without worrying about your laptop’s health. It comes in 2 versions – one with 2 fans and the other with 6 fans. You can choose according to the size of your machine!",
    price: 999,
    discontinued: false,
    categories: ["c5"],
    imageURL: "./Images/cooler.jpg"
  }
];
